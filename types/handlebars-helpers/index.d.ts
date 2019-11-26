// Type definitions for handlebars-helpers 0.5
// Project: http://assemble.io/helpers/, https://github.com/helpers/handlebars-helpers
// Definitions by: Toilal <https://github.com/Toilal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Handlebars from 'handlebars';

declare function helpers(groups?: helpers.Options | string | string[], options?: helpers.Options): { [name: string]: Handlebars.HelperDelegate };

interface Utils {
    /**
     * Returns true if the given value contains the given
     * `object`, optionally passing a starting index.
     */
    contains<T>(val: T[], obj: T, start: number): boolean;

    /**
     * Remove leading and trailing whitespace and non-word
     * characters from the given string.
     */
    chop(str: string): string;

    /**
     * Change casing on the given `string`, optionally
     * passing a delimiter to use between words in the
     * returned string.
     *
     * ```handlebars
     * utils.changecase('fooBarBaz');
     * //=> 'foo bar baz'
     *
     * utils.changecase('fooBarBaz' '-');
     * //=> 'foo-bar-baz'
     * ```
     */
    changecase(str: string, fn: (str: string) => string): string;
}

declare namespace helpers {
    interface Options {
        handlebars?: typeof Handlebars;
        hbs?: typeof Handlebars;
    }

    const utils: Utils;
}

export = helpers;
