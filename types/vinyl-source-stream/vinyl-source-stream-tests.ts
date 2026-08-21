import gulp = require("gulp");
import vinylSourceStream = require("vinyl-source-stream");

gulp.src("test.js")
    .pipe(vinylSourceStream("foo.js"))
    .pipe(gulp.dest("build"));
