// Type definitions for secure-random-double 1.0
// Project: https://github.com/emilbayes/secure-random-double
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = secureRandomDouble;

/**
 * Generate doubles (`number`) in the range `[0, 1)`, with all points being equidistant and unbiased.
 *
 * @example
 * import double = require('secure-random-double')
 *
 * const n = double()
 */
declare function secureRandomDouble(): number;

declare namespace secureRandomDouble {
    /** Number of representable points. */
    const POINTS: 4503599627370496n;
    /** The basis representation of `1`. */
    const BASE: 10000000000000000000000000000000000000000000000000000n;
    /** Distance between consecutive points. */
    const DISTANCE: 2220446049250313080847263336181640625n;
}
