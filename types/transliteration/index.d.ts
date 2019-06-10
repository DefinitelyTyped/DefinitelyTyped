// Type definitions for transliteration 1.6
// Project: https://github.com/dzcpy/transliteration
// Definitions by: Anthony Trinh <https://github.com/tony19>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function transliterate(str: string, options?: transliterate.Options): string;

export namespace transliterate {
    /**
     * Bind options globally so any following calls will be using
     * optionsObj by default. If optionsObj argument is omitted,
     * it will return current default option object.
     */
    function config(optionsObj?: Options): Options;

    interface Options {
        /**
         * Unicode characters that are not in the database will be replaced with `unknown`
         * default: "[?]"
         */
        unknown?: string;

        /**
         * Custom replacement of the strings before transliteration
         */
        replace?: string[][] |  {[source: string]: string};

        /**
         * Strings in the ignore list will be bypassed from transliteration
         */
        ignore?: string[];
    }
}

export function slugify(str: string, options?: slugify.Options): string;

export namespace slugify {
    /**
     * Bind options globally so any following calls will be using
     * optionsObj by default. If optionsObj argument is omitted,
     * it will return current default option object.
     */
    function config(optionsObj?: Options): Options;

    interface Options {
        /**
         * Whether to force slugs to be lowercased
         * default: true
         */
        lowercase?: boolean;

        /**
         * Separator of the slug
         * default: "-"
         */
        separator?: string;

        /**
         * Custom replacement of the strings before transliteration
         */
        replace?: string[][] |  {[source: string]: string};

        /**
         * Strings in the ignore list will be bypassed from transliteration
         */
        ignore?: string[];
    }
}
