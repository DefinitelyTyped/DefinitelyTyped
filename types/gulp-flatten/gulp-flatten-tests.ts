import * as gulp from "gulp";
import flatten = require("gulp-flatten");

gulp.task("flatten:simple", () => {
    gulp.src(["files/**/*.txt"])
        .pipe(flatten())
        .pipe(gulp.dest("build"));
});

gulp.task("flatten:newPath", () => {
    gulp.src(["files/**/*.txt"])
        .pipe(flatten({ newPath: "new/path" }))
        .pipe(gulp.dest("build"));
});
