/**
 * Each instance keeps track of renamed variables to check for collisions and
 * to provide a mapping of changed names.
 *
 * @classdesc Shorten lengthy CSS variable names
 */
declare class ShortCssVars {
    constructor(options?: ShortCssVars.Options);

    /**
     * Shortens the name part of a variable string
     * @param varName - Variable name including -- prefix
     * @returns short
     */
    replaceName(varName: string): string;

    /**
     * Shortens the names of variables throughout CSS
     * @param css - Text containing CSS variables
     * @returns shortened CSS
     */
    replaceCss(css: string): string;

    /**
     * Get a mapping of original names to shortened names
     *
     * @example
     * {
     *   'long-variable-name-that-defines-a-particular-color': '1vf2dsn'
     * }
     * @returns map
     */
    getMap(): {
        [name: string]: string;
    };
}

declare namespace ShortCssVars {
    /**
     * Optional configurations
     */
    interface Options {
        /**
         * Custom formatter
         */
        formatter?: CustomFormatter | undefined;
        /**
         * Rule to ignore certain variable names
         */
        ignore?: IgnoreType | undefined;
    }

    interface CustomFormatter {
        /**
         * Returns a unique hash for a string name.
         *
         * @param name - Variable name
         * @returns encoded hash
         */
        (name: string): string;
    }

    interface CustomIgnore {
        (name: string): boolean;
    }

    type IgnoreType = RegExp | string | CustomIgnore;
}

export = ShortCssVars;
