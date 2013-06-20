// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

interface Qdeferred {
    promise: Qpromise;
    resolve(value: any): any;
    reject(reason: any);
    notify(value: any);
    makeNodeResolver(): () => void;
}

interface Qpromise {
    fail(errorCallback: Function): Qpromise;
    fin(finallyCallback: Function): Qpromise;
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): Qpromise;
    spread(onFulfilled: Function, onRejected?: Function): Qpromise;
    catch(onRejected: Function): Qpromise;
    progress(onProgress: Function): Qpromise;
    done(onFulfilled?: Function, onRejected?: Function, onProgress?: Function): Qpromise;
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

declare function Q(value: any): Qpromise;
declare module Q {
    export function when(value: any, onFulfilled: Function, onRejected?: Function): Qpromise;
    //export function try(method: Function, ...args: any[]): Qpromise; <- This is broken currently - not sure how to fix.
    export function fbind(method: Function, ...args: any[]): Qpromise;
    export function fcall(method: Function, ...args: any[]): Qpromise;
    export function nfbind(nodeFunction: Function): (...args: any[]) => Qpromise;
    export function nfcall(nodeFunction: Function, ...args: any[]): Qpromise;
    export function ninvoke(nodeModule: any, functionName: string, ...args: any[]): Qpromise;
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
    export function reject(): Qpromise;
    export function promise(factory: { resolve: Function; reject: Function; notify: Function; }): Qpromise;
    export function isPromise(value: any): bool;
    export function async(generatorFunction: any): Qdeferred;
    export function nextTick(callback: Function);
    export var oneerror: any;
    export var longStackJumpLimit: number;
    export function resolve(object?: Qpromise);
}

declare module "q" {
    export = Q;
}