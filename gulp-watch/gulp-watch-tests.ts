/// <reference path="gulp-watch.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import watch = require('gulp-watch');

gulp.task('stream', () =>
    gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(gulp.dest('build'))
);

gulp.task('callback', (cb) =>
    watch('css/**/*.css', () =>
        gulp.src('css/**/*.css')
            .pipe(watch('css/**/*.css'))
            .on('end', cb)
    )
);
