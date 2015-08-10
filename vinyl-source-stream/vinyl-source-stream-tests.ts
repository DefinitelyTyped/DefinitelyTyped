/// <reference path="./vinyl-source-stream.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp from "gulp";
import vinylSourceStream = require("vinyl-source-stream");

gulp.src("test.js")
    .pipe(vinylSourceStream("foo.js"))
    .pipe(gulp.dest("build"));