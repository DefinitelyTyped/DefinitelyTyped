// Type definitions for toastify-js 1.9
// Project: https://github.com/apvarun/toastify-js#readme
// Definitions by: adblanc <https://github.com/adblanc>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Toastify {
    function reposition(): void;

    interface Offset {
        x: number | string;
        y: number | string;
    }

    interface Options {
        text?: string | undefined;
        node?: Node | undefined;
        duration?: number | undefined;
        selector?: string | undefined;
        destination?: string | undefined;
        newWindow?: boolean | undefined;
        close?: boolean | undefined;
        gravity?: 'top' | 'bottom' | undefined;
        position?: 'left' | 'center' | 'right' | undefined;
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
    }
}
declare function Toastify(
    options?: Toastify.Options,
): {
    showToast(): void;
};

export as namespace Toastify;

export = Toastify;
