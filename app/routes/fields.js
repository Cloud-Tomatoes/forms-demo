import Route from '@ember/routing/route';
import formBlueprint from 'forms-demo/utils/form-blueprint';

export default class FieldsRoute extends Route {

  model() {
    return formBlueprint.data;
  }

}
