import gulp = require('gulp');
import * as gulpStylint from "gulp-stylint";

gulp.task('default', () => {
    return gulp.src('src/*.styl')
        .pipe(gulpStylint())
        .pipe(gulpStylint.reporter());
});

gulp.task('default', () => {
    return gulp.src('src/*.styl')
        .pipe(gulpStylint({ config: '.stylintrc' }))
        .pipe(gulpStylint.reporter());
});

gulp.task('default', () => {
    return gulp.src('src/*.styl')
        .pipe(gulpStylint())
        .pipe(gulpStylint.reporter())
        .pipe(gulpStylint.reporter('fail'));
});

gulp.task('default', () => {
    return gulp.src('src/*.styl')
        .pipe(gulpStylint())
        .pipe(gulpStylint.reporter())
        .pipe(gulpStylint.reporter('fail', { failOnWarning: true }));
});
