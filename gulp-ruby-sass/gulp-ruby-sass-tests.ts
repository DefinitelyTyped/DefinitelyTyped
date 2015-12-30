/// <reference path="./gulp-ruby-sass.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import * as gulp from "gulp";
import * as sass from "gulp-ruby-sass";

gulp.task('sass', function () {
    sass('./scss/*.scss')
        .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
    sass('./scss/', {verbose: true, style: 'compact'})
        .pipe(gulp.dest('./css'));
});
