


import gulp = require("gulp");
import * as concat from "gulp-concat";

gulp.task("concat:simple", () => {
    gulp.src(["file*.txt"])
        .pipe(concat("file.txt"))
        .pipe(gulp.dest("build"));
});

gulp.task("concat:newLine", () => {
    gulp.src(["file*.txt"])
        .pipe(concat("file.txt", { newLine: ";" }))
        .pipe(gulp.dest("build"));
});

gulp.task("concat:vinyl", () => {
    gulp.src(["file*.txt"])
        .pipe(concat({ path: "file.txt", stat: { mode: parseInt("0666", 8) } }))
        .pipe(gulp.dest("build"));
});
