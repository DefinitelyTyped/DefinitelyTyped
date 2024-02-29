export = matchIt;

/**
 * A safer `String.prototype.match()`/`RegExp.exec()`.
 *
 * @example
 * import matchIt = require("match-it");
 *
 * const re = /(World|Mars)/;
 *
 * console.log(matchIt("Hello World!", re)[1]);
 * // => World
 *
 * console.log(matchIt("Hello Mars!", re)[1]);
 * // => Mars
 *
 * console.log(matchIt("Hello Pluto!", re)[1]);
 * // => undefined
 */
declare function matchIt(input: string, re: RegExp): string[];
