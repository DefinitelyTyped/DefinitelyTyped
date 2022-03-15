// Type definitions for gulp-pug-linter 1.4
// Project: https://github.com/ilyakam/gulp-pug-linter
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpPugLinter {
    (options?: GulpPugLinter.Options): NodeJS.ReadWriteStream;
}

declare namespace GulpPugLinter {
    interface Options {
        reporter?: any;
        failAfterError?: boolean | undefined;
    }
}

declare var gulpPugLinter: GulpPugLinter;
export = gulpPugLinter;
