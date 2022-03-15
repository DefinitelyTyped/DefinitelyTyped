// Type definitions for envhandlebars 1.4
// Project: https://github.com/cgmartin/envhandlebars#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="Node" />
import H = require('handlebars');

/**
 * A simple templating utility, akin to envsubst, but using Handlebars for more complex logic.
 */
declare function envhandlebars(opts?: envhandlebars.Options, cb?: envhandlebars.EnvHandlebarsCallback): void;
declare function envhandlebars(cb?: envhandlebars.EnvHandlebarsCallback): void;

declare namespace envhandlebars {
    interface Options {
        /** @default process.env */
        env?: typeof process.env | undefined;
        /** @default process.exit */
        exit?: typeof process.exit | undefined;
        /** @default process.stdin */
        stdin?: typeof process.stdin | undefined;
        /** @default process.stdout */
        stout?: typeof process.stdout | undefined;
        /** @default process.stderr */
        stderr?: typeof process.stderr | undefined;
        /** @default true */
        arraysEnabled?: boolean | undefined;
        /** @default false */
        arrayVarPrefix?: boolean | undefined;
        /**
         * Custom Mustache helpers and partials can be implemented by extending the envhandlebars module
         * with your own Node.js wrapper script
         */
        extendHandlebars?: ExtendHandlebarsFunc | undefined;
    }

    type ExtendHandlebarsFunc = (Handlebars: typeof H) => void;

    type EnvHandlebarsCallback = (err?: Error) => void;
}

export = envhandlebars;
