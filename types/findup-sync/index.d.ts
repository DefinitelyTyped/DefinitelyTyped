// Type definitions for findup-sync 2.0
// Project: https://github.com/gulpjs/findup-sync
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Nathan Brown <https://github.com/ngbrown>
//                 BendingBender <https://github.com/BendingBender>
//                 Kotaro Sugawara <https://github.com/kotarella1110>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import micromatch = require('micromatch');

export = findupSync;

declare function findupSync(
    patternOrPatterns: string[] | string,
    micromatchOptions?: findupSync.Options
): string | null;

declare namespace findupSync {
    interface Options extends micromatch.Options {
        cwd?: string;
    }
}
