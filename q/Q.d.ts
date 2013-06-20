// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

declare function Q<T>(value: T): Q.Promise<T>;
//declare function Q<T>(value: Q.Promise<T>): Q.Promise<T>
declare module Q {
    interface Deferred<T> {
        promise: Promise<T>;
        resolve(value: any): any;
        reject(reason: any);
        notify(value: any);
        makeNodeResolver(): () => void;
    }

    interface Promise<T> {
        fail(errorCallback: Function): Promise<any>;
        fin(finallyCallback: Function): Promise<any>;
        then(onFulfilled?: (value: T) => any, onRejected?: (reason) => any, onProgress?: Function): Promise<any>;
        spread(onFulfilled: Function, onRejected?: Function): Promise<any>;
        catch(onRejected: Function): Promise<any>;
        progress(onProgress: Function): Promise<any>;
        done(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): Promise<any>;
        get(propertyName: String): Promise<any>;
        set(propertyName: String, value: any): Promise<any>;
        delete(propertyName: String): Promise<any>;
        post(methodName: String, args: any[]): Promise<any>;
        invoke(methodName: String, ...args: any[]): Promise<any>;
        keys(): Promise<any>;
        fapply(args: any[]): Promise<any>;
        fcall(method: Function, ...args: any[]): Promise<any>;
        timeout(ms: number): Promise<any>;
        delay(ms: number): Promise<any>;
        isFulfilled(): bool;
        isRejected(): bool;
        isPending(): bool;
        valueOf(): any;
    }

    export function when(value: any, onFulfilled: Function, onRejected?: Function): Promise<any>;
    //export function try(method: Function, ...args: any[]): Promise<any>; // <- This is broken currently - not sure how to fix.
    export function fbind(method: Function, ...args: any[]): Promise<any>;
    export function fcall(method: Function, ...args: any[]): Promise<any>;
    export function nfbind(nodeFunction: Function): (...args: any[]) => Promise<any>;
    export function nfcall(nodeFunction: Function, ...args: any[]): Promise<any>;
    export function ninvoke(nodeModule: any, functionName: string, ...args: any[]): Promise<any>;
    export function all(promises: Promise<any>[]): Promise<any>;
    export function allResolved(promises: Promise<any>[]): Promise<any>;
    export function spread(onFulfilled: Function, onRejected: Function): Promise<any>;
    export function timeout(ms: number): Promise<any>;
    export function delay(ms: number): Promise<any>;
    export function delay(value: any, ms: number): Promise<any>;
    export function isFulfilled(): bool;
    export function isRejected(): bool;
    export function isPending(): bool;
    export function valueOf(): any;
    export function defer(): Deferred;
    export function reject(): Promise<any>;
    export function promise(factory: { resolve: Function; reject: Function; notify: Function; }): Promise<any>;
    export function isPromise(value: any): bool;
    export function async(generatorFunction: any): Deferred;
    export function nextTick(callback: Function);
    export var oneerror: any;
    export var longStackJumpLimit: number;
    export function resolve(object?: Promise<any>);
}

declare module "q" {
    export = Q;
}