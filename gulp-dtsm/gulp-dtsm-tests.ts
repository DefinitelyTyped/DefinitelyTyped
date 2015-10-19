/// <reference path="./gulp-dtsm.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import dtsm = require('gulp-dtsm');
import gulp = require('gulp');

var stream: NodeJS.WritableStream = dtsm();

gulp.task('dtsm', () => gulp.src('./dtsm.json').pipe(dtsm()));

