import gulp = require("gulp");
import sass = require("gulp-dart-sass");

const sassTask = () => {
    gulp.src("./scss/*.scss")
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest("./css"));
};

exports.sass = gulp.series(sassTask);
