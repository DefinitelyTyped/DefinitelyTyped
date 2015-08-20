/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="./gulp-changed.d.ts" />
/// <reference path="../gulp-minify-html/gulp-minify-html.d.ts" />

import * as gulp from "gulp";
import changed = require("gulp-changed");
import minifyHtml = require("gulp-minify-html");

// Without options
gulp.src("*.html")
    .pipe(changed("build"))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));

// Without some options
gulp.src("*.html")
    .pipe(changed("build", { hasChanged: changed.compareSha1Digest }))
    .pipe(minifyHtml())
    .pipe(gulp.dest("build"));
