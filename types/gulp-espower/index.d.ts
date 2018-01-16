// Type definitions for gulp-espower
// Project: https://github.com/power-assert-js/gulp-espower
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



declare namespace espower {
    interface Espower {
        /**
         * @param options Target patterns for power assert feature instrumentation.
         */
        (options?: Options): NodeJS.ReadWriteStream;
    }

    interface Options {
        patterns: string[];
    }
}

declare var espower: espower.Espower;

export = espower;
