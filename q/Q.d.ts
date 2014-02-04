// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

/// <reference path="../jquery/jquery.d.ts"/>

declare function Q<T>(promise: Q.IPromise<T>): Q.Promise<T>;
declare function Q<T>(promise: JQueryPromise<T>): Q.Promise<T>;
declare function Q<T>(value: T): Q.Promise<T>;

declare module Q {
    interface IPromise<T> {
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => U): IPromise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => IPromise<U>): IPromise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => U): IPromise<U>;
    }

    interface Deferred<T> {
        promise: Promise<T>;
        resolve(value: T): void;
        reject(reason: any): void;
        notify(value: any): void;
        makeNodeResolver(): (reason: any, value: T) => void;
    }

    interface Promise<T> {
        fin(finallyCallback: () => any): Promise<T>;
        finally(finallyCallback: () => any): Promise<T>;

        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => IPromise<U>, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => IPromise<U>, onReject?: (reason: any) => U, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => IPromise<U>, onProgress?: Function): Promise<U>;
        then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => U, onProgress?: Function): Promise<U>;

        spread<U>(onFulfilled: Function, onRejected?: Function): Promise<U>;

        fail<U>(onRejected: (reason: any) => U): Promise<U>;
        fail<U>(onRejected: (reason: any) => IPromise<U>): Promise<U>;
        catch<U>(onRejected: (reason: any) => U): Promise<U>;
        catch<U>(onRejected: (reason: any) => IPromise<U>): Promise<U>;

        progress(onProgress: (progress: any) => any): Promise<T>;

        done(onFulfilled?: (value: T) => any, onRejected?: (reason: any) => any, onProgress?: (progress: any) => any): void;

        get<U>(propertyName: String): Promise<U>;
        set<U>(propertyName: String, value: any): Promise<U>;
        delete<U>(propertyName: String): Promise<U>;
        post<U>(methodName: String, args: any[]): Promise<U>;
        invoke<U>(methodName: String, ...args: any[]): Promise<U>;
        fapply<U>(args: any[]): Promise<U>;
        fcall<U>(...args: any[]): Promise<U>;

        keys(): Promise<string[]>;
        
        thenResolve<U>(value: U): Promise<U>;
        thenReject(reason: any): Promise<T>;
        timeout(ms: number, message?: string): Promise<T>;
        delay(ms: number): Promise<T>;

        isFulfilled(): boolean;
        isRejected(): boolean;
        isPending(): boolean;

        valueOf(): any;

        inspect(): PromiseState<T>;
    }

    interface PromiseState<T> {
        state: string /* "fulfilled", "rejected", "pending" */;
        value?: T;
        reason?: any;
    }
}

interface QStatic
{
    // if no fulfill, reject, or progress provided, returned promise will be of same type
    when<T>(value: Q.IPromise<T>): Q.Promise<T>;
    when<T>(value: T): Q.Promise<T>;

    // If a non-promise value is provided, it will not reject or progress
    when<T, U>(value: T, onFulfilled: (val: T) => Q.IPromise<U>): Q.Promise<U>;
    when<T, U>(value: T, onFulfilled: (val: T) => U): Q.Promise<U>;

