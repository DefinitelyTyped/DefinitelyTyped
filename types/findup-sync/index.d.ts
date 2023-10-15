// Type definitions for findup-sync 4.0
// Project: https://github.com/gulpjs/findup-sync
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Nathan Brown <https://github.com/ngbrown>
//                 BendingBender <https://github.com/BendingBender>
//                 Kotaro Sugawara <https://github.com/kotarella1110>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import micromatch = require("micromatch");

export = findupSync;

/**
 * Find the first file matching a given pattern in the current directory or the nearest ancestor directory.
 *
 * @param patternOrPatterns Glob pattern(s) or file path(s) to match against.
 * @param micromatchOptions Options to pass to [micromatch](https://github.com/jonschlinkert/micromatch).
 * Note that if you want to start in a different directory than the current working directory, specify a `cwd` property here.
 * @returns Returns the first matching file.
 */
declare function findupSync(
    patternOrPatterns: string[] | string,
    micromatchOptions?: micromatch.Options,
): string | null;
