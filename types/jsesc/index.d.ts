// Type definitions for jsesc 0.4.3
// Project: https://github.com/mathiasbynens/jsesc
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function jsesc(str: string, opts?: any): string;

declare namespace jsesc {
    var version: string;

    interface Opts {
        quotes?: string;
        wrap?: boolean;
        es6?: boolean;
        escapeEverything?: boolean;
        compact?: boolean;
        indent?: string;
        json?: boolean;
    }
}

export = jsesc;
