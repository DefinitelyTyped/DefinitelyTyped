/// <reference path="gulp-debug.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as debug from 'gulp-debug';

gulp.task('default', () =>
    gulp.src('foo.js')
        .pipe(debug({title: 'unicorn:'}))
        .pipe(gulp.dest('dist'))
);


debug();
