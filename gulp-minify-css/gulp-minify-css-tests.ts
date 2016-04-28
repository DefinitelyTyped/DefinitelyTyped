
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from "gulp";
import * as minifyCSS from "gulp-minify-css";

gulp.task("minify-css", () => {
    gulp.src("css/**/*.css")
        .pipe(minifyCSS({ keepBreaks: true }))
        .pipe(gulp.dest("dist"));
});
