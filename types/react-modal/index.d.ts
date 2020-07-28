// Type definitions for react-modal 3.10
// Project: https://github.com/reactjs/react-modal
// Definitions by: Rajab Shakirov <https://github.com/radziksh>,
//                 Drew Noakes <https://github.com/drewnoakes>,
//                 Thomas B Homburg <https://github.com/homburg>,
//                 Tatu Tamminen <https://github.com/ttamminen>,
//                 Uwe Wiemer <https://github.com/hallowatcher>,
//                 Peter Blazejewicz <https://github.com/peterblazejewicz>,
//                 Justin Powell <https://github.com/jpowell>
//                 Juwan Wheatley <https://github.com/fiberjw>
//                 Nitzan Mousan <https://github.com/nitzanmo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export = ReactModal;
export as namespace ReactModal;

declare namespace ReactModal {
    interface Styles {
        content?: React.CSSProperties;
        overlay?: React.CSSProperties;
    }

    interface Classes {
        base: string;
        afterOpen: string;
        beforeClose: string;
    }

    interface Aria {
        /** Defines a string value that labels the current element. */
        labelledby?: string;
        /** Identifies the element (or elements) that describes the object. */
        describedby?: string;
        /** Indicates whether an element is modal when displayed. */
        modal?: boolean | 'false' | 'true';
    }

    /** Describes overlay and content element references passed to onAfterOpen function */
    interface OnAfterOpenCallbackOptions {
        /** overlay element reference */
        overlayEl: Element;
        /** content element reference */
        contentEl: HTMLDivElement;
    }

    /** Describes unction that will be run after the modal has opened */
    interface OnAfterOpenCallback {
        (obj?: OnAfterOpenCallbackOptions): void;
    }

    interface Props {
        /* Boolean describing if the modal should be shown or not. Defaults to false. */
        isOpen: boolean;

        /* Object indicating styles to be used for the modal, divided into overlay and content styles. */
        style?: Styles;

        /* String className to be applied to the portal. Defaults to "ReactModalPortal". */
        portalClassName?: string;

        /* String className to be applied to the document.body (must be a constant string). When set to null it doesn't add any class to document.body. */
        bodyOpenClassName?: string | null;

        /* String className to be applied to the document.html (must be a constant string). Defaults to null. */
        htmlOpenClassName?: string | null;

        /* String or object className to be applied to the modal content. */
        className?: string | Classes;

        /* String or object className to be applied to the overlay. */
        overlayClassName?: string | Classes;

        /* Set this to properly hide your application from assistive screenreaders and other assistive technologies while the modal is open. */
        appElement?: HTMLElement | {};

        /* Function that will be run after the modal has opened. */
        onAfterOpen?: OnAfterOpenCallback;

        /* Function that will be run after the modal has closed. */
        onAfterClose?(): void;

        /* Function that will be run when the modal is requested to be closed, prior to actually closing. */
        onRequestClose?(event: React.MouseEvent | React.KeyboardEvent): void;

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

        /* Additional data attributes to be applied to to the modal content in the form of "data-*" */
        data?: any;

        /* String indicating the role of the modal, allowing the 'dialog' role to be applied if desired. Defaults to "dialog". */
        role?: string | null;

        /* String indicating how the content container should be announced to screenreaders. */
        contentLabel?: string;

        /* Function accepting the ref for the content */
        contentRef?: (instance: HTMLDivElement) => void;

        /* Function accepting the ref for the overlay */
        overlayRef?: (instance: HTMLDivElement) => void;

        /* String value of data-test-id attibute to be applied to to the modal content. */
        testId?: string;

        /* String value of an id attribute to be applied to the modal content */
        id?: string;
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

    portal: null | {
        overlay: null | HTMLDivElement;
        content: null | HTMLDivElement;
    };
}
