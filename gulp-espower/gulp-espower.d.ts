// Type definitions for gulp-espower
// Project: https://github.com/power-assert-js/gulp-espower
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-espower" {

    namespace espower {
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

    var espower: espower.Espower;

    export = espower;
}

