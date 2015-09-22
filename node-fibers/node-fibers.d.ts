// Type definitions for node-fibers
// Project: https://github.com/laverdet/node-fibers
// Definitions by: Cary Haynie <https://github.com/caryhaynie>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface Fiber {
    reset: () => any;
    run: (param?: any) => any;
    throwInto: (ex: any) => any;
}

declare module "fibers" {

    function Fiber(fn: Function): Fiber;

    module Fiber {
        export var current: Fiber;
        export function yield(value?: any): any
    }

    export = Fiber;
}

declare module "fibers/future" {

    class Future {
        constructor();
        detach(): void;
        get(): any;
        isResolved (): boolean;
        proxy(future: Future): void;
        proxyErrors(futureOrList: any): Future;
        resolver(): Function;
        resolve(fn: Function): void;
        resolveSuccess(fn: Function): void;
        return(result?: any): void;
        throw (error: any): void;
        wait (): void;
        static wait(future: Future);
        static wait(future_list: Future[]);
        static wrap(fn: Function): Future
    }

    export = Future;
}
