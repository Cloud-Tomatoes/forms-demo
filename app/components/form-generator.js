import Component from '@glimmer/component';
import { Changeset } from 'ember-changeset';
import { action } from '@ember/object';
import lookupValidator from 'ember-changeset-validations';
import * as Validators from 'ember-changeset-validations/validators';

export default class FormGeneratorComponent extends Component {


  // Getters

  get groups() {
    const blueprint = this.args.blueprint[0];
    const { properties } = blueprint.attributes;
    let groups = {};
    for (let prop in properties) {
      const group = properties[prop].ui.group;
      if (!groups[group])
        groups[group] = {}
      groups[group][prop] = properties[prop];
    }
    return groups;
  }

  get changesets() {
    const groups = this.groups;
    let changesets = [];
    for (let group in groups) {
      const validations = this._getValidations(groups[group]);
      const groupChangeset = Changeset(groups[group], lookupValidator(validations), validations);
      changesets.push(groupChangeset)
    }
    return changesets;
  }


  // Actions

  @action
  submitIfValid(changeset) {
    return this._validateChangeset(changeset)
      .then(() => this.args.onSubmit())
      .catch(() => false)
  }

  @action
  continueIfValid(changeset, w, stepName) {
    this._validateChangeset(changeset)
      .then(() => w.["transition-to"](stepName + 1) )
      .catch(() => false)
  }


  // Private Methods

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


}
