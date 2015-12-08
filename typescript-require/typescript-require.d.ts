// Type definitions for typescript-require
// Project: https://github.com/theblacksmith/typescript-require
// Definitions by: Louis Grignon <https://github.com/lgrignon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "typescript-require" {
    function TypeScriptRequire(options?: TypeScriptRequireOptions): void;
 
    interface TypeScriptRequireOptions {
        /**
         * If true node.d.ts definitions file is loaded before custom ts files. This is disabled by default and you should use.
         * Default false.
         */
        nodeLib?: boolean;

        /**
         * Target ES5 / ES3 output mode.
         * Default true.
         */
        targetES5?: boolean;

        /**
         * Wether execution should stop on compile error.
         */
        exitOnError?: boolean;
    }

    export = TypeScriptRequire;
}
