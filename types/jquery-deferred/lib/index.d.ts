// Utilities
export function type(obj: any): string;
export function isArray(obj: any): boolean;
export function isFunction(obj: any): boolean;
export function isPlainObject(obj: any): boolean;
export function noop(): any;
export function each(collection: any, callback: (indexInArray: any, valueOfElement: any) => any): any;
export function extend(target: any, ...objs: any[]): object;
export function extend(deep: boolean, target: any, ...objs: any[]): object;

// Interface for the JQuery callback
export interface JQueryCallback {
    add(...callbacks: any[]): any;
    disable(): any;
    disabled(): boolean;
    empty(): any;
    fire(...arguments: any[]): any;
    fired(): boolean;
    fireWith(context: any, ...args: any[]): any;
    has(callback: any): boolean;
    lock(): any;
    locked(): boolean;
    remove(...callbacks: any[]): any;
}

// Interface for the JQuery promise, part of callbacks
export interface JQueryPromise {
    state(): string;
    always(...alwaysCallbacks: any[]): JQueryDeferred;
    then(doneCallbacks: any, failCallbacks?: any, progressCallbacks?: any): JQueryDeferred;
    done(...doneCallbacks: any[]): JQueryDeferred;
    fail(...failCallbacks: any[]): JQueryDeferred;
    pipe(doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any): JQueryPromise;
    promise(): JQueryPromise;
}

// Interface for the JQuery deferred, part of callbacks
export interface JQueryDeferred extends JQueryPromise {
    notify(...args: any[]): JQueryDeferred;
    notifyWith(context: any, ...args: any[]): JQueryDeferred;
    progress(...progressCallbacks: any[]): JQueryDeferred;
    reject(...args: any[]): JQueryDeferred;
    rejectWith(context: any, ...args: any[]): JQueryDeferred;
    resolve(...args: any[]): JQueryDeferred;
    resolveWith(context: any, ...args: any[]): JQueryDeferred;
}

// Callbacks
export function Callbacks(flags: any): JQueryCallback;

// Deferred
export function Deferred(beforeStart?: (deferred: JQueryDeferred) => any): JQueryDeferred;

// Helpers
export function when(...deferreds: any[]): JQueryPromise;
