// Type definitions for toastify-js 1.9
// Project: https://github.com/apvarun/toastify-js#readme
// Definitions by: adblanc <https://github.com/adblanc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Offset {
    x: number | string;
    y: number | string;
}

interface ToastArgs {
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
    stopOnFocus?: boolean;
    className?: string;
    offset?: Offset;
    onClick?: () => void;
}

declare function Toastify(
    args?: ToastArgs,
): {
    showToast(): void;
};

export = Toastify;
