/// <reference path="./gulp-tsd.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require("gulp");
import tsd = require("gulp-tsd");

gulp.task("tsd", () => {
    gulp.src("gulp_tsd.json")
        .pipe(tsd());
});

gulp.task("tsd:options", (callback: any) => {
    tsd({
        command: "reinstall",
        config: "tsd.json"
    }, callback);
});
