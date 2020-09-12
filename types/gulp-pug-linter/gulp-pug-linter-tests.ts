import gulp = require('gulp');
import * as gulpPugLinter from "gulp-pug-linter";

gulp.task('lint:template', () => (
    gulp
        .src('./**/*.pug')
        .pipe(gulpPugLinter({ reporter: 'default' }))
));
