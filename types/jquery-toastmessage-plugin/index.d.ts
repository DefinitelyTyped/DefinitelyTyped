// Type definitions for non-npm package jquery-toastmessage-plugin 0.2
// Project: https://github.com/akquinet/jquery-toastmessage-plugin
// Definitions by: Joe Skeen <https://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

interface JQuery {
    toastmessage: JQueryToastmessage.ToastmessageStatic;
}

/** jQuery Toastmessage (http://akquinet.github.io/jquery-toastmessage-plugin/) */
declare namespace JQueryToastmessage {
    interface ToastmessageStatic {
        /* shows a toast message of the specified type */
        (command: ShowToastCommand, message: string): JQuery;
        /** shows a custom toast */
        (command: 'showToast', toastOpts: ToastOptions): JQuery;
        /** removes the specified toast and returns it */
        (command: 'removeToast', toast: JQuery, closeOpts?: ToastOptions): void;
        /** configures the default toast options */
        (toastOpts: ToastOptions): void;
    }

    type ShowToastCommand = 'showNoticeToast' | 'showSuccessToast' | 'showWarningToast' | 'showErrorToast';
    type ToastType = 'notice' | 'warning' | 'error' | 'success';
    type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'middle-center' | 'middle-right';

    interface ToastOptions {
        /** in effect duration in miliseconds @default 600 */
        inEffectDuration?: number;
        /**
         * time in miliseconds before the item has to disappear @default 3000
         */
        stayTime?: number;
        /** content of the item @default '' */
        text?: string;
        /** should the toast item sticky or not? @default false */
        sticky?: boolean;
        /** the type of toast @default 'notice' */
        type?: ToastType;
        /**
         * Position of the toast container holding different toast.
         * Position can be set only once at the very first call,
         * changing the position after the first call does nothing
         * @default 'top-right'
         */
        position?: ToastPosition;
        /**
         * text which will be shown as close button,
         * set to '' when you want to introduce an image via css
         * @default ''
         */
        closeText?: string;
        /** callback function when the toastmessage is closed @default null */
        close?(): void;
    }
}
