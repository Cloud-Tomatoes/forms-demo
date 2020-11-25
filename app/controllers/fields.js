import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FieldsController extends Controller {

  @action transitionToParentRoute() {
    return this.transitionToRoute('/');
  }
  
}
