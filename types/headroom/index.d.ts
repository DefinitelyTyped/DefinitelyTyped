interface HeadroomOptions {
    /** vertical offset in px before element is first unpinned */
    offset?: { up?: number | undefined; down?: number | undefined } | number | undefined;
    /** scroll tolerance in px before state changes or you can specify tolerance individually for up/down scroll */
    tolerance?: { up?: number | undefined; down?: number | undefined } | number | undefined;
    /** css classes to apply multiple classes are also supported with a space-separated list */
    classes?: {
        /** when element is initialised */
        initial?: string | undefined;
        /** when scrolling up */
        pinned?: string | undefined;
        /** when scrolling down */
        unpinned?: string | undefined;
        /** when above offset */
        top?: string | undefined;
        /** when below offset */
        notTop?: string | undefined;
        /** when at bottom of scoll area */
        bottom?: string | undefined;
        /** when not at bottom of scroll area */
        notBottom?: string | undefined;
        /** when frozen method has been called */
        frozen?: string | undefined;
    } | undefined;
    /** element to listen to scroll events on, defaults to `window` */
    scroller?: HTMLElement | undefined;
    /** callback when pinned, `this` is headroom object */
    onPin?: (() => void) | undefined;
    /** callback when unpinned, `this` is headroom object */
    onUnpin?: (() => void) | undefined;
    /** callback when above offset, `this` is headroom object */
    onTop?: (() => void) | undefined;
    /** callback when below offset, `this` is headroom object */
    onNotTop?: (() => void) | undefined;
    /** callback when at bottom of page, `this` is headroom object */
    onBottom?: (() => void) | undefined;
    /** callback when moving away from bottom of page, `this` is headroom object */
    onNotBottom?: (() => void) | undefined;
}

declare class Headroom {
    constructor(element: HTMLElement | Node, options?: HeadroomOptions);

    /** initialise */
    init(): void;

    /** destroy the headroom instance, removing event listeners and any classes added */
    destroy(): void;

    /** forcibly set the headroom instance's state to pinned */
    pin(): void;

    /** forcibly set the headroom instance's state to unpinned */
    unpin(): void;

    /** freeze the headroom instance's state (pinned or unpinned), and no longer respond to scroll events */
    freeze(): void;

    /** resume responding to scroll events */
    unfreeze(): void;
}
