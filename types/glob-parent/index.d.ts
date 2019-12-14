// Type definitions for glob-parent 5.1
// Project: https://github.com/gulpjs/glob-parent
// Definitions by: mrmlnc <https://github.com/mrmlnc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function globParent(pattern: string, options?: globParent.Options): string;

declare namespace globParent {
    interface Options {
        flipBackslashes?: boolean;
    }
}

export = globParent;
