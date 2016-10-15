/// <reference path="./gulp-dtsm.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as dtsm from 'gulp-dtsm';
import * as gulp from 'gulp';

var stream: NodeJS.WritableStream = dtsm();

gulp.task('dtsm', () => gulp.src('./dtsm.json').pipe(dtsm()));
