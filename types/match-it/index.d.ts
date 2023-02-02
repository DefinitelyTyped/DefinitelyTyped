// Type definitions for match-it 1.0
// Project: https://github.com/IonicaBizau/match-it#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
