/** Tests taken from https://github.com/pgilad/gulp-sort#usage */
/// <reference path="../node/node" />
/// <reference path="../gulp/gulp" />
/// <reference path="gulp-sort" />

import * as gulp from 'gulp';
import * as sort from 'gulp-sort';
import * as gulpUtil from 'gulp-util';

// default sort
gulp.src('./src/js/**/*.js')
    .pipe(sort())
    .pipe(gulp.dest('./build/js'));

// pass in a custom comparator function
gulp.src('./src/js/**/*.js')
    .pipe(sort(customComparator))
    .pipe(gulp.dest('./build/js'));

// sort descending
gulp.src('./src/js/**/*.js')
    .pipe(sort({
        asc: false
    }))
    .pipe(gulp.dest('./build/js'));

// sort with a custom comparator
gulp.src('./src/js/**/*.js')
    .pipe(sort({
        comparator: function(file1, file2) {
            if (file1.path.indexOf('build') > -1) {
                return 1;
            }
            if (file2.path.indexOf('build') > -1) {
                return -1;
            }
            return 0;
        }
    }))
    .pipe(gulp.dest('./build/js'));

function customComparator(file1: gulpUtil.File, file2: gulpUtil.File) {
    if (file1.path.indexOf('build') > -1) {
        return 1;
    }
    if (file2.path.indexOf('build') > -1) {
        return -1;
    }
    return 0;
}
