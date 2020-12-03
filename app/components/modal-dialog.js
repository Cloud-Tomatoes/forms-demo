import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalDialogComponent extends Component {


  // Actions

  @action
  onHiddenModal() {
    const onClose = this.args.onClose;
    if (onClose)
      return this.args.onClose();
  }

  @action
  submit(element) {
  }

};
