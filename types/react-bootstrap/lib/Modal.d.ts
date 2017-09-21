import * as React from 'react';
import { Sizes, TransitionCallbacks } from 'react-bootstrap';
import * as ModalBody from './ModalBody';
import * as ModalHeader from './ModalHeader';
import * as ModalTitle from './ModalTitle';
import * as ModalDialog from './ModalDialog';
import * as ModalFooter from './ModalFooter';

declare namespace Modal {
    interface ModalProps extends TransitionCallbacks, React.HTMLProps<Modal> {
        // Required
        onHide: Function;

        // Optional
        animation?: boolean;
        autoFocus?: boolean;
        backdrop?: boolean | string;
        backdropClassName?: string;
        backdropStyle?: any;
        backdropTransitionTimeout?: number;
        bsSize?: Sizes;
        container?: any; // TODO: Add more specific type
        containerClassName?: string;
        dialogClassName?: string;
        dialogComponent?: any; // TODO: Add more specific type
        dialogTransitionTimeout?: number;
        enforceFocus?: boolean;
        keyboard?: boolean;
        onBackdropClick?: (node: HTMLElement) => any;
        onEscapeKeyUp?: (node: HTMLElement) => any;
        onShow?: (node: HTMLElement) => any;
        show?: boolean;
        transition?: React.ReactElement<any>;
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
