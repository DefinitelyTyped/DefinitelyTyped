/// <reference path="gulp-filter.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../gulp-uglify/gulp-uglify.d.ts" />
/// <reference path="../gulp-less/gulp-less.d.ts" />
/// <reference path="../gulp-concat/gulp-concat.d.ts" />

import * as gulp from 'gulp';
import * as uglify from 'gulp-uglify';
import * as less from 'gulp-less';
import * as concat from 'gulp-concat';
import * as filter from 'gulp-filter';

// Filter only
gulp.task('default', () => {
    // create filter instance inside task function
    const f = filter(['*', '!src/vendor']);

    return gulp.src('src/*.js')
        // filter a subset of the files
        .pipe(f)
        // run them through a plugin
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Restoring filtered files
gulp.task('default', () => {
    // create filter instance inside task function
    const f = filter(['*', '!src/vendor'], {restore: true});

    return gulp.src('src/*.js')
        // filter a subset of the files
        .pipe(f)
        // run them through a plugin
        .pipe(uglify())
        // bring back the previously filtered out files (optional)
        .pipe(f.restore)
        .pipe(gulp.dest('dist'));
});

// Multiple filters
gulp.task('default', () => {
    const jsFilter = filter('**/*.js', {restore: true});
    const lessFilter = filter('**/*.less', {restore: true});

    return gulp.src('assets/**')
        .pipe(jsFilter)
        .pipe(concat('bundle.js'))
        .pipe(jsFilter.restore)
        .pipe(lessFilter)
        .pipe(less())
        .pipe(lessFilter.restore)
        .pipe(gulp.dest('out/'));
});

// Restore as a file source
gulp.task('default', () => {
    const f = filter(['*', '!src/vendor'], {restore: true, passthrough: false});

    const stream = gulp.src('src/*.js')
        // filter a subset of the files
        .pipe(f)
        // run them through a plugin
        .pipe(uglify())
        .pipe(gulp.dest('dist'));

    // use filtered files as a gulp file source
    f.restore.pipe(gulp.dest('vendor-dist'));

    return stream;
});
