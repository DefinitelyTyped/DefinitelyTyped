import gulp = require('gulp');
import * as gulpPugLinter from "gulp-pug-linter";

gulp.task('lint:template__default', () => (
    gulp
        .src('./**/*.pug')
        .pipe(gulpPugLinter({ failAfterError: true }))
));

gulp.task('lint:template__reporter', () => (
    gulp
        .src('./**/*.pug')
        .pipe(gulpPugLinter({ reporter: 'default' }))
));
