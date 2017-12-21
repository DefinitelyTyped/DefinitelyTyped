// Type definitions for is-glob 4.0
// Project: https://github.com/jonschlinkert/is-glob
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function isGlob(pattern?: string | string[] | null, options?: isGlob.Options): boolean;

declare namespace isGlob {
    interface Options {
        /**
         * When `false` the behavior is less strict in determining if a pattern is a glob. Meaning that some patterns
         * that would return false may return true. This is done so that matching libraries like micromatch
         * have a chance at determining if the pattern is a glob or not.
         */
        strict?: boolean;
    }
}

export = isGlob;
