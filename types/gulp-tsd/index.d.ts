// Type definitions for gulp-tsd
// Project: https://github.com/moznion/gulp-tsd
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import gulp = require('gulp');

interface IOptions {
    command?: string;
    latest?: boolean;
    config?: string;
    opts?: Object;
}

declare function tsd(opts?: IOptions, callback?: gulp.TaskCallback): NodeJS.ReadWriteStream;

declare namespace tsd { }

export = tsd;
