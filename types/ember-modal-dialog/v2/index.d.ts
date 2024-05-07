declare module "ember-modal-dialog/components/modal-dialog" {
    import Ember from "ember";

    // https://github.com/yapplabs/ember-modal-dialog/blob/v2.4.1/addon/components/modal-dialog.js#L28
    // https://www.npmjs.com/package/ember-modal-dialog#configurable-properties
    export default class ModalDialog extends Ember.Component {
        /**
         * Toggles presence of overlay div in DOM
         */
        hasOverlay: boolean;
        /**
         * Indicates translucence of overlay, toggles presence of translucent CSS
         * selector
         */
        translucentOverlay: boolean;
        /**
         * The action handler for the dialog's onClose action. This action triggers
         * when the user clicks the modal overlay.
         */
        onClose: () => void;
        /**
         * An action to be called when the overlay is clicked. If this action is
         * specified, clicking the overlay will invoke it instead of onClose.
         */
        onClickOverlay: () => void;
        /**
         * Indicates whether clicking outside a modal without an overlay should
         * close the modal. Useful if your modal isn't the focus of interaction, and
         * you want hover effects to still work outside the modal.
         */
        clickOutsideToClose: boolean;
        /**
         * A boolean, when true renders the modal without wormholing or tethering,
         * useful for including a modal in a style guide
         */
        renderInPlace: boolean;
        /**
         * either 'parent' or 'sibling', to control whether the overlay div is
         * rendered as a parent element of the container div or as a sibling to it
         * (default: 'parent')
         */
        overlayPosition: "parent" | "sibling";
        /**
         * CSS class name(s) to append to container divs. Set this from template.
         */
        containerClass: string;
        /**
         * CSS class names to append to container divs. This is a concatenated
         * property, so it does not replace the default container class
         * (default: 'ember-modal-dialog'. If you subclass this component, you may
         * define this in your subclass.)
         */
        containerClassNames: string[];
        /**
         * CSS class name(s) to append to overlay divs. Set this from template.
         */
        overlayClass: string;
        /**
         * CSS class names to append to overlay divs. This is a concatenated
         * property, so it does not replace the default overlay class
         * (default: 'ember-modal-overlay'. If you subclass this component, you may
         * define this in your subclass.)
         */
        overlayClassNames: string[];
        /**
         * CSS class name(s) to append to wrapper divs. Set this from template.
         */
        wrapperClass: string;
        /**
         * CSS class names to append to wrapper divs. This is a concatenated
         * property, so it does not replace the default container class
         * (default: 'ember-modal-wrapper'. If you subclass this component, you may
         * define this in your subclass.)
         */
        wrapperClassNames: string[];
        /**
         * A boolean, when true makes modal animatable using liquid-fire
         * (requires liquid-wormhole to be installed, and for tethering situations
         * liquid-tether. Having these optional dependencies installed and NOT
         * explicitly specifying animatable is deprecated in 2.x and is equivalent
         * to animatable=false for backwards compatibility. As of 3.x, the implicit
         * default will be animatable=true when the optional
         * liquid-wormhole/liquid-tether dependency is present.
         */
        animatable: boolean;
    }
}
