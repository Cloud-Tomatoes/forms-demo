import Component from '@glimmer/component';
import { Changeset } from 'ember-changeset';
import { action } from '@ember/object';
import { assign } from '@ember/polyfills';
import lookupValidator from 'ember-changeset-validations';
import * as Validators from 'ember-changeset-validations/validators';

export default class FormGeneratorComponent extends Component {


  constructor() {
    super(...arguments);
    this._buildGroups();
    this._buildChangesets();
  }


  // Actions

  @action
  submit() {
    this.changesets.forEach(ch => ch.execute());
    assign(this.blueprint.properties, this.groups);
    return this.args.onSubmit(this.blueprint);
  }

  @action
  continueIfValid(changeset, w, stepName, e) {
    this._validateChangeset(changeset)
      .then(() => this._transitionStep(w, stepName, e))
      .catch(() => false)
  }


  // Private Methods

  _buildGroups() {
    const blueprint = this.args.blueprint;
    const { properties } = blueprint;
    let groups = {};
    for (let prop in properties) {
      const group = properties[prop].ui.group;
      if (!groups[group])
        groups[group] = {}
      groups[group][prop] = properties[prop];
    }
    this.blueprint = blueprint;
    this.groups = groups;
  }

  _buildChangesets() {
    const groups = this.groups;
    let changesets = [];
    for (let group in groups) {
      const validations = this._getValidations(groups[group]);
      const groupChangeset = Changeset(groups[group], lookupValidator(validations), validations);
      changesets.push(groupChangeset)
    }
    this.changesets = changesets;
  }

  _getValidations(group) {
    let validation = {};
    for (let name in group) {
      const validationBlueprint = group[name].validation;
      if (validationBlueprint) {
        validation[name] = { value: [] };
        for (let val in validationBlueprint) {
          const validatorName = val.split("/").slice(-1);
          const options = validationBlueprint[val];
          validation[name]["value"].push(Validators[validatorName](options))
        }
      }
    }
    return validation;
  }

  _validateChangeset(changeset) {
    return changeset.validate()
      .then(() => {
        if (changeset.get('isValid'))
          return true;
        else
          throw 'invalid changeset';
      })
  }

  _transitionStep(stepManager, stepName, event) {
    stepManager.["transition-to"](stepName + 1);
    return event.preventDefault();
  }


}
