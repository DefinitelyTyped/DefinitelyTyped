// Type definitions for gulp-autoprefixer
// Project: https://github.com/sindresorhus/gulp-autoprefixer
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


declare namespace autoPrefixer {
    interface Options {
        browsers?: string[];
        cascade?: boolean;
        remove?: boolean;
    }
}

declare function autoPrefixer(opts?: autoPrefixer.Options): NodeJS.ReadWriteStream;

export = autoPrefixer;
