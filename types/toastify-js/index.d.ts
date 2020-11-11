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
        text?: string;
        node?: Node;
        duration?: number;
        selector?: string;
        destination?: string;
        newWindow?: boolean;
        close?: boolean;
        gravity?: 'top' | 'bottom';
        position?: 'left' | 'center' | 'right';
        backgroundColor?: string;
        /**
         * Image/icon to be shown before text
         */
        avatar?: string;
        className?: string;
        /**
         * @default true
         */
        stopOnFocus?: boolean;
        /**
         * Invoked when the toast is dismissed
         */
        callback?: () => void;
        onClick?: () => void;
        offset?: Offset;
    }
}
declare function Toastify(
    options?: Toastify.Options,
): {
    showToast(): void;
};

export as namespace Toastify;

export = Toastify;
