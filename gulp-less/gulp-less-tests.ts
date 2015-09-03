/// <reference path="./gulp-less.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require("gulp");
import less = require("gulp-less");

gulp.task("less", () => {
    gulp.src("less/**/*.less")
        .pipe(less({
            paths: ["less/includes"]
        }))
        .pipe(gulp.dest("public/css"));
});
