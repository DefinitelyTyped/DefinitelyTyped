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
    heading?: string;
    showHideTransition?: 'fade' | 'slide' | 'plain';
    allowToastClose?: boolean;
    hideAfter?: number | false;
    loader?: boolean;
    loaderBg?: string;
    stack?: number | false;
    position?: 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-right' | 'top-left' | 'top-center' | 'mid-center' | CustomPosition;
    bgColor?: string;
    textColor?: string;
    textAlign?: 'left' | 'right' | 'center';
    icon?: 'info' | 'warning' | 'error' | 'success';
    beforeShow?: () => any;
    afterShown?: () => any;
    beforeHide?: () => any;
    afterHidden?: () => any;
}

interface CustomPosition {
    left: number | 'auto';
    right: number | 'auto';
    top: number | 'auto';
    bottom: number | 'auto';
}
