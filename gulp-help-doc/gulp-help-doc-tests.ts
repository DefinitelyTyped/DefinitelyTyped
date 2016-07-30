/// <reference path="gulp-help-doc.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import usage = require('gulp-help-doc');

/**
 * Demo task
 *
 * @task {demo}
 * @arg {env} environment
 */
gulp.task('demo', function() {});

let logger: {
    output: string,
    log(msg: string): any
} = {
    output: '',
    log: msg => logger.output += msg + '\n'
};

usage(gulp, {
    logger: logger,
    gulpfile: __filename
}).then(() => console.log(logger.output));
