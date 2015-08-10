/// <reference path="gulp-debug.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp from 'gulp';
import debug = require('gulp-debug');

gulp.task('default', () =>
    gulp.src('foo.js')
        .pipe(debug({title: 'unicorn:'}))
        .pipe(gulp.dest('dist'))
);


debug();
