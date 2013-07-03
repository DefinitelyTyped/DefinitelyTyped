// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

declare function Q<T>(value: T): Q.Promise<T>;
declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>;

declare module Q {
    interface IPromise<T> {
        then<U>(onFulfill: (value: T) => U, onReject?: (reason) => U): IPromise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason) => U): IPromise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason) => IPromise<U>): IPromise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason) => IPromise<U>): IPromise<U>;
    }

    interface Deferred<T> {
        promise: Promise<T>;
        resolve(value: T): void;
        reject(reason: any): void;
        notify(value: any): void;
        makeNodeResolver(): (reason, value: T) => void;
    }

    interface Promise<T> {
        fin(finallyCallback: () => any): Promise<T>;
        finally(finallyCallback: () => any): Promise<T>;

        then<U>(onFulfill: (value: T) => U, onReject?: (reason) => U, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason) => U, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason) => IPromise<U>, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason) => IPromise<U>, onProgress?: Function): Promise<U>;

        spread<U>(onFulfilled: Function, onRejected?: Function): Promise<U>;

        fail<U>(onRejected: (reason) => U): Promise<U>;
        fail<U>(onRejected: (reason) => IPromise<U>): Promise<U>;
        catch<U>(onRejected: (reason) => U): Promise<U>;
        catch<U>(onRejected: (reason) => IPromise<U>): Promise<U>;

        progress(onProgress: (progress) => any): Promise<T>;

        done(onFulfilled?: (value: T) => any, onRejected?: (reason) => any, onProgress?: (progress) => any): void;

        get<U>(propertyName: String): Promise<U>;
        set<U>(propertyName: String, value: any): Promise<U>;
        delete<U>(propertyName: String): Promise<U>;
        post<U>(methodName: String, args: any[]): Promise<U>;
        invoke<U>(methodName: String, ...args: any[]): Promise<U>;
        fapply<U>(args: any[]): Promise<U>;
        fcall<U>(...args: any[]): Promise<U>;

        keys(): Promise<string[]>;
        
        timeout(ms: number, message?: string): Promise<T>;
        delay(ms: number): Promise<T>;

        isFulfilled(): boolean;
        isRejected(): boolean;
        isPending(): boolean;

        valueOf(): any;
    }

    export function when<T>(value: T): Promise<T>;
    export function when<T>(value: IPromise<T>): Promise<T>;
    export function when<T, U>(value: T, onFulfilled: (val: T) => U): Promise<U>;
    export function when<T, U>(value: T, onFulfilled: (val: T) => IPromise<U>): Promise<U>;
    export function when<T, U>(value: IPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason) => U): Promise<U>;
    export function when<T, U>(value: IPromise<T>, onFulfilled: (val: T) => IPromise<U>, onRejected?: (reason) => U): Promise<U>;
    export function when<T, U>(value: IPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason) => IPromise<U>): Promise<U>;
    export function when<T, U>(value: IPromise<T>, onFulfilled: (val: T) => IPromise<U>, onRejected?: (reason) => IPromise<U>): Promise<U>;
    
    //export function try(method: Function, ...args: any[]): Promise<any>; // <- This is broken currently - not sure how to fix.

    export function fbind<T>(method: (...args: any[]) => T, ...args: any[]): (...args: any[]) => Promise<T>;
    export function fbind<T>(method: (...args: any[]) => IPromise<T>, ...args: any[]): (...args: any[]) => Promise<T>;

    export function fcall<T>(method: (...args) => T, ...args: any[]): Promise<T>;

    export function send<T>(obj: any, functionName: string, ...args: any[]): Promise<T>;
    export function invoke<T>(obj: any, functionName: string, ...args: any[]): Promise<T>;
    export function mcall<T>(obj: any, functionName: string, ...args: any[]): Promise<T>;

    export function nfbind<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => Promise<T>;
    export function nfcall<T>(nodeFunction: Function, ...args: any[]): Promise<T>;

    export function ninvoke<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>;
    export function nsend<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>;
    export function nmcall<T>(nodeModule: any, functionName: string, ...args: any[]): Promise<T>;

    export function all<T>(promises: any[]): Promise<T[]>;
    export function all<T>(promises: IPromise<T>[]): Promise<T[]>;
    
    export function allSettled<T>(promises: any[]): Promise<Promise<T>[]>;
    export function allSettled<T>(promises: IPromise<T>[]): Promise<Promise<T>[]>;

    export function allResolved<T>(promises: any[]): Promise<Promise<T>[]>;
    export function allResolved<T>(promises: IPromise<T>[]): Promise<Promise<T>[]>;

    export function spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason) => U): Promise<U>;
    export function spread<U>(promises: any[], onFulfilled: (...args: any[]) => IPromise<U>, onRejected: (reason) => U): Promise<U>;
    export function spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason) => IPromise<U>): Promise<U>;
    export function spread<U>(promises: any[], onFulfilled: (...args: any[]) => IPromise<U>, onRejected: (reason) => IPromise<U>): Promise<U>;
    export function spread<T, U>(promises: IPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason) => U): Promise<U>;
    export function spread<T, U>(promises: IPromise<T>[], onFulfilled: (...args: T[]) => IPromise<U>, onRejected: (reason) => U): Promise<U>;
    export function spread<T, U>(promises: IPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason) => IPromise<U>): Promise<U>;
    export function spread<T, U>(promises: IPromise<T>[], onFulfilled: (...args: T[]) => IPromise<U>, onRejected: (reason) => IPromise<U>): Promise<U>;
    
    export function timeout<T>(promise: Promise<T>, ms: number, message?: string): Promise<T>;

    export function delay<T>(promise: Promise<T>, ms: number): Promise<T>;
    export function delay<T>(value: T, ms: number): Promise<T>;

    export function isFulfilled(promise: Promise<any>): boolean;
    export function isRejected(promise: Promise<any>): boolean;
    export function isPending(promise: Promise<any>): boolean;

    export function defer<T>(): Deferred<T>;

    export function reject(reason?): Promise<any>;

    export function promise<T>(resolver: (resolve: (val: T) => void , reject: (reason) => void , notify: (progress) => void ) => void ): Promise<T>;
    export function promise<T>(resolver: (resolve: (val: IPromise<T>) => void , reject: (reason) => void , notify: (progress) => void ) => void ): Promise<T>;

    export function promised<T>(callback: (...any) => T): (...any) => Promise<T>;

    export function isPromise(object): boolean;
    export function isPromiseAlike(object): boolean;
    export function isPending(object): boolean;

    export function async<T>(generatorFunction: any): (...args) => Promise<T>;
    export function nextTick(callback: Function): void;

    export var oneerror: () => void;
    export var longStackSupport: boolean;

    export function resolve<T>(object: T): Promise<T>;
    export function resolve<T>(object: IPromise<T>): Promise<T>;
}

declare module "q" {
    export = Q;
}