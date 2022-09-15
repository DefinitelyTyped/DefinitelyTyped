// Type definitions for jquery-toast-plugin 1.3
// Project: https://github.com/kamranahmedse/jquery-toast-plugin, http://www.kamranahmed.info/toast
// Definitions by: Viqas Hussain <https://github.com/viqashussain>
//                 Andrew Stegmaier <https://github.com/astegmaier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="jquery"/>

interface JQueryStatic {
    toast(options: toastOptions): void;
}

interface toastOptions {
    text: string;
    heading?: string | undefined;
    showHideTransition?: 'fade' | 'slide' | 'plain' | undefined;
    allowToastClose?: boolean | undefined;
    hideAfter?: number | false | undefined;
    loader?: boolean | undefined;
    loaderBg?: string | undefined;
    stack?: number | false | undefined;
    position?: 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-right' | 'top-left' | 'top-center' | 'mid-center' | CustomPosition | undefined;
    bgColor?: string | undefined;
    textColor?: string | undefined;
    textAlign?: 'left' | 'right' | 'center' | undefined;
    icon?: 'info' | 'warning' | 'error' | 'success' | undefined;
    beforeShow?: (() => any) | undefined;
    afterShown?: (() => any) | undefined;
    beforeHide?: (() => any) | undefined;
    afterHidden?: (() => any) | undefined;
}

interface CustomPosition {
    left: number | 'auto';
    right: number | 'auto';
    top: number | 'auto';
    bottom: number | 'auto';
}
