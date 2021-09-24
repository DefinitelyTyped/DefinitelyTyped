// Type definitions for Toastr 2.1.3
// Project: https://github.com/CodeSeven/toastr
// Definitions by: Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/// <reference types="jquery" />

interface ToastrOptions {
    /**
     * Optionally override the animation easing to show or hide the toasts.
     * swing and linear are built into jQuery.
     * @default swing
     */
    showEasing?: string | undefined;
    /**
     * Optionally override the animation easing to show or hide the toasts.
     * swing and linear are built into jQuery.
     * @default swing
     */
    hideEasing?: string | undefined;
    /**
     * Use the jQuery show method of your choice.
     * The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
     * @default fadeIn
     */
    showMethod?: string | undefined;
    /**
     * Use the jQuery hide method of your choice.
     * The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
     * @default fadeOut
     */
    hideMethod?: string | undefined;
    /**
     * Should a close button be shown?
     * @default undefined
     */
    closeButton?: boolean | undefined;
    /**
     * CSS class the close button will be given.
     * @default toast-close-button
     */
    closeClass?: string | undefined;
    /**
     * Time in milliseconds the toast should take to hide, when the close button is clicked.
     * Falls back to hide configuration.
     * @default false
     */
    closeDuration?: number | undefined;
    /**
     * The animation easing while hiding the toast, when the close button is clicked.
     * Falls back to hide configuration.
     * swing and linear are built into jQuery.
     * @default false
     */
    closeEasing?: string | undefined;
    /**
     * Use the jQuery show/hide method of your choice, when the close button is clicked.
     * Falls back to hide configuration.
     * The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
     * @default false
     */
    closeMethod?: string | undefined;
    /**
     * Set to false so that the toast hides event if hovered.
     * @default true
     */
    closeOnHover?: boolean | undefined;
    /**
     * Html for the close button.
     */
    closeHtml?: string | undefined;
    /**
     * onCloseClick function callback, fired when the close button is clicked.
     * Closing cannot be prevented by ev.stopPropagation() etc.
     * @default undefined
     */
    onCloseClick?: ((ev: JQueryMouseEventObject) => void) | undefined;
    /**
     * Should clicking on toast dismiss it?
     * @default true
     */
    tapToDismiss?: boolean | undefined;
    /**
     * CSS class the toast element will be given.
     * @default toast
     */
    toastClass?: string | undefined;
    /**
     * Id toast container will be given.
     * @default toast-container
     */
    containerId?: string | undefined;
    /**
     * Should debug details be outputted to the console?
     * @default false
     */
    debug?: boolean | undefined;
    /**
     * Time in milliseconds the toast should take to show.
     * @default 300
     */
    showDuration?: number | undefined;
    /**
     * onShown function callback.
     * @default undefined
     */
    onShown?: (() => void) | undefined;
    /**
     * Time in milliseconds the toast should take to hide.
     * @default 1000
     */
    hideDuration?: number | undefined;
    /**
     * onHidden function callback.
     * @default undefined
     */
    onHidden?: (() => void) | undefined;
    /**
     * Time in milliseconds the toast should be displayed after leaving mouse over.
     * Set timeOut and extendedTimeOut to 0 to make it sticky.
     * @default 1000
     */
    extendedTimeOut?: number | undefined;
    /**
     * If specified, you must provide all classes.
     */
    iconClasses?: {
        /**
         * Icon to use on error toasts.
         * @default toast-error
         */
        error: string;
        /**
         * Icon to use on info toasts.
         * @default toast-info
         */
        info: string;
        /**
         * Icon to use on success toasts.
         * @default toast-success
         */
        success: string;
        /**
         * Icon to use on warning toasts.
         * @default toast-warning
         */
        warning: string;
    } | undefined;
    /**
     * Icon to use for toast.
     * @default toast-info
     */
    iconClass?: string | undefined;
    /**
     * Where toast should be displayed.
     * The default stylesheet covers:
     * toast-top-left, toast-top-center, toast-top-right, toast-top-full-width,
     * toast-bottom-left, toast-bottom-center, toast-bottom-right, toast-bottom-full-width
     * @default toast-top-right
     */
    positionClass?: string | undefined;
    /**
     * Time in milliseconds that the toast should be displayed.
     * Set timeOut and extendedTimeOut to 0 to make it sticky.
     * @default 5000
     */
    timeOut?: number | undefined;
    /**
     * CSS class the title element will be given.
     * @default toast-title
     */
    titleClass?: string | undefined;
    /**
     * CSS class the message element will be given.
     * @default toast-message
     */
    messageClass?: string | undefined;
    /**
     * Set newest toast to appear on top.
     * @default true
     */
    newestOnTop?: boolean | undefined;
    /**
     * The element to put the toastr container
     * @default body
     */
    target?: string | undefined;
    /**
     * Rather than having identical toasts stack, set the preventDuplicates property to true.
     * Duplicates are matched to the previous toast based on their message content.
     * @default false
     */
    preventDuplicates?: boolean | undefined;
    /**
     * Visually indicates how long before a toast expires.
     * @default false
     */
    progressBar?: boolean | undefined;
    /**
     * CSS class the progressbar element will be given.
     * @default toast-progress
     */
    progressClass?: string | undefined;
    /**
     * Function to execute on toast click. Closing cannot be prevented by ev.stopPropagation() etc.
     * @default undefined
     */
    onclick?: ((ev: JQueryMouseEventObject) => void) | undefined;
    /**
     * Should the title and message text be escaped?
     * @default false
     */
    escapeHtml?: boolean | undefined;
    /**
     * Flip the toastr to be displayed properly for right-to-left languages.
     * @default false
     */
    rtl?: boolean | undefined;
}

