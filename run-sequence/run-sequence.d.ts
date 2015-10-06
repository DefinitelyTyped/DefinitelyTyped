// Type definitions for run-sequence
// Project: https://github.com/OverZealous/run-sequence
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

declare module "run-sequence" {
    import gulp = require('gulp');

    interface IRunSequence {
        (...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream;

        use(gulp: gulp.Gulp): IRunSequence;
    }

    var _tmp: IRunSequence;
    export = _tmp;
}
