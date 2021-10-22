import * as React from 'react';
import { Sizes, TransitionCallbacks } from 'react-bootstrap';
import ModalBody = require('./ModalBody');
import ModalHeader = require('./ModalHeader');
import ModalTitle = require('./ModalTitle');
import ModalDialog = require('./ModalDialog');
import ModalFooter = require('./ModalFooter');

declare namespace Modal {
    interface ModalProps extends TransitionCallbacks, React.HTMLProps<Modal> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean | undefined;
        autoFocus?: boolean | undefined;
        backdrop?: boolean | string | undefined;
        backdropClassName?: string | undefined;
        backdropStyle?: any;
        backdropTransitionTimeout?: number | undefined;
        bsSize?: Sizes | undefined;
        bsClass?: string | undefined;
        container?: any; // TODO: Add more specific type
        containerClassName?: string | undefined;
        dialogClassName?: string | undefined;
        dialogComponent?: any; // TODO: Add more specific type
        dialogTransitionTimeout?: number | undefined;
        enforceFocus?: boolean | undefined;
        restoreFocus?: boolean | undefined;
        keyboard?: boolean | undefined;
        onBackdropClick?: ((node: HTMLElement) => any) | undefined;
        onEscapeKeyDown?: ((node: HTMLElement) => any) | undefined;
        /**
         * @deprecated since Sept 25, 2017, use onEscapeKeyDown instead
         **/
        onEscapeKeyUp?: ((node: HTMLElement) => any) | undefined;
        onShow?: ((node: HTMLElement) => any) | undefined;
        show?: boolean | undefined;
        transition?: React.ReactElement | undefined;
    }
}
declare class Modal extends React.Component<Modal.ModalProps> {
    static Body: typeof ModalBody;
    static Header: typeof ModalHeader;
    static Title: typeof ModalTitle;
    static Footer: typeof ModalFooter;
    static Dialog: typeof ModalDialog;
}
export = Modal;
