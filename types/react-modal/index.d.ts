// Type definitions for react-modal 3.1
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Drew Noakes <https://github.com/drewnoakes>,
//                 Thomas B Homburg <https://github.com/homburg>,
//                 Tatu Tamminen <https://github.com/ttamminen>,
//                 Uwe Wiemer <https://github.com/hallowatcher>,
//                 Peter Blazejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export = ReactModal;
export as namespace ReactModal;

declare namespace ReactModal {
    interface Styles {
        content?: {
            [key: string]: any;
        };
        overlay?: {
            [key: string]: any;
        };
    }

    interface Classes {
        base: string;
        afterOpen: string;
        beforeClose: string;
    }

    interface Aria {
        labelledby?: string;
        describedby?: string;
    }

    interface Props {
        /* Boolean describing if the modal should be shown or not. Defaults to false. */
        isOpen: boolean;

        /* Object indicating styles to be used for the modal, divided into overlay and content styles. */
        style?: Styles;

        /* String className to be applied to the portal. Defaults to "ReactModalPortal". */
        portalClassName?: string;

        /* String className to be applied to the document.body. */
        bodyOpenClassName?: string;

        /* String or object className to be applied to the modal content. */
        className?: string | Classes;

        /* String or object className to be applied to the overlay. */
        overlayClassName?: string | Classes;

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

        /* Boolean indicating if the modal should be focused after render */
        shouldFocusAfterRender?: boolean;

        /* Boolean indicating if the overlay should close the modal. Defaults to true. */
        shouldCloseOnOverlayClick?: boolean;

        /* Boolean indicating if pressing the esc key should close the modal */
        shouldCloseOnEsc?: boolean;

        /* Boolean indicating if the modal should restore focus to the element that had focus prior to its display. */
        shouldReturnFocusAfterClose?: boolean;

        /* Function that will be called to get the parent element that the modal will be attached to. */
        parentSelector?(): HTMLElement;

        /* Additional aria attributes. */
        aria?: Aria;

        /* String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. */
        role?: string;

        /* String indicating how the content container should be announced to screenreaders. */
        contentLabel?: string;
    }
}

declare class ReactModal extends React.Component<ReactModal.Props> {
    /* Override base styles for all instances of this component. */
    static defaultStyles: ReactModal.Styles;
    /**
     * Call this to properly hide your application from assistive screenreaders
     * and other assistive technologies while the modal is open.
     */
    static setAppElement(appElement: string | HTMLElement): void;
}
