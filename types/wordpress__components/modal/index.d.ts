import { ComponentType, HTMLProps, ReactNode } from 'react';

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
            labelledby?: string;
            /**
             * If this property is added, it will be added to the modal content
             * div as aria-describedby.
             */
            describedby?: string;
        };
        /**
         * `className` that is applied to the `document.body` while the modal is open.
         * @defaultValue "modal-open"
         */
        bodyOpenClassName?: string;
        /**
         * Label for the close button.
         * @defaultValue "Close dialog"
         */
        closeButtonLabel?: string;
        /**
         * If this property is true, it will focus the first tabbable element
         * rendered in the modal.
         * @defaultValue true
         */
        focusOnMount?: boolean;
        /**
         * Icon component to render before the title.
         */
        icon?: ReactNode;
        /**
         * If this property is set to false, the modal will not display a close
         * icon and cannot be dismissed.
         * @defaultValue true
         * @deprecated Use isDismissible
         */
        isDismissable?: boolean;
        /**
         * If this property is set to false, the modal will not display a close
         * icon and cannot be dismissed.
         * @defaultValue true
         */
        isDismissible?: boolean;
        /**
         * If this property is added, it will an additional class name to the
         * modal overlay div.
         */
        overlayClassName?: string;
        /**
         * If this property is added, it will determine whether the modal
         * requests to close when a mouse click occurs outside of the modal
         * content.
         * @defaultValue true
         */
        shouldCloseOnClickOutside?: boolean;
        /**
         * If this property is added, it will determine whether the modal
         * requests to close when the escape key is pressed.
         * @defaultValue true
         */
        shouldCloseOnEsc?: boolean;
        /**
         * This function is called to indicate that the modal should be closed.
         */
        onRequestClose(): void;
    }
}
declare const Modal: ComponentType<Modal.Props>;

export default Modal;
