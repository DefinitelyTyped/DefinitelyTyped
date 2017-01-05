// Type definitions for Finch 0.5.13
// Project: https://github.com/stoodder/finchjs
// Definitions by: David Sichau <https://github.com/DavidSichau>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface FinchCallback {
    (bindings?: any, childCallback? : () => void): any;
}

interface ExpandedCallback {
    setup?: FinchCallback;
    load?: FinchCallback;
    unload?: FinchCallback;
    teardown?: FinchCallback;
}

interface ObserveCallback {
    (...args: any[]): string;
}
interface FinchOptions {
    CoerceParameterTypes?: boolean;
}


interface FinchStatic {
    route(route: string, callback: FinchCallback): void;
    route(route: string, callbacks: ExpandedCallback): void;
    call( uri: string ): void;

    observe(argN: string[], callback: (params: ObserveCallback ) => void): void;
    observe(callback: (params: ObserveCallback) => void): void;
    observe(...args: any[]): void;
    navigate(uri:string, queryParams?:any, doUpdate?:boolean ): void;
    navigate(uri:string, doUpdate:boolean ): void;
    navigate(queryParams:any, doUpdate?:boolean ): void;
    listen(): boolean;
    ignore(): boolean;
    abort(): void;
    options(options: FinchOptions): void;
}


declare var Finch: FinchStatic;
declare module "finch" {
    export = Finch;
}
