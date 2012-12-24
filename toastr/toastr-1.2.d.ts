/// <reference path="jquery.d.ts" />
// Type definitions for Toastr 1.0
// Project: https://github.com/CodeSeven/toastr
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ToastrOptions {
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

    onclick?: () => void;
}

interface ToastrDisplayMethod {
    (message: string): JQuery;
    (message: string, title: string): JQuery;
    (message: string, title: string, overrides: ToastrOptions): JQuery;
}

interface Toastr {
    clear(): void;
    clear(toast: JQuery): void;
    error: ToastrDisplayMethod;
    info: ToastrDisplayMethod;
    options: ToastrOptions;
    success: ToastrDisplayMethod;
    warning: ToastrDisplayMethod;
    version: string;
}

declare var toastr: Toastr;