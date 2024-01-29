import $ = require("jquery");

declare global {
    interface Loop {
        begin?: number | undefined;
        end?: number | undefined;
        step?: number | undefined;
    }

    interface ConnectOption {
        target: any;
        args?: any[] | undefined;
        ok?: number | undefined;
        ng?: number | undefined;
    }

    interface RetryOption {
        wait: number;
    }

    interface DeferredizedFunction {
        (...arg: any[]): Deferred;
    }
    interface DeferredizedFunctionWithNumber {
        (n: number): Deferred;
    }
    interface FunctionWithNumber {
        (i: number, o?: any): any;
    }
    interface ErrorCallback {
        (d: Deferred, ...args: any[]): any;
    }

    class Deferred {
        static methods: string[];

        static isDeferred(obj: any): boolean;

        static next(fun: Function): Deferred;

        static chain(...args: any[]): Deferred;

        static wait(n: number): Deferred;

        static call(fun?: Function, ...args: any[]): Deferred;

        static parallel(dl: any): Deferred;

        static earlier(dl: any): Deferred;

        static loop(n: number, fun: FunctionWithNumber): Deferred;
        static loop(n: Loop, fun: FunctionWithNumber): Deferred;

        static repeat(n: number, fun: FunctionWithNumber): Deferred;

        static register(name: string, fun: DeferredizedFunction): void;

        static connect(funo: any, options: string): DeferredizedFunction;
        static connect(funo: Function, options?: ConnectOption): DeferredizedFunction;

        static retry(retryCount: number, funcDeferred: DeferredizedFunctionWithNumber, options?: RetryOption): Deferred;

        static define(obj?: any, list?: string[]): any;

        constructor();

        next(fun: Function): Deferred;

        wait(n: number): Deferred;

        error(fun: ErrorCallback): Deferred;

        call(val?: any): Deferred;

        fail(err: any): Deferred;

        cancel(): Deferred;

        parallel(dl: any): Deferred;

        loop(n: number, fun: FunctionWithNumber): Deferred;
        loop(n: Loop, fun: FunctionWithNumber): Deferred;
    }

    interface JQueryXHR {
        next(fun: Function): Deferred;
    }

    function chain(...args: any[]): Deferred;

    function wait(n: number): Deferred;

    function call(fun?: Function, ...args: any[]): Deferred;

    function parallel(dl: any): Deferred;

    function earlier(dl: any): Deferred;

    function loop(n: number, fun: FunctionWithNumber): Deferred;
    function loop(n: Loop, fun: FunctionWithNumber): Deferred;

    function repeat(n: number, fun: FunctionWithNumber): Deferred;

    function next(fun: Function): Deferred;
}
