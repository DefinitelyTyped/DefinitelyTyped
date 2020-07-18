import { Options } from '../';
import { Block } from './Node';

/**
 * Parses a string and returns a basic CST (Concrete Syntax Tree).
 *
 * ```js
 * const strip = require('..');
 * const str = strip.block('const foo = "bar";// this is a comment\n /* me too *\/');
 * console.log(str);
 * // => 'const foo = "bar";// this is a comment'
 * ```
 * @param  `input` string from which to strip comments
 * @param  `options` pass `opts.keepProtected: true` to keep ignored comments (e.g. `/*!`)
 */
declare function parse(input: string, options?: Options): Block;

export = parse;
