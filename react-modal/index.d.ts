// Type definitions for react-modal v1.6.1
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>

declare module "react-modal" {
    interface ReactModal {
        /* Boolean describing if the modal should be shown or not. Defaults to false. */
        isOpen: boolean;
        /* Object indicating styles to be used for the modal, divided into overlay and content styles. */
        style?: {
            content?: {
                [key: string]: any;
            };
            overlay?: {
                [key: string]: any;
            };
        };
        /* Set this to properly hide your application from assistive screenreaders and other assistive technologies while the modal is open. */
        appElement?: HTMLElement | {};
        /* Function that will be run after the modal has opened. */
        onAfterOpen?: () => void;
        /* Function that will be run when the modal is requested to be closed, prior to actually closing. */
        onRequestClose?: () => void;
        /* Number indicating the milliseconds to wait before closing the modal. Defaults to zero (no timeout). */
        closeTimeoutMS?: number;
        /* Boolean indicating if the appElement should be hidden. Defaults to true. */
        ariaHideApp?: boolean;
        /* Boolean indicating if the overlay should close the modal. Defaults to true. */
        shouldCloseOnOverlayClick?: boolean;
        /* String className to be applied to the overlay. */
        overlayClassName?: string;
        /* String className to be applied to the modal content. */
        className?: string;
        /* String indicating how the content container should be announced to screenreaders. */
        contentLabel?: string;
    }
    let ReactModal: React.ClassicComponentClass<ReactModal>;
    export = ReactModal;
}
