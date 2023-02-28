// Type definitions for secure-sample 2.0
// Project: https://github.com/emilbayes/secure-sample
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = secureSample;

/**
 * Will return an array with `sampleSize` number of unique samples from the uniform
 * distribution `[0, populationSize)` (`populationSize` exclusive). The samples
 * will be sequential, so you may want to shuffle them.
 *
 * `sampleSize` and `populationSize` must be safe integers. `sampleSize` must not be
 * larger than `populationSize`. If any of these conditions are violated, an error
 * will be thrown.
 *
 * @example
 * import sample = require('secure-sample')
 * import shuffle = require('secure-shuffle')
 *
 * shuffle(sample(3, 10)) // [6, 2, 8]
 */
declare function secureSample(sampleSize: number, populationSize: number): number[];
