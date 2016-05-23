// Type definitions for asyncblock 2.1.23
// Project: https://github.com/scriby/asyncblock
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function asyncblock<T>(f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void): void;

declare namespace asyncblock {
    export function nostack<T>(f: (flow: asyncblock.IFlow) => void, callback?: (err: any, res: T) => void): void;

    export interface IFlow {
        add(responseFormat?: string[]): IExecuteFunction;
        add(key: string, responseFormat?: string[]): IExecuteFunction;
        add(key: number, responseFormat?: string[]): IExecuteFunction;
        add(options: IFlowOptions): IExecuteFunction;
        callback(responseFormat?: string[]): IExecuteFunction;
        callback(key: string, responseFormat?: string[]): IExecuteFunction;
        callback(key: number, responseFormat?: string[]): IExecuteFunction;
        callback(options: IFlowOptions): IExecuteFunction;
        wait<T>(key?: string): T;
        wait<T>(key?: number): T;

        get<T>(key: string): T;
        set(key: string, responseFormat?: string[]): IExecuteFunction;
        set(options: IFlowOptions): IExecuteFunction;
        del(key: string): void;

        sync<T>(task: any): T;
        queue(toExecute: IExecuteFunction): void;
        queue(key: string, toExecute: IExecuteFunction): void;
        queue(key: number, toExecute: IExecuteFunction): void;
        queue(responseFormat: string[], toExecute: IExecuteFunction): void;
        queue(key: string, responseFormat: string[], toExecute: IExecuteFunction): void;
        queue(key: number, responseFormat: string[], toExecute: IExecuteFunction): void;
        queue(options: IFlowOptions, toExecute: IExecuteFunction): void;
        doneAdding(): void;
        forceWait<T>(): T;

        maxParallel: number;
        errorCallback: (err: any) => void;
        taskTimeout: number;
        timeoutIsError: boolean;
    }

    export interface IFlowOptions {
        ignoreError?: boolean;  // default false
        key?: string;  // string | number
        responseFormat?: string[];
        timeout?: number;
        timeoutIsError?: boolean;
        dontWait?: boolean;
        firstArgIsError?: boolean;  // default true
    }

    export interface IExecuteFunction {
        <T1, T2, T3>(err: any, res1: T1, res2: T2, res3: T3): any;
        <T1, T2>(err: any, res1: T1, res2: T2): any;
        <T>(err: any, res: T): any;
        (err: any): any;

        // firstArgIsError === false
        <T1, T2, T3>(res1: T1, res2: T2, res3: T3): any;
        <T1, T2>(res1: T1, res2: T2): any;
        <T>(res: T): any;
    }

}

export = asyncblock;
