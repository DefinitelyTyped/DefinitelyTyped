// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek, Andrew Gaspar, John Reilly
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

/// <reference path="../jquery/jquery.d.ts"/>

interface QIPromise<T> {
    then<U>(onFulfill: (value: T) => QIPromise<U>, onReject?: (reason: any) => QIPromise<U>): QIPromise<U>;
    then<U>(onFulfill: (value: T) => QIPromise<U>, onReject?: (reason: any) => U): QIPromise<U>;
    then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => QIPromise<U>): QIPromise<U>;
    then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => U): QIPromise<U>;
}

interface QDeferred<T> {
    promise: QPromise<T>;
    resolve(value: T): void;
    reject(reason: any): void;
    notify(value: any): void;
    makeNodeResolver(): (reason: any, value: T) => void;
}

interface QPromise<T> {
    fin(finallyCallback: () => any): QPromise<T>;
    finally(finallyCallback: () => any): QPromise<T>;

    then<U>(onFulfill: (value: T) => QIPromise<U>, onReject?: (reason: any) => QIPromise<U>, onProgress?: Function): QPromise<U>;
    then<U>(onFulfill: (value: T) => QIPromise<U>, onReject?: (reason: any) => U, onProgress?: Function): QPromise<U>;
    then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => QIPromise<U>, onProgress?: Function): QPromise<U>;
    then<U>(onFulfill: (value: T) => U, onReject?: (reason: any) => U, onProgress?: Function): QPromise<U>;

    spread<U>(onFulfilled: Function, onRejected?: Function): QPromise<U>;

    fail<U>(onRejected: (reason: any) => U): QPromise<U>;
    fail<U>(onRejected: (reason: any) => QIPromise<U>): QPromise<U>;
    catch<U>(onRejected: (reason: any) => U): QPromise<U>;
    catch<U>(onRejected: (reason: any) => QIPromise<U>): QPromise<U>;

    progress(onProgress: (progress: any) => any): QPromise<T>;

    done(onFulfilled?: (value: T) => any, onRejected?: (reason: any) => any, onProgress?: (progress: any) => any): void;

    get<U>(propertyName: String): QPromise<U>;
    set<U>(propertyName: String, value: any): QPromise<U>;
    delete<U>(propertyName: String): QPromise<U>;
    post<U>(methodName: String, args: any[]): QPromise<U>;
    invoke<U>(methodName: String, ...args: any[]): QPromise<U>;
    fapply<U>(args: any[]): QPromise<U>;
    fcall<U>(...args: any[]): QPromise<U>;

    keys(): QPromise<string[]>;

    thenResolve<U>(value: U): QPromise<U>;
    thenReject(reason: any): QPromise<T>;
    timeout(ms: number, message?: string): QPromise<T>;
    delay(ms: number): QPromise<T>;

    isFulfilled(): boolean;
    isRejected(): boolean;
    isPending(): boolean;

    valueOf(): any;

    inspect(): QPromiseState<T>;
}

interface QPromiseState<T> {
    state: string /* "fulfilled", "rejected", "pending" */;
    value?: T;
    reason?: any;
}

interface QStatic {

    <T>(promise: QIPromise<T>): QPromise<T>;
    <T>(promise: JQueryPromise<T>): QPromise<T>;
    <T>(value: T): QPromise<T>;

    // if no fulfill, reject, or progress provided, returned promise will be of same type
    when<T>(value: QIPromise<T>): QPromise<T>;
    when<T>(value: T): QPromise<T>;

    // If a non-promise value is provided, it will not reject or progress
    when<T, U>(value: T, onFulfilled: (val: T) => QIPromise<U>): QPromise<U>;
    when<T, U>(value: T, onFulfilled: (val: T) => U): QPromise<U>;

