// Type definitions for get-sass-vars 3.0
// Project: https://github.com/niksy/get-sass-vars#readme
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Options } from "sass";

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
        camelize?: boolean;

        /**
         * The options to pass to `sass`.
         */
        sassOptions?: Options;
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
