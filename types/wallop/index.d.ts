// Type definitions for Wallop 2.4
// Project: https://github.com/peduarte/wallop, http://pedroduarte.me/wallop
// Definitions by: Nathanael McDaniel <https://github.com/leemcd56>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = Wallop;
export as namespace Wallop;

declare namespace Wallop {
    interface Options {
        /**
         * Override class for "next" button.
         *
         * @default 'Wallop-buttonNext'
         */
        buttonNextClass?: string;

        /**
         * Override class for "previous" button.
         *
         * @default 'Wallop-buttonPrevious'
         */
        buttonPreviousClass?: string;

        /**
         * Enable/disable carousel mode.
         *
         * @default true
         */
        carousel?: boolean;

        /**
         * Override class for current item.
         *
         * @default 'Wallop-item--current'
         */
        currentItemClass?: string;

        /**
         * Override class that hides next item.
         *
         * @default 'Wallop-item--hideNext'
         */
        hideNextClass?: string;

        /**
         * Override class that hides previous item.
         *
         * @default 'Wallop-item--hidePrevious'
         */
        hidePreviousClass?: string;

        /**
         * Override class for item.
         *
         * @default 'Wallop-item'
         */
        itemClass?: string;

        /**
         * Override class for item that will show next.
         *
         * @default 'Wallop-item--showNext'
         */
        showNextClass?: string;

        /**
         * Override class for item that will showed previously.
         *
         * @default 'Wallop-item--showPrevious'
         */
        showPreviousClass?: string;
    }
}

declare class Wallop {
    /**
     * Implement new instance of Wallop.
     */
    constructor(selector: Element, options?: Wallop.Options);

    /**
     * Advances to the slide with the given index.
     */
    goTo(index: number): Wallop;

    /**
     * Advances to next slide.
     */
    next(): Wallop;

    /**
     * Unbinds method from custom event.
     */
    off(eventName: string, callback: () => void): Wallop;

    /**
     * Bind method to custom event.
     */
    on(eventName: string, callback: () => void): Wallop;

    /**
     * Returns to previous slide.
     */
    previous(): Wallop;

    /**
     * Resets current Wallop instance to defaults.
     */
    reset(): Wallop;
}
