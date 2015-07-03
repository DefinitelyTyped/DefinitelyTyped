/// <reference path="gulp-if.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
/// <reference path="../gulp-uglify/gulp-uglify.d.ts"/>

import gulp = require("gulp");
import _if = require("gulp-if");
import uglify = require("gulp-uglify");

gulp.src("test.css")
    .pipe(_if(true, gulp.src("test.css")));

gulp.src("test.css")
    .pipe(_if(false, gulp.src("test.css"), gulp.src("test.css")));

gulp.src("index.html")
    .pipe(_if('*.js', uglify()));
