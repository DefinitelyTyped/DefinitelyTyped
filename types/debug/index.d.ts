// Type definitions for debug
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>
//                 Gal Talmor <https://github.com/galtalmor>
//                 John McLaughlin <https://github.com/zamb3zi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var debug: debug.IDebug;

export = debug;
export as namespace debug;

declare namespace debug {
    export interface IDebug {
        (namespace: string): debug.IDebugger,
        coerce: (val: any) => any,
        disable: () => void,
        enable: (namespaces: string) => void,
        enabled: (namespaces: string) => boolean,

        names: RegExp[],
        skips: RegExp[],

        formatters: IFormatters
    }

    export interface IFormatters {
        [formatter: string]: Function
    }

    export interface IDebugger {
        (formatter: any, ...args: any[]): void;

        enabled: boolean;
        log: Function;
        namespace: string;
    }
}
