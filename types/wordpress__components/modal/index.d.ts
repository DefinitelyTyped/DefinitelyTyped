import {
    ComponentType,
    HTMLProps,
    ReactNode,
    KeyboardEventHandler,
    MouseEventHandler,
    FocusEventHandler
} from 'react';

declare namespace Modal {
    interface Props extends HTMLProps<HTMLDivElement> {
        /**
         * This property is used as the modal header's title. It is required
         * for a11y reasons.
         */
        title: string;
        children: ReactNode;
        aria?: {
            /**
             * If this property is added, it will be added to the modal content
             * div as aria-labelledby. You are encouraged to use this when the
             * modal is visually labelled.
             * @defaultValue "modal-heading"
             */
            labelledby?: string | undefined;
            /**
             * If this property is added, it will be added to the modal content
             * div as aria-describedby.
             */
            describedby?: string | undefined;
        } | undefined;
        /**
         * `className` that is applied to the `document.body` while the modal is open.
         * @defaultValue "modal-open"
         */
        bodyOpenClassName?: string | undefined;
        /**
         * Label for the close button.
         * @defaultValue "Close dialog"
         */
        closeButtonLabel?: string | undefined;
        /**
         * If this property is true, it will focus the first tabbable element
         * rendered in the modal.
         * @defaultValue true
         */
        focusOnMount?: boolean | undefined;
        /**
         * Icon component to render before the title.
         */
        icon?: ReactNode | undefined;
        /**
         * If this property is set to false, the modal will not display a close
         * icon and cannot be dismissed.
         * @defaultValue true
         * @deprecated Use isDismissible
         */
        isDismissable?: boolean | undefined;
        /**
         * If this property is set to false, the modal will not display a close
         * icon and cannot be dismissed.
         * @defaultValue true
         */
        isDismissible?: boolean | undefined;
        /**
         * If this property is added, it will an additional class name to the
         * modal overlay div.
         */
        overlayClassName?: string | undefined;
        /**
         * If this property is added, it will determine whether the modal
         * requests to close when a mouse click occurs outside of the modal
         * content.
         * @defaultValue true
         */
        shouldCloseOnClickOutside?: boolean | undefined;
        /**
         * If this property is added, it will determine whether the modal
         * requests to close when the escape key is pressed.
         * @defaultValue true
         */
        shouldCloseOnEsc?: boolean | undefined;
        /**
         * This function is called to indicate that the modal should be closed.
         *
         * The originating event might be different depending on how the modal
         * is closed.
         */
        onRequestClose: KeyboardEventHandler | MouseEventHandler | FocusEventHandler;
    }
}
declare const Modal: ComponentType<Modal.Props>;

export default Modal;
