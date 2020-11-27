import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormGeneratorComponent extends Component {

  get groups() {
    const blueprint = this.args.blueprint[0];
    const properties = blueprint.attributes.properties;
    let groups = {};
    for (let prop in properties) {
      const group = properties[prop].ui.group;
      if (!groups[group])
        groups[group] = []
      groups[group].push(properties[prop])
    }
    return groups;
  }

  get groupsList() {
    const groups = this.groups;
    return Object.keys(groups);
  }

  @action onSubmit() {
  }

}
