import gulp = require('gulp');
import muxml = require('gulp-muxml');

gulp.task('default', () => {
    return gulp
        .src('src/*')
        .pipe(muxml({ strict: true }))
        .pipe(gulp.dest('dist'));
});
