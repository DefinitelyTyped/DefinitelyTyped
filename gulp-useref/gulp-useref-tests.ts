/// <reference path="gulp-useref.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../gulp-if/gulp-if.d.ts" />
/// <reference path="../gulp-uglify/gulp-uglify.d.ts" />
/// <reference path="../gulp-minify-css/gulp-minify-css.d.ts" />
/// <reference path="../gulp-sourcemaps/gulp-sourcemaps.d.ts" />
/// <reference path="../lazypipe/lazypipe.d.ts" />
/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp-typescript/gulp-typescript.d.ts" />

import * as gulp from 'gulp';
import * as useref from 'gulp-useref';

// Usage
gulp.task('default', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function () {
    return gulp.src('app/*.html')
        .pipe(useref({ searchPath: '.tmp' }))
        .pipe(gulp.dest('dist'));
});

import * as gulpif from 'gulp-if';
import uglify = require('gulp-uglify');
import minifyCss = require('gulp-minify-css');

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});


// Transform Streams
import * as sourcemaps from 'gulp-sourcemaps';
import lazypipe = require('lazypipe');

gulp.task('default', function () {
    return gulp.src('index.html')
        .pipe(useref({}, lazypipe().pipe(sourcemaps.init, { loadMaps: true })()))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist'));
});


// options.additionalStreams
import * as ts from 'gulp-typescript';

// create stream of virtual files
var tsStream = gulp.src('src/**/*.ts')
        .pipe(ts());

gulp.task('default', function () {
    // use gulp-useref normally
    return gulp.src('src/index.html')
        .pipe(useref({ additionalStreams: [tsStream] }))
        .pipe(gulp.dest('dist'));
});


// options.transformPath
gulp.task('default', function () {
    return gulp.src('app/*.html')
        .pipe(useref({
            transformPath: function(filePath) {
                return filePath.replace('/rootpath','')
            }
        }))
        .pipe(gulp.dest('dist'));
});
