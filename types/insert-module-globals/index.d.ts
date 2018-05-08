// Type definitions for insert-module-globals 7.0
// Project: https://github.com/substack/insert-module-globals
// Definitions by: Leonard Thieu <https://github.com/leonard-thieu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

export = InsertModuleGlobals;

interface InsertModuleGlobals {
    /**
     * Return a transform stream inserter for the filename file that will accept a javascript file as input and
     * will output the file with a closure around the contents as necessary to define extra builtins.
     */
    (file: string, opts?: InsertModuleGlobals.Options): stream.Transform;

    /**
     * Defaults
     */
    readonly vars: {
        process(file: string): string;
        global(): string;
        'Buffer.isBuffer'(file: string): string;
        Buffer(): string;
        __filename(file: string, basedir: string): string;
        __dirname(file: string, basedir: string): string;
    };
}

declare const InsertModuleGlobals: InsertModuleGlobals;

declare namespace InsertModuleGlobals {
    interface Options {
        /**
         * When opts.always is true, wrap every file with all the global variables without parsing.
         * This is handy because parsing the scope can take a long time, so you can prioritize fast builds over saving bytes in the final output.
         * When opts.always is truthy but not true, avoid parsing but perform a quick test to determine if wrapping should be skipped.
         */
        always?: boolean;
        /**
         * Use opts.vars to override the default inserted variables, or set opts.vars[name] to undefined to not insert a variable which would otherwise be inserted.
         *
         * opts.vars properties with a . in their name will be executed instead of the parent object if ONLY that property is used.
         * For example, "Buffer.isBuffer" will mask "Buffer" only when there is a Buffer.isBuffer() call in a file and no other references to Buffer.
         */
        vars?: VarsOption;
        /**
         * If opts.debug is true, an inline source map will be generated to compensate for the extra lines.
         */
        debug?: boolean;
        basedir?: string;
    }

    interface VarsOption {
        [name: string]: InsertFunction | undefined;
    }

    type InsertFunction = (file: string, basedir: string) => VariableConfig | string;

    interface VariableConfig {
        id: string;
        source: string;
        suffix?: string;
    }
}
