// Type definitions for debug 4.1
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>
//                 Gal Talmor <https://github.com/galtalmor>
//                 John McLaughlin <https://github.com/zamb3zi>
//                 Brasten Sager <https://github.com/brasten>
//                 Nicolas Penin <https://github.com/npenin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var debug: debug.IDebug & {debug: debug.IDebug, default: debug.IDebug};

export = debug;
export as namespace debug;

declare namespace debug {
    interface Debug {
        (namespace: string): debug.Debugger;
        coerce: (val: any) => any;
        disable: () => void;
        enable: (namespaces: string) => void;
        enabled: (namespaces: string) => boolean;

        names: RegExp[];
        skips: RegExp[];

        formatters: Formatters;
    }

    interface Formatters {
        [formatter: string]: (v:Object)=>string;
    }

    interface Debugger {
        (formatter: any, ...args: any[]): void;

        enabled: boolean;
        log: Function;
        namespace: string;
        extend: (namespace: string, delimiter?: string) => debug.Debugger;
    }
}
