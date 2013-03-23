// Type definitions for q that meet the CommonJS module format.
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek and Andrew Gaspar
// Definitions: https://github.com/AndrewGaspar/DefinitelyTyped  

interface Qdeferred {
    promise: Qpromise;
    resolve(value: any): any;
    reject(reason: any);
    notify(value: any);
    makeNodeResolver(): Function;
}

interface Qpromise {
    fail(errorCallback: Function): Qpromise;
    fin(finallyCallback: Function): Qpromise;
    then(onFulfilled: Function, onRejected?: Function, onProgress?: Function): Qpromise;
    catch(onRejected: Function): Qpromise;
    progress(onProgress: Function): Qpromise;
    done(onFulfilled: Function, onRejected?: Function, onProgress?: Function): Qpromise;
    get (propertyName: String): Qpromise;
    set (propertyName: String, value: any): Qpromise;
    delete (propertyName: String): Qpromise;
    post(methodName: String, args: any[]): Qpromise;
    invoke(methodName: String, ...args: any[]): Qpromise;
    keys(): Qpromise;
    fapply(args: any[]): Qpromise;
    fcall(method: Function, ...args: any[]): Qpromise;
    timeout(ms: number): Qpromise;
    delay(ms: number): Qpromise;
    isFulfilled(): bool;
    isRejected(): bool;
    isPending(): bool;
    valueOf(): any;
}

export function try(method: Function, ...args: any[]): Qpromise;
export function fbind(method: Function, ...args: any[]): Qpromise;
export function fcall(method: Function, ...args: any[]): Qpromise;
export function all(promises: Qpromise[]): Qpromise;
export function allResolved(promises: Qpromise[]): Qpromise;
export function spread(onFulfilled: Function, onRejected: Function): Qpromise;
export function timeout(ms: number): Qpromise;
export function delay(ms: number): Qpromise;
export function delay(value: any, ms: number): Qpromise;
export function isFulfilled(): bool;
export function isRejected(): bool;
export function isPending(): bool;
export function valueOf(): any;
export function defer(): Qdeferred;
export function (value: any): Qpromise;
export function reject(): Qpromise;
export function promise(factory: { resolve: Function; reject: Function; notify: Function; }): Qpromise;
export function isPromise(value: any): bool;
export function async(generatorFunction: any): Qdeferred;
export function nextTick(callback: Function);
export var oneerror: any;
export var longStackJumpLimit: number;