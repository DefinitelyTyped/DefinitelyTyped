/// <reference types="node" />

import gulp = require("gulp");

interface IOptions {
    command?: string | undefined;
    latest?: boolean | undefined;
    config?: string | undefined;
    opts?: Object | undefined;
}

declare function tsd(opts?: IOptions, callback?: gulp.TaskCallback): NodeJS.ReadWriteStream;

declare namespace tsd {}

export = tsd;
