import gulp = require("gulp");
import gulpSass = require("gulp-sass");

const sass = gulpSass({}); // compiler

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});

gulp.task("sass", function() {
    gulp.src("./scss/*.scss")
        .pipe(sass({ errLogToConsole: true }))
        .pipe(sass.sync())
        .pipe(gulp.dest("./css"));
});
