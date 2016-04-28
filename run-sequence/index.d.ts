// Type definitions for run-sequence
// Project: https://github.com/OverZealous/run-sequence
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

import gulp = require('gulp');

interface IRunSequence {
    (...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream;

    use(gulp: gulp.Gulp): IRunSequence;
}

declare var _tmp: IRunSequence;
export = _tmp;
