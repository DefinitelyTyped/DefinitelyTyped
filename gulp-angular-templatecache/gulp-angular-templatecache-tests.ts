/// <reference path="../gulp/gulp.d.ts"/>
/// <reference path="../gulp-angular-templatecache/gulp-angular-templatecache.d.ts"/>

import * as gulp from 'gulp';
import * as templateCache from 'gulp-angular-templatecache';

gulp.task('templatecache:no-arguments', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-filename', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache('templates.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-options', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache({
            filename: 'templates.js',
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-filename-and-options', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache('templates.js', {
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest('public'));
});