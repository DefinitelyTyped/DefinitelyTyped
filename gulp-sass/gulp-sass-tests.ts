/// <reference path="./gulp-sass.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import * as sass from "gulp-sass"; 

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('./css'));
});