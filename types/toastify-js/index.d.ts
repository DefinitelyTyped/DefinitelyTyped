// Type definitions for toastify-js 1.11
// Project: https://github.com/apvarun/toastify-js#readme
// Definitions by: adblanc <https://github.com/adblanc>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace StartToastifyInstance {
    function reposition(): void;
    interface Offset {
        x: number | string;
        y: number | string;
    }

    interface Options {
        text?: string | undefined;
        node?: Node | undefined;
        duration?: number | undefined;
        selector?: string | Node | undefined;
        destination?: string | undefined;
        newWindow?: boolean | undefined;
        close?: boolean | undefined;
        gravity?: 'top' | 'bottom' | undefined;
        position?: 'left' | 'center' | 'right' | undefined;
        /**
         * @deprecated use style.background option instead
         */
        backgroundColor?: string | undefined;
        /**
         * Image/icon to be shown before text
         */
        avatar?: string | undefined;
        className?: string | undefined;
        /**
         * @default true
         */
        stopOnFocus?: boolean | undefined;
        /**
         * Invoked when the toast is dismissed
         */
        callback?: (() => void) | undefined;
        onClick?: (() => void) | undefined;
        offset?: Offset | undefined;
        /**
         * Toggle the default behavior of escaping HTML markup
         */
        escapeMarkup?: boolean | undefined;
        /**
         * HTML DOM Style properties to add any style directly to toast
         */
        style?: { [cssRule: string]: string };
        /**
         * Set the order in which toasts are stacked in page
         */
        oldestFirst?: boolean | undefined;
    }
}

declare class Toastify {
    /**
     * The configuration object to configure Toastify
     */
    readonly options: StartToastifyInstance.Options;
    /**
     * The element that is the Toast
     */
    readonly toastElement: Element | null;
    /**
     * Display the toast
     */
    showToast(): void;
    /**
     * Hide the toast
     */
    hideToast(): void;
}
declare function StartToastifyInstance(options?: Toastify.Options): Toastify;

export as namespace Toastify;

export = StartToastifyInstance;
