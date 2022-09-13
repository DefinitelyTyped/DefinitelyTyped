// Type definitions for awesome-notifications 3.1
// Project: https://github.com/f3oall/awesome-notifications
// Definitions by: Sibin Grasic <https://github.com/oblakstudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type AwnPosition = 'bottom-right' | 'bottom-left' | 'top-left' | 'top-right';

export interface AwnDurations {
    global?: number;
    tip?: number;
    info?: number;
    success?: number;
    warning?: number;
    alert?: number;
}

export interface AwnLabels {
    global?: string;
    tip?: string;
    info?: string;
    success?: string;
    warning?: string;
    alert?: string;
    async?: string;
    confirm?: string;
    confirmOk?: string;
    confirmCancel?: string;
}

export interface AwnIcons {
    enabled?: boolean;
    prefix?: string;
    suffix?: string;
    global?: string;
    tip?: string;
    info?: string;
    success?: string;
    warning?: string;
    alert?: string;
}

export interface AwnOptions {
    position?: AwnPosition;
    maxNotifications?: number;
    animationDuration?: number;
    formatError?: (error: Error) => string | Error;
    durations?: AwnDurations;
    minDurations?: {
        async?: number;
        'async-block'?: number;
    };
    labels?: AwnLabels;
    messages?: {
        async?: string;
        'async-block'?: string;
    };
}

export default class AWN {
    /**
     * Awesome Notifications
     * Lightweight JavaScript library with enhanced asynchronous events support.
     * @param  opts AwnOptions object
     */
    constructor(opts?: AwnOptions);

    /**
     * Shows new tip toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new HTMLElement instance
     */
    tip(message: string, options?: AwnOptions): HTMLElement;

    /**
     * Shows new info toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new HTMLElement instance
     */
    info(message: string, options?: AwnOptions): HTMLElement;

    /**
     * Shows new success toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new HTMLElement instance
     */
    success(message: string, options?: AwnOptions): HTMLElement;

    /**
     * Shows new warning toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new HTMLElement instance
     */
    warning(message: string, options?: AwnOptions): HTMLElement;

    /**
     * Shows new alert toast
     * @param  message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param  options Instance of `AwnOptions`, which will override globals for this call
     * @return         A new HTMLElement instance
     */
    alert(message: string, options?: AwnOptions): HTMLElement;

    /**
     * Closes all visible toasts. Do nothing if there’re no visible toasts.
     */
    closeToasts(): void;

    /**
     * Shows new async toast.
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *
     *                  If String, `AWN.success(onResolve)` method will be called;
     *
     *                  If Function, it will be called, can take resp as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *
     *                  If String, `AWN.alert(onReject)` method will be called;
     *
     *                  If Function, it will be called, can take err as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param message   A message of async toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param options   Instance of `AwnOptions`, which will override globals for this call
     */
    async<T = unknown>(
        promise: Promise<T>,
        onResolve?: (resp?: T) => void,
        onReject?: (error: Error) => void | string,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;
    async<T = unknown>(
        promise: Promise<T>,
        onResolve?: string,
        onReject?: (resp?: T) => void,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;
    async<T>(
        promise: Promise<T>,
        onResolve: string,
        onReject?: string,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;

    /**
     * Shows new blocking sync toast.
     *
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *
     *                  If String, `AWN.success(onResolve)` method will be called;
     *
     *                  If Function, it will be called, can take resp as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *
     *                  If String, `AWN.alert(onReject)` method will be called;
     *
     *                  If Function, it will be called, can take err as optional parameter.
     *
     *                  If null, disables default behavior.
     * @param message   A message of async toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param options   Instance of `AwnOptions`, which will override globals for this call
     */
    asyncBlock<T = unknown>(
        promise: Promise<T>,
        onResolve?: (resp?: T) => void,
        onReject?: (error: Error) => void | string,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;
    asyncBlock<T = unknown>(
        promise: Promise<T>,
        onResolve?: string,
        onReject?: (resp?: T) => void,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;
    asyncBlock<T>(
        promise: Promise<T>,
        onResolve: string,
        onReject?: string,
        message?: string,
        options?: AwnOptions,
    ): Promise<T>;

    /**
     *
     *
     * @param  message   Defines message of the modal window. Can be any valid HTML or text string.
     * @param  className Defines modal window DOM element class name, it will be concatenated with default prefix ‘awn-popup-‘
     * @param  options   Instance of `AwnOptions`, which will override globals for this call
     */
    modal(message: string, className?: string, options?: AwnOptions): void;

    /**
     * Shows new confirmation window.
     *
     * Confirmation window can be closed by clicking on one of two buttons.
     *
     * Also you can use Esc key to close it. Focus will be set on OK button on opening by default.
     *
     * Focus will be trapped inside window, so user can use Tab (Shift+Tab) key only to switch between one of two buttons
     *
     * @param  message  Defines message of the confirmation window. Can be any valid HTML or text string.
     * @param  onOk     Defines Function, which will be executed on click to ‘OK’ button.
     * @param  onCancel Defines Function, which will be executed on click to ‘Cancel’ button.
     *                  If false was passed, ‘Cancel’ button will be hidden.
     * @param  options  Instance of `AwnOptions`, which will override globals for this call
     * @return          A new `HTMLElement` instance
     */
    confirm(message: string, onOk?: () => void, onCancel?: () => void | false, options?: AwnOptions): HTMLElement;
}
