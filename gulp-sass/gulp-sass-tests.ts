/// <reference path="./gulp-sass.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp from "gulp";
import sass = require("gulp-sass");

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