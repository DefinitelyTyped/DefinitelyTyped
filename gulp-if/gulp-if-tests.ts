/// <reference path="./gulp-if.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import _if = require("gulp-if");

gulp.src("test.css")
    .pipe(_if(true, gulp.src("test.css")));

gulp.src("test.css")
    .pipe(_if(false, gulp.src("test.css"), gulp.src("test.css")));