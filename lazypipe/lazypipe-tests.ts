/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../gulp-minify-html/gulp-minify-html.d.ts" />
/// <reference path="../gulp-size/gulp-size.d.ts" />
/// <reference path="./lazypipe.d.ts" />

import * as gulp from "gulp";
import minifyHtml = require("gulp-minify-html");
import size = require("gulp-size");
import lazypipe = require("lazypipe");

const pipeline = lazypipe()
    .pipe(size)
    .pipe(minifyHtml, {})
    .pipe(size);

gulp.src("*.html")
    .pipe(pipeline())
    .pipe(gulp.dest("build"));
