/// <reference path="./gulp-minify-css.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp from "gulp";
import minifyCSS = require("gulp-minify-css");

gulp.task("minify-css", () => {
    gulp.src("css/**/*.css")
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(gulp.dest("dist"));
});
