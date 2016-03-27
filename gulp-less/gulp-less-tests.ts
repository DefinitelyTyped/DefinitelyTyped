/// <reference path="./gulp-less.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from "gulp";
import * as less from "gulp-less";

// Without options
gulp.task("less", () => {
    gulp.src("less/**/*.less")
        .pipe(less())
        .pipe(gulp.dest("public/css"));
});

// With an empty option object
gulp.task("less", () => {
    gulp.src("less/**/*.less")
        .pipe(less({}))
        .pipe(gulp.dest("public/css"));
});


// With some options
gulp.task("less", () => {
    gulp.src("less/**/*.less")
        .pipe(less({
            paths: ["less/includes"]
        }))
        .pipe(gulp.dest("public/css"));
});