    when<T, U>(value: Q.IPromise<T>, onFulfilled: (val: T) => Q.IPromise<U>, onRejected?: (reason: any) => Q.IPromise<U>, onProgress?: (progress: any) => any): Q.Promise<U>;
    when<T, U>(value: Q.IPromise<T>, onFulfilled: (val: T) => Q.IPromise<U>, onRejected?: (reason: any) => U, onProgress?: (progress: any) => any): Q.Promise<U>;
    when<T, U>(value: Q.IPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason: any) => Q.IPromise<U>, onProgress?: (progress: any) => any): Q.Promise<U>;
    when<T, U>(value: Q.IPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason: any) => U, onProgress?: (progress: any) => any): Q.Promise<U>;

    //export function try(method: Function, ...args: any[]): Q.Promise<any>; // <- This is broken currently - not sure how to fix.

    fbind<T>(method: (...args: any[]) => Q.IPromise<T>, ...args: any[]): (...args: any[]) => Q.Promise<T>;
    fbind<T>(method: (...args: any[]) => T, ...args: any[]): (...args: any[]) => Q.Promise<T>;

    fcall<T>(method: (...args: any[]) => T, ...args: any[]): Q.Promise<T>;

    send<T>(obj: any, functionName: string, ...args: any[]): Q.Promise<T>;
    invoke<T>(obj: any, functionName: string, ...args: any[]): Q.Promise<T>;
    mcall<T>(obj: any, functionName: string, ...args: any[]): Q.Promise<T>;

    nfbind<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => Q.Promise<T>;
    nfcall<T>(nodeFunction: Function, ...args: any[]): Q.Promise<T>;

    ninvoke<T>(nodeModule: any, functionName: string, ...args: any[]): Q.Promise<T>;
    nsend<T>(nodeModule: any, functionName: string, ...args: any[]): Q.Promise<T>;
    nmcall<T>(nodeModule: any, functionName: string, ...args: any[]): Q.Promise<T>;

    all<T>(promises: Q.Promise<T>[]): Q.Promise<T[]>;
    all<T>(promises: any[]): Q.Promise<T[]>;

    allSettled<T>(promises: Q.IPromise<T>[]): Q.Promise<Q.PromiseState<T>[]>;
    allSettled<T>(promises: any[]): Q.Promise<Q.PromiseState<T>[]>;

    allResolved<T>(promises: Q.IPromise<T>[]): Q.Promise<Q.Promise<T>[]>;
    allResolved<T>(promises: any[]): Q.Promise<Q.Promise<T>[]>;

    spread<U>(promises: any[], onFulfilled: (...args: any[]) => Q.IPromise<U>, onRejected: (reason: any) => Q.IPromise<U>): Q.Promise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => Q.IPromise<U>, onRejected: (reason: any) => U): Q.Promise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason: any) => Q.IPromise<U>): Q.Promise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason: any) => U): Q.Promise<U>;

    spread<T, U>(promises: Q.IPromise<T>[], onFulfilled: (...args: T[]) => Q.IPromise<U>, onRejected: (reason: any) => Q.IPromise<U>): Q.Promise<U>;
    spread<T, U>(promises: Q.IPromise<T>[], onFulfilled: (...args: T[]) => Q.IPromise<U>, onRejected: (reason: any) => U): Q.Promise<U>;
    spread<T, U>(promises: Q.IPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason: any) => Q.IPromise<U>): Q.Promise<U>;
    spread<T, U>(promises: Q.IPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason: any) => U): Q.Promise<U>;

    timeout<T>(promise: Q.Promise<T>, ms: number, message?: string): Q.Promise<T>;

    delay<T>(promise: Q.Promise<T>, ms: number): Q.Promise<T>;
    delay<T>(value: T, ms: number): Q.Promise<T>;

    isFulfilled(promise: Q.Promise<any>): boolean;
    isRejected(promise: Q.Promise<any>): boolean;
    isPending(promise: Q.Promise<any>): boolean;

    defer<T>(): Q.Deferred<T>;

    reject(reason?: any): Q.Promise<any>;

    promise<T>(resolver: (resolve: (val: Q.IPromise<T>) => void , reject: (reason: any) => void , notify: (progress: any) => void ) => void ): Q.Promise<T>;
    promise<T>(resolver: (resolve: (val: T) => void , reject: (reason: any) => void , notify: (progress: any) => void ) => void ): Q.Promise<T>;

    promised<T>(callback: (...args: any[]) => T): (...args: any[]) => Q.Promise<T>;

    isPromise(object: any): boolean;
    isPromiseAlike(object: any): boolean;
    isPending(object: any): boolean;

    async<T>(generatorFunction: any): (...args: any[]) => Q.Promise<T>;
    nextTick(callback: Function): void;

    //export var onerror: (reason: any) => void;
    //export var longStackSupport: boolean;

    resolve<T>(object:Q.IPromise<T>): Q.Promise<T>;
    resolve<T>(object: T): Q.Promise<T>;
}

declare var q:QStatic;

declare module "q" {
    export = QStatic;
}
