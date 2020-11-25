import Component from '@glimmer/component';
import { action } from '@ember/object';
import jQuery from 'jquery'

export default class ModalDialogComponent extends Component {


  // Lifecycle Hooks

  willDestroy(){
    this.elementModal.modal('hide').off();
  }


  // Actions

  @action openModal(element) {
    const onClose = this.args.onClose;
    this.elementModal = jQuery(element);
    this.elementModal.modal().on('hidden.bs.modal', onClose);
  }

};
