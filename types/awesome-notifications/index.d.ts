// Type definitions for awesome-notifications 3.1
// Project: https://github.com/f3oall/awesome-notifications (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
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
confirmOK?: string;
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
     * @param  opts Options
     */
    constructor(opts?: AwnOptions);

    /**
     * Shows new tip toast
     * @param message Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
     * @param options Instance of `AwnOptions`, which will override globals for this call
     */
    tip(message: string, options?: AwnOptions): void;

    info(message: string, options?: AwnOptions): void;
    success(message: string, options?: AwnOptions): void;
    warning(message: string, options?: AwnOptions): void;
    alert(message: string, options?: AwnOptions): void;

    /**
     * Shows new async toast.
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *                  If String, `AWN.success(onResolve)` method will be called;
     *                  If Function, it will be called, can take resp as optional parameter.
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *                  If String, `AWN.alert(onReject)` method will be called;
     *                  If Function, it will be called, can take err as optional parameter.
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
    ): void;
    async<T = unknown>(promise: Promise<T>, onResolve?: string, onReject?: (resp?: T) => void, message?: string, options?: AwnOptions): void;
    async(promise: Promise<any>, onResolve: string, onReject?: string, message?: string, options?: AwnOptions): void;

    /**
     * Shows new blocking sync toast.
     *
     * @param promise   Any JavaScript Promise
     * @param onResolve Can be Function or String. Processing of this parameter start after Promise resolve.
     *                  If omitted, uses default behavior - `AWN.success(resp)` method will be called.
     *                  If String, `AWN.success(onResolve)` method will be called;
     *                  If Function, it will be called, can take resp as optional parameter.
     *                  If null, disables default behavior.
     * @param onReject  Can be Function or String. Processing of this parameter start after Promise reject.
     *                  If omitted, uses default behavior - `AWN.alert(err)` method will be called.
     *                  If String, `AWN.alert(onReject)` method will be called;
     *                  If Function, it will be called, can take err as optional parameter.
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
    ): void;
    asyncBlock<T = unknown>(promise: Promise<T>, onResolve?: string, onReject?: (resp?: T) => void, message?: string, options?: AwnOptions): void;
    asyncBlock(promise: Promise<any>, onResolve: string, onReject?: string, message?: string, options?: AwnOptions): void;

    /**
     * Closes all visible toasts. Do nothing if there’re no visible toasts.
     */
    closeToasts(): void;
}
