import gulp = require('gulp');
import cond = require('gulp-cond');
import gzip = require('gulp-gzip');

gulp.task('build', () => {
    gulp.src('src')
        .pipe(cond(true, gzip, gzip))
        .pipe(cond(true, gzip))
        .pipe(cond(true, gzip(), gzip()))
        .pipe(cond(true, gzip()))
        .pipe(gulp.dest('dest'));
});