    when<T, U>(value: QIPromise<T>, onFulfilled: (val: T) => QIPromise<U>, onRejected?: (reason: any) => QIPromise<U>, onProgress?: (progress: any) => any): QPromise<U>;
    when<T, U>(value: QIPromise<T>, onFulfilled: (val: T) => QIPromise<U>, onRejected?: (reason: any) => U, onProgress?: (progress: any) => any): QPromise<U>;
    when<T, U>(value: QIPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason: any) => QIPromise<U>, onProgress?: (progress: any) => any): QPromise<U>;
    when<T, U>(value: QIPromise<T>, onFulfilled: (val: T) => U, onRejected?: (reason: any) => U, onProgress?: (progress: any) => any): QPromise<U>;
    
    //export function try(method: Function, ...args: any[]): QPromise<any>; // <- This is broken currently - not sure how to fix.

    fbind<T>(method: (...args: any[]) => QIPromise<T>, ...args: any[]): (...args: any[]) => QPromise<T>;
    fbind<T>(method: (...args: any[]) => T, ...args: any[]): (...args: any[]) => QPromise<T>;

    fcall<T>(method: (...args: any[]) => T, ...args: any[]): QPromise<T>;

    send<T>(obj: any, functionName: string, ...args: any[]): QPromise<T>;
    invoke<T>(obj: any, functionName: string, ...args: any[]): QPromise<T>;
    mcall<T>(obj: any, functionName: string, ...args: any[]): QPromise<T>;

    nfbind<T>(nodeFunction: Function, ...args: any[]): (...args: any[]) => QPromise<T>;
    nfcall<T>(nodeFunction: Function, ...args: any[]): QPromise<T>;

    ninvoke<T>(nodeModule: any, functionName: string, ...args: any[]): QPromise<T>;
    nsend<T>(nodeModule: any, functionName: string, ...args: any[]): QPromise<T>;
    nmcall<T>(nodeModule: any, functionName: string, ...args: any[]): QPromise<T>;

    all<T>(promises: QIPromise<T>[]): QPromise<T[]>;
    all<T>(promises: any[]): QPromise<T[]>;
    
    allSettled<T>(promises: QIPromise<T>[]): QPromise<QPromiseState<T>[]>;
    allSettled<T>(promises: any[]): QPromise<QPromiseState<T>[]>;

    allResolved<T>(promises: QIPromise<T>[]): QPromise<QPromise<T>[]>;
    allResolved<T>(promises: any[]): QPromise<QPromise<T>[]>;

    spread<U>(promises: any[], onFulfilled: (...args: any[]) => QIPromise<U>, onRejected: (reason: any) => QIPromise<U>): QPromise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => QIPromise<U>, onRejected: (reason: any) => U): QPromise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason: any) => QIPromise<U>): QPromise<U>;
    spread<U>(promises: any[], onFulfilled: (...args: any[]) => U, onRejected: (reason: any) => U): QPromise<U>;
    
    spread<T, U>(promises: QIPromise<T>[], onFulfilled: (...args: T[]) => QIPromise<U>, onRejected: (reason: any) => QIPromise<U>): QPromise<U>;
    spread<T, U>(promises: QIPromise<T>[], onFulfilled: (...args: T[]) => QIPromise<U>, onRejected: (reason: any) => U): QPromise<U>;
    spread<T, U>(promises: QIPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason: any) => QIPromise<U>): QPromise<U>;
    spread<T, U>(promises: QIPromise<T>[], onFulfilled: (...args: T[]) => U, onRejected: (reason: any) => U): QPromise<U>;
    
    timeout<T>(promise: QPromise<T>, ms: number, message?: string): QPromise<T>;

    delay<T>(promise: QPromise<T>, ms: number): QPromise<T>;
    delay<T>(value: T, ms: number): QPromise<T>;

    isFulfilled(promise: QPromise<any>): boolean;
    isRejected(promise: QPromise<any>): boolean;
    isPending(promise: QPromise<any>): boolean;

    defer<T>(): QDeferred<T>;

    reject(reason?: any): QPromise<any>;

    promise<T>(resolver: (resolve: (val: QIPromise<T>) => void , reject: (reason: any) => void , notify: (progress: any) => void ) => void ): QPromise<T>;
    promise<T>(resolver: (resolve: (val: T) => void , reject: (reason: any) => void , notify: (progress: any) => void ) => void ): QPromise<T>;

    promised<T>(callback: (...args: any[]) => T): (...args: any[]) => QPromise<T>;

    isPromise(object: any): boolean;
    isPromiseAlike(object: any): boolean;
    isPending(object: any): boolean;

    async<T>(generatorFunction: any): (...args: any[]) => QPromise<T>;
    nextTick(callback: Function): void;

    resolve<T>(object: QIPromise<T>): QPromise<T>;
    resolve<T>(object: T): QPromise<T>;

    onerror: (reason: any) => void;
    longStackSupport: boolean;
}

declare module "q" {
    export = Q;
}
declare var Q: QStatic;
