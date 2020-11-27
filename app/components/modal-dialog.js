import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tryInvoke } from '@ember/utils';

export default class ModalDialogComponent extends Component {


  // Actions

  @action
  onHiddenModal() {
    return tryInvoke(this.args, "onClose");
  }

  @action
  submit(element) {
  }

};
