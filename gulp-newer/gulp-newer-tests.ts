/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../gulp-minify-html/gulp-minify-html.d.ts" />
/// <reference path="./gulp-newer.d.ts" />

import * as gulp from "gulp";
import newer = require("gulp-newer");
import minifyHtml = require("gulp-minify-html");

gulp.src("*.html")
    .pipe(newer("build"))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));

gulp.src("*.html")
    .pipe(newer({ dest: "build" }))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));
