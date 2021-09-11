// Type definitions for headroom.js 0.12
// Project: https://github.com/WickyNilliams/headroom.js
// Definitions by: Jakub Olek <https://github.com/hakubo>
//                 Juninho Cruz <https://github.com/juninhocruzg3>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Headroom;

/**
 * UI enhancement for fixed headers.
 * Hides header when scrolling down
 * Shows header when scrolling up
 */
declare class Headroom {
    constructor(element: HTMLElement | Node, options?: Headroom.HeadroomOptions);

    /**
     *  Default options
     */
    static readonly options: Headroom.HeadroomOptions;

    static cutsTheMustard: boolean;

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

declare namespace Headroom {
    interface HeadroomOptions {
        /**
         * vertical offset in px before element is first unpinned
         * @default 0
         */
        offset?: number | undefined;
        /** scroll tolerance in px before state changes or you can specify tolerance individually for up/down scroll */
        tolerance?: Tolerance | number | undefined;
        /** css classes to apply multiple classes are also supported with a space-separated list */
        classes?: {
            /**
             * when element is initialised
             * @default 'headroom'
             */
            initial?: string | undefined;
            /**
             * when scrolling up
             * @default 'headroom--pinned'
             */
            pinned?: string | undefined;
            /**
             * when scrolling down
             * @default 'headroom--unpinned'
             */
            unpinned?: string | undefined;
            /**
             * when above offset
             * @default 'headroom--top'
             */
            top?: string | undefined;
            /**
             * when below offset
             * @default 'headroom--not-top'
             */
            notTop?: string | undefined;
            /**
             * when at bottom of scroll area
             * @default 'headroom--bottom'
             */
            bottom?: string | undefined;
            /**
             * when not at bottom of scroll area
             * @default 'headroom--not-bottom'
             */
            notBottom?: string | undefined;
            /**
             * when frozen method has been called
             * @default 'headroom--frozen'
             */
            frozen?: string | undefined;
        } | undefined;
        /**
         * element to listen to scroll events on
         * @default window
         */
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

    interface Tolerance {
        /** @default 0 */
        up?: number | undefined;
        /** @default 0 */
        down?: number | undefined;
    }
}

export = Headroom;
