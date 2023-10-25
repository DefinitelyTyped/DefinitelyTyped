/// <reference types="node" />

import { LegacyOptions as Options } from "sass";

declare namespace sassVars {
    /**
     * Provides options for the `get-sass-vars`-module.
     */
    interface SassVarsOptions {
        /**
         * A value indicating whether first-level object-keys in the resulting object should be camelized.
         *
         * If enabled, the leading `$` will be removed and variable-names will be camelized (e.g. $foo-bar will become fooBar).
         */
        camelize?: boolean | undefined;

        /**
         * The options to pass to `sass`.
         */
        sassOptions?: Options<"sync"> | undefined;
    }
}

/**
 * Resolves the variables from the specified `sass`-code.
 *
 * @param data
 * The source-code to process.
 *
 * @param options
 * The options for resolving the variables.
 */
declare function sassVars(data: string, options?: sassVars.SassVarsOptions): Promise<Record<string, unknown>>;

export = sassVars;
