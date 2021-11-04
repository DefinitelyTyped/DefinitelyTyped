import gulpIntercept = require('gulp-intercept');
import gulp = require('gulp');
import Vinyl = require('vinyl');

gulp.task('testTask', () => {
    return gulp.src(['src/*.html'])

        .pipe(gulpIntercept((sourceFile: Vinyl) => {
            console.log(sourceFile.path);
            return sourceFile;
        }))

        .pipe(gulp.dest('dist/'));
});
