/// <reference path="./gulp-uglify.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp from "gulp";
import uglify = require("gulp-uglify");


gulp.task('compress', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('compress2', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(uglify({
            mangle: false,
            preserverComments: "some",
            compress: false,
            output: {
                max_line_len: 300
            }
        }))
        .pipe(gulp.dest('dist'));
});