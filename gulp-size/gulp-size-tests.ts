/// <reference path="gulp-size.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../gulp-debug/gulp-debug.d.ts" />

import gulp = require('gulp');
import size = require('gulp-size');
import debug = require('gulp-debug');

gulp.task('default', () =>
    gulp.src('fixture.js')
        .pipe(size())
        .pipe(gulp.dest('dist'))
);


gulp.task('default', () => {
    var s = size();

    return gulp.src('fixture.js')
        .pipe(s)
        .pipe(gulp.dest('dist'))
        .pipe(debug({title: 'Total size ' + s.prettySize}));
});


size();
size({showFiles: true, gzip: true});
