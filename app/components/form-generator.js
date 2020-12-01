import Component from '@glimmer/component';
import { Changeset } from 'ember-changeset';
import { tryInvoke } from '@ember/utils';
import { action } from '@ember/object';
import lookupValidator from 'ember-changeset-validations';
import * as Validators from 'ember-changeset-validations/validators';

export default class FormGeneratorComponent extends Component {


  // Getteres

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
  onSubmit() {
    return tryInvoke(this.args, 'onSubmit');
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

}
