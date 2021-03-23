import constantsImport = require('./constants');
import parseImport = require('./parse');
import scanImport = require('./scan');
import { PicomatchOptions as PicomatchOptionsImport } from './picomatch-options';

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
declare function picomatch(
    glob: string | string[],
    options?: picomatch.PicomatchOptions,
    returnState?: boolean
): picomatch.Matcher;

declare namespace picomatch {
    interface Matcher {
        (test: string): boolean;
    }

    type PicomatchOptions = PicomatchOptionsImport;

    function test(
        input: string,
        regex: RegExp,
        options?: PicomatchOptions,
        test?: {},
    ): { isMatch: boolean; match?: boolean | RegExpExecArray | null; output: string };

    function matchBase(input: string, glob: RegExp | string, options?: {}, posix?: any): boolean;

    function isMatch(str: string | string[], patterns: string | string[], options?: {}): boolean;

    function parse(pattern: string[], options?: {}): Array<ReturnType<typeof parseImport>>;
    function parse(pattern: string, options?: {}): ReturnType<typeof parseImport>;
    function parse(pattern: string | string[], options?: {}): ReturnType<typeof parseImport> | Array<ReturnType<typeof parseImport>>;

    const scan: typeof scanImport;

    function compileRe(
        state: ReturnType<typeof parseImport>,
        options?: PicomatchOptions,
        returnOutput?: boolean,
        returnState?: boolean,
    ): RegExp;

    function makeRe(
        input: string,
        options?: PicomatchOptions,
        returnOutput?: boolean,
        returnState?: boolean,
    ): typeof compileRe;

    function toRegex(source: string | RegExp, options?: { flags?: string; nocase?: boolean; debug?: boolean }): RegExp;

    const constants: typeof constantsImport;
}

export = picomatch;
