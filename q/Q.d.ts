// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

declare function Q<T>(value: T): Q.Promise<T>;
//declare function Q<T>(value: Q.Promise<T>): Q.Promise<T>
declare module Q {
    interface Deferred<T> {
        promise: Promise<T>;
        resolve(value: T): any;
        reject(reason: any);
        notify(value: any);
        makeNodeResolver(): (reason, value: T) => void;
    }

    interface Promise<T> {
        fail(errorCallback: Function): Promise<any>;
        fin(finallyCallback: Function): Promise<T>;
        finally(finallyCallback: Function): Promise<T>;
        then(onFulfilled?: (value: T) => any, onRejected?: (reason) => any, onProgress?: Function): Promise<any>;
        spread(onFulfilled: Function, onRejected?: Function): Promise<any>;
        catch(onRejected: Function): Promise<any>;
        progress(onProgress: Function): Promise<any>;
        done(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): void;
        get(propertyName: String): Promise<any>;
        set(propertyName: String, value: any): Promise<any>;
        delete(propertyName: String): Promise<any>;
        post(methodName: String, args: any[]): Promise<any>;
        invoke(methodName: String, ...args: any[]): Promise<any>;
        keys(): Promise<string[]>;
        fapply(args: any[]): Promise<any>;
        fcall(method: Function, ...args: any[]): Promise<any>;
        timeout(ms: number, message?): Promise<T>;
        delay(ms: number): Promise<T>;
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
    export function timeout<T>(promise: Promise<T>, ms: number, message?): Promise<T>;
    export function delay<T>(promise: Promise<T>, ms: number): Promise<T>;
    export function delay<T>(value: T, ms: number): Promise<T>;
    export function isFulfilled(promise: Promise<any>): bool;
    export function isRejected(promise: Promise<any>): bool;
    export function isPending(promise: Promise<any>): bool;
    export function valueOf<T>(promise: Promise<T>): T;
    export function defer<T>(): Deferred<T>;
    export function reject(reason?): Promise<any>;
    export function promise<T>(factory: { resolve: Function; reject: Function; notify: Function; }): Promise<T>;
    export function promised<T>(callback: (...any) => T): (...any) => Promise<T>;
    export function isPromise(object): bool;
    export function isPromiseAlike(object): bool;
    export function isPending(object): bool;
    export function async<T>(generatorFunction: any): (...args) => Promise<T>;
    export function nextTick(callback: Function): void;
    export var oneerror: () => void;
    export var longStackSupport: bool;
    export function resolve<T>(object): Promise<T>;
}

declare module "q" {
    export = Q;
}