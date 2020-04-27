// Type definitions for picomatch 2.2
// Project: https://github.com/micromatch/picomatch
// Definitions by: Patrick <https://github.com/Patcher56>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.0

import parse = require('./parse');
import constants = require('./constants');

interface PicomatchOptions {
    ignore?: string;
    onResult?: (result: Result) => void;
    onIgnore?: (result: Result) => void;
    onMatch?: (result: Result) => void;
    dot?: boolean;
    windows?: boolean;
    contains?: boolean;
    format?: (input: string) => string;
}

type Matcher = (test: string) => boolean;

interface Result {
    glob: string;
    state: any;
    regex: RegExp;
    posix: boolean;
    input: string;
    output: string;
    match: ReturnType<Picomatch['test']>['match'];
    isMatch: ReturnType<Picomatch['test']>['isMatch'];
}

interface Picomatch {
    /**
     * Creates a matcher function from one or more glob patterns. The
     * returned function takes a string to match as its first argument,
     * and returns true if the string is a match. The returned matcher
     * function also takes a boolean as the second argument that, when true,
     * returns an object with additional information.
     *
     * ```js
     * const picomatch = require('picomatch');
     * // picomatch(glob[, options]);
     *
     * const isMatch = picomatch('*.!(*a)');
     * console.log(isMatch('a.a')); //=> false
     * console.log(isMatch('a.b')); //=> true
     * ```
     * @param glob One or more glob patterns.
     * @return Returns a matcher function.
     * @api public
     */
    (glob: string | string[], options?: PicomatchOptions, returnState?: boolean): Matcher;

    test(
        input: string,
        regex: RegExp,
        options?: PicomatchOptions,
        test?: {},
    ): { isMatch: boolean; match: boolean; output: any };

    matchBase(input: string, glob: RegExp | string, options: {}, posix?: any): boolean;

    isMatch(str: string | string[], patterns: string | string[], options?: {}): boolean;

    parse(pattern: string, options: {}): {};

    scan(input: string, options: {}): {};

    compileRe(
        state: ReturnType<typeof parse>,
        options?: PicomatchOptions,
        returnOutput?: boolean,
        returnState?: boolean,
    ): RegExp;

    makeRe(
        input: string,
        options?: PicomatchOptions,
        returnOutput?: boolean,
        returnState?: boolean,
    ): Picomatch['compileRe'];

    toRegex(source: string | RegExp, options?: { flags?: string; nocase?: boolean; debug?: boolean }): RegExp;

    constants: typeof constants;
}

declare const picomatch: Picomatch;
export = picomatch;
