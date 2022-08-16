import ModalComponent from 'ember-modal-service/components/modal';

class Modal extends ModalComponent {
    testProperties() {
        this.classNameBindings; // $ExpectType string[]
        this.classNames; // $ExpectType string[]
        this.elementId; // $ExpectType string
        this.scheduler; // $ExpectType Scheduler
        this.modal; // $ExpectType EmberModalService
        this.attributeBindings; // $ExpectType string[]
        this.ariaRole; // $ExpectType string
        this.visible; // $ExpectType boolean
        this['data-id']; // $ExpectType string
        this['data-modal-show']; // $ExpectType boolean
        this.resolve();
        this.reject();
        this.actions;
    }
}
