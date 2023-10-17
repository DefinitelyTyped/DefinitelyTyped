/// <reference types="node" />

import gulp = require("gulp");

interface IRunSequence {
    (...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream;

    use(gulp: gulp.Gulp): IRunSequence;
}

declare var _tmp: IRunSequence;
export = _tmp;
