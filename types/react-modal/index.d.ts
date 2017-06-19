// Type definitions for react-modal 1.6
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>, Drew Noakes <https://github.com/drewnoakes>, Thomas B Homburg <https://github.com/homburg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export as namespace ReactModal;

export = ReactModal;

declare namespace ReactModal {
    interface Styles {
        content?: {
            [key: string]: any;
        };
        overlay?: {
            [key: string]: any;
        };
    }

    interface Props {
        /* Boolean describing if the modal should be shown or not. Defaults to false. */
        isOpen: boolean;
        /* Object indicating styles to be used for the modal, divided into overlay and content styles. */
        style?: Styles;
        /* Set this to properly hide your application from assistive screenreaders and other assistive technologies while the modal is open. */
        appElement?: HTMLElement | {};
        /* Function that will be run after the modal has opened. */
        onAfterOpen?(): void;
        /* Function that will be run when the modal is requested to be closed, prior to actually closing. */
        onRequestClose?(event: (MouseEvent | KeyboardEvent)): void;
        /* Number indicating the milliseconds to wait before closing the modal. Defaults to zero (no timeout). */
        closeTimeoutMS?: number;
        /* Boolean indicating if the appElement should be hidden. Defaults to true. */
        ariaHideApp?: boolean;
        /* Boolean indicating if the overlay should close the modal. Defaults to true. */
        shouldCloseOnOverlayClick?: boolean;
        /* String className to be applied to the portal. Defaults to "ReactModalPortal". */
        portalClassName?: string;
        /* String className to be applied to the overlay. */
        overlayClassName?: string;
        /* String className to be applied to the modal content. */
        className?: string;
        /* String indicating how the content container should be announced to screenreaders. */
        contentLabel?: string;
        /* String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. */
        role?: string;
        /* Function that will be called to get the parent element that the modal will be attached to. */
        parentSelector?(): HTMLElement;
    }
}

declare class ReactModal extends React.Component<ReactModal.Props> {
    /* Override base styles for all instances of this component. */
    static defaultStyles: ReactModal.Styles;
    /* Call this to properly hide your application from assistive screenreaders and other assistive technologies while the modal is open. */
    static setAppElement(appElement: HTMLElement): void;
}
