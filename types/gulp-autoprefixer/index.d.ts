// Type definitions for gulp-autoprefixer
// Project: https://github.com/sindresorhus/gulp-autoprefixer
// Definitions by: Asana <https://asana.com>, Jordy van Dortmont <https://github.com/jordyvandortmont>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>


declare namespace autoPrefixer {
    interface Options {
        env?: string;
        cascade?: boolean;
        add?: boolean;
        remove?: boolean;
        supports?: boolean;
        flexbox?: boolean|"no-2009";
        grid?: false|"autoplace"|"no-autoplace";
        stats?: object;
        browsers?: string[];
        ignoreUnknownVersions?: boolean;
    }
}

declare function autoPrefixer(opts?: autoPrefixer.Options): NodeJS.ReadWriteStream;

export = autoPrefixer;
