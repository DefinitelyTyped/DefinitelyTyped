// Type definitions for debug 1.0
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>
//                 Gal Talmor <https://github.com/galtalmor>
//                 John McLaughlin <https://github.com/zamb3zi>
//                 Waiting Song <https://github.com/waitingsong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export declare const debug: IDebug;

export interface IDebug {
    (namespace: string): IDebugger,
    coerce: (val: any) => any,
    disable: () => void,
    enable: (namespaces: string) => void,
    enabled: (namespaces: string) => boolean,

    names: RegExp[],
    skips: RegExp[],

    formatters: IFormatters
}

export interface IFormatters {
    [formatter: string]: (src: any) => any
}

export interface IDebugger {
    (formatter: any, ...args: any[]): void;

    enabled: boolean;
    log: Function;
    namespace: string;
}