interface ToastrDisplayMethod {
    /**
     * Create a toast
     *
     * @param message Message to display in toast
     * @param title Title to display on toast
     * @param overrides Option values for toast
     */
    (message: string, title?: string, overrides?: ToastrOptions): JQuery;
}

type ToastrType = 'error'|'info'|'success'|'warning';

interface ToastMap {
    /**
     * The toast type.
     */
        type: ToastrType;
    /**
     * The toast message.
     */
    message: string;
    /**
     * The toast icon class.
     */
    iconClass: string;
    /**
     * The toast title.
     */
    title?: string | undefined;
    /**
     * Any override options specified when the toast was created.
     */
    optionsOverride?: ToastrOptions | undefined;
}

interface ToastrResponse {
    /**
     * The internal toast id.
     */
    toastId: number;
    /**
     * The current state of the toast.
     */
    state: 'visible'|'hidden';
    /**
     * The datetime the toast was opened.
     */
    startTime: Date;
    /**
     * The datetime the toast was closed, if the state is hidden.
     */
    endTime?: Date | undefined;
    /**
     * The toastr options.
     */
    options: ToastrOptions;
    /**
     * The event's toast details.
     */
    map: ToastMap;
}

interface Toastr {
    /**
     * Clear toasts
     */
    clear: {
        /**
         * Clear specific toast
         *
         * @param toast Toast to clear
         * @param clearOptions force clearing a toast, ignoring focus
         */
        (toast?: JQuery, clearOptions?: {force: boolean}): void;
    };
    /**
     * Removes toasts (without animation)
     */
    remove: {
        /**
         * Removes all toasts (without animation)
          */
        (): void;
        /**
         * Removes specific toast (without animation)
         *
         * @param toast Toast to remove
          */
        (toast: JQuery): void;
    };
    /**
     * Create an error toast
     */
    error: ToastrDisplayMethod;
    /**
     * Create an info toast
     */
    info: ToastrDisplayMethod;
    /**
     * The toatsr options object
     */
    options: ToastrOptions;
    /**
     * Create a success toast
     */
    success: ToastrDisplayMethod;
    /**
     * Create a warning toast
     */
    warning: ToastrDisplayMethod;
    /**
     * Get toastr version
     */
    version: string;
    /**
     * Get or create a container.
     */
    getContainer: {
        /**
         * Get the container by options.containerId.
         *
         * @param options Option values for the container
         */
        (options?: ToastrOptions): JQuery,
        /**
         * Get the container by options.containerId.
         * If it doesn't exist, it will be created according to options.
         *
         * @param options Option values for the container
         * @param create Use true to create a container, if it doesn't exist
         */
        (options: ToastrOptions, create: boolean): JQuery,
    };
    /**
     * Register a callback to be called when a toast gets created or hidden.
     *
     * @param callback The function which will be passed the event details.
     */
    subscribe: (callback: (response: ToastrResponse) => void) => void;
}

declare var toastr: Toastr;
declare module "toastr" {
    export = toastr;
}
