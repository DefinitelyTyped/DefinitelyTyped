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

    info(message: string, title?: string);
    warning(message: string, title?: string);
    success(message: string, title?: string);
    error(message: string, title?: string);
}

declare var toastr: Toastr;