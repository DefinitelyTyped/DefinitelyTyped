// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

declare function Q(value: any): Q.Promise;
declare module Q {
    interface Deferred {
        promise: Promise;
        resolve(value: any): any;
        reject(reason: any);
        notify(value: any);
        makeNodeResolver(): () => void;
    }

    interface Promise {
        fail(errorCallback: Function): Promise;
        fin(finallyCallback: Function): Promise;
        then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): Promise;
        spread(onFulfilled: Function, onRejected?: Function): Promise;
        catch(onRejected: Function): Promise;
        progress(onProgress: Function): Promise;
        done(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): Promise;
        get(propertyName: String): Promise;
        set(propertyName: String, value: any): Promise;
        delete(propertyName: String): Promise;
        post(methodName: String, args: any[]): Promise;
        invoke(methodName: String, ...args: any[]): Promise;
        keys(): Promise;
        fapply(args: any[]): Promise;
        fcall(method: Function, ...args: any[]): Promise;
        timeout(ms: number): Promise;
        delay(ms: number): Promise;
        isFulfilled(): bool;
        isRejected(): bool;
        isPending(): bool;
        valueOf(): any;
    }

    export function when(value: any, onFulfilled: Function, onRejected?: Function): Promise;
    //export function try(method: Function, ...args: any[]): Qpromise; <- This is broken currently - not sure how to fix.
    export function fbind(method: Function, ...args: any[]): Promise;
    export function fcall(method: Function, ...args: any[]): Promise;
    export function nfbind(nodeFunction: Function): (...args: any[]) => Promise;
    export function nfcall(nodeFunction: Function, ...args: any[]): Promise;
    export function ninvoke(nodeModule: any, functionName: string, ...args: any[]): Promise;
    export function all(promises: Promise[]): Promise;
    export function allResolved(promises: Promise[]): Promise;
    export function spread(onFulfilled: Function, onRejected: Function): Promise;
    export function timeout(ms: number): Promise;
    export function delay(ms: number): Promise;
    export function delay(value: any, ms: number): Promise;
    export function isFulfilled(): bool;
    export function isRejected(): bool;
    export function isPending(): bool;
    export function valueOf(): any;
    export function defer(): Deferred;
    export function reject(): Promise;
    export function promise(factory: { resolve: Function; reject: Function; notify: Function; }): Promise;
    export function isPromise(value: any): bool;
    export function async(generatorFunction: any): Deferred;
    export function nextTick(callback: Function);
    export var oneerror: any;
    export var longStackJumpLimit: number;
    export function resolve(object?: Promise);
}

declare module "q" {
    export = Q;
}