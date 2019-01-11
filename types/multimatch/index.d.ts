// Type definitions for multimatch 2.1
// Project: https://github.com/sindresorhus/multimatch
// Definitions by: Stephen Lautier <https://github.com/stephenlautier>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IOptions } from 'minimatch';

/**
 * Match utility function which supports multiple pattern globbing.
 *
 * @param paths paths to match against.
 * @param patterns globbing patterns to use. e.g. `[*, "!cake"]`.
 */
declare function multimatch(
    paths: string | string[],
    patterns: string | string[],
    options?: multimatch.MultimatchOptions
): string[];

declare namespace multimatch {
    type MultimatchOptions = IOptions;
}

export = multimatch;
