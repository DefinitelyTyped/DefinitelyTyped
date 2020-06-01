import gulp = require("gulp");
import sass = require("gulp-sass");

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(sass.sync())
        .pipe(gulp.dest('./css'));
});
