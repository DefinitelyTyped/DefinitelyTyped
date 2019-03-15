// Type definitions for typescript-deferred v0.1.5
// Project: https://github.com/DirtyHairy/typescript-deferred
// Definitions by: Christian Speckner <https://github.com/DirtyHairy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface ImmediateSuccessCB<T, TP> {
    (value: T): TP;
}
export interface ImmediateErrorCB<TP> {
    (err: any): TP;
}
export interface DeferredSuccessCB<T, TP> {
    (value: T): ThenableInterface<TP>;
}
export interface DeferredErrorCB<TP> {
    (error: any): ThenableInterface<TP>;
}
export interface ThenableInterface<T> {
    then<TP>(successCB?: DeferredSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>): ThenableInterface<TP>;
    then<TP>(successCB?: DeferredSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>): ThenableInterface<TP>;
    then<TP>(successCB?: ImmediateSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>): ThenableInterface<TP>;
    then<TP>(successCB?: ImmediateSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>): ThenableInterface<TP>;
}
export interface PromiseInterface<T> extends ThenableInterface<T> {
    then<TP>(successCB?: DeferredSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>): PromiseInterface<TP>;
    then<TP>(successCB?: DeferredSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>): PromiseInterface<TP>;
    then<TP>(successCB?: ImmediateSuccessCB<T, TP>, errorCB?: DeferredErrorCB<TP>): PromiseInterface<TP>;
    then<TP>(successCB?: ImmediateSuccessCB<T, TP>, errorCB?: ImmediateErrorCB<TP>): PromiseInterface<TP>;
    otherwise(errorCB?: DeferredErrorCB<T>): PromiseInterface<T>;
    otherwise(errorCB?: ImmediateErrorCB<T>): PromiseInterface<T>;
    always<TP>(errorCB?: DeferredErrorCB<TP>): PromiseInterface<TP>;
    always<TP>(errorCB?: ImmediateErrorCB<TP>): PromiseInterface<TP>;
}
export interface DeferredInterface<T> {
    resolve(value?: ThenableInterface<T>): DeferredInterface<T>;
    resolve(value?: T): DeferredInterface<T>;
    reject(error?: any): DeferredInterface<T>;
    promise: PromiseInterface<T>;
}
export declare function create<T>(): DeferredInterface<T>;
export declare function when<T>(value?: ThenableInterface<T>): PromiseInterface<T>;
export declare function when<T>(value?: T): PromiseInterface<T>;
