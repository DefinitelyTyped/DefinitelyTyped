// Type definitions for Toastr 1.0
// Project: https://github.com/CodeSeven/toastr
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ToastOptions {
    tapToDismiss?: bool;
    toastClass?: string;
    containerId?: string;
    debug?: bool;
    fadeIn?: number;
    fadeOut?: number;
    extendedTimeOut?: number;
    iconClasses?: {
        error: string;
        info: string;
        success: string;
        warning: string;
    };
    iconClass?: string;
    positionClass?: string;
    timeOut?: number;
    titleClass?: string;
    messageClass?: string;
}

interface Toastr {
    options: ToastOptions;

    clear(): void;
    info(message: string, title?: string): void;
    warning(message: string, title?: string): void;
    success(message: string, title?: string): void;
    error(message: string, title?: string): void;
}

declare var toastr: Toastr;