import ModalDialog from 'ember-modal-dialog/components/modal-dialog';

class MyDialog extends ModalDialog {
    // https://www.npmjs.com/package/ember-modal-dialog#configurable-properties
    testProperties() {
        this.hasOverlay; // $ExpectType boolean
        this.translucentOverlay; // $ExpectType boolean
        this.onClose();
        this.onClickOverlay();
        this.clickOutsideToClose; // $ExpectType boolean
        this.renderInPlace; // $ExpectType boolean
        this.overlayPosition; // $ExpectType "parent" | "sibling"
        this.containerClass; // $ExpectType string
        this.containerClassNames; // $ExpectType string[]
        this.overlayClass; // $ExpectType string
        this.overlayClassNames; // $ExpectType string[]
        this.wrapperClass; // $ExpectType string
        this.wrapperClassNames; // $ExpectType string[]
        this.animatable; // $ExpectType boolean
    }
}

class MyOtherDialog extends ModalDialog.extend({
    testProperties() {
        this.hasOverlay; // $ExpectType boolean
    },
}) {}
