// Type definitions for gulp-tsd
// Project: https://github.com/moznion/gulp-tsd
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

declare module "gulp-tsd" {
    import gulp = require('gulp');

    interface IOptions {
        command?: string;
        latest?: boolean;
        config?: string;
        opts?: Object;
    }

    function tsd(opts?: IOptions, callback?: gulp.ITaskCallback): NodeJS.ReadWriteStream;

    export = tsd;
}
