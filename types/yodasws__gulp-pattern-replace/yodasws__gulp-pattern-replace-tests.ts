import gulp = require("gulp");
import _replacePattern = require("@yodasws/gulp-pattern-replace");

gulp.src("test.css")
    .pipe(_replacePattern("\r\n", "\n"));

gulp.src("test.css")
    .pipe(_replacePattern(/\s+/, " "));

gulp.src("test.css")
    .pipe(_replacePattern(/\s+/, (match) => match.length.toFixed()));

gulp.src("test.css")
    .pipe(_replacePattern({ pattern: /\s+/, replacement: " " }));

gulp.src("test.css")
    .pipe(_replacePattern({ pattern: "\r\n" }, "\n"));
