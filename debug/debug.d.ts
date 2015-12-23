// Type definitions for debug
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>, Gal Talmor <https://github.com/galtalmor>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var debug: debug.IDebug;

// Support AMD require
declare module 'debug' {
    export = debug;
}

declare module debug {
    export interface IDebug {
        (namespace: string): debug.IDebugger,
        coerce: (val: any) => any,
        disable: () => void,
        enable: (namespaces: string) => void,
        enabled: (namespaces: string) => boolean,

        names: string[],
        skips: string[],

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
