// Type definitions for Q
// Project: https://github.com/kriskowal/q
// Definitions by: Barrie Nemetchek
// Definitions: https://github.com/borisyankov/DefinitelyTyped  

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

interface QStatic {
    when(value: any, onFulfilled: Function, onRejected?: Function): Qpromise;
    try(method: Function, ...args: any[]): Qpromise;
    fbind(method: Function, ...args: any[]): Qpromise;
    fcall(method: Function, ...args: any[]): Qpromise;
    all(promises: Qpromise[]): Qpromise;
    allResolved(promises: Qpromise[]): Qpromise;
    spread(onFulfilled: Function, onRejected: Function): Qpromise;
    timeout(ms: number): Qpromise;
    delay(ms: number): Qpromise;
    delay(value: any, ms: number): Qpromise;
    isFulfilled(): bool;
    isRejected(): bool;
    isPending(): bool;
    valueOf(): any;
    defer(): Qdeferred;
    (value: any): Qpromise;
    reject(): Qpromise;
    promise(factory: { resolve: Function; reject: Function; notify: Function; }): Qpromise;
    isPromise(value: any): bool;
    async(generatorFunction: any): Qdeferred;
    nextTick(callback: Function);
    oneerror: any;
    longStackJumpLimit: number;
}
declare var Q: QStatic;