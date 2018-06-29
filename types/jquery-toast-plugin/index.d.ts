// Type definitions for jquery-toast-plugin 1.3
// Project: https://github.com/kamranahmedse/jquery-toast-plugin
// Definitions by: Viqas Hussain <https://github.com/viqashussain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery"/>

interface JQueryStatic {
    toast(options: toastOptions): void;
}

interface toastOptions {
    text: string;
    heading?: string;
    showHideTransition?: string;
    allowToastClose?: boolean;
    hideAfter?: number;
    loader?: boolean;
    loaderBg?: string;
    stack?: number;
    position?: string;
    bgColor?: boolean;
    textColor?: boolean;
    textAlign?: string;
    icon?: boolean;
    beforeShow?: () => any;
    afterShown?: () => any;
    beforeHide?: () => any;
    afterHidden?: () => any;
}
