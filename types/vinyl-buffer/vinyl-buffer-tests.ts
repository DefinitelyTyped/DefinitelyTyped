import buffer = require('vinyl-buffer');
import gulp = require('gulp')
import browserify = require('browserify');

gulp.task('build', function() {
    return browserify('./index.js')
        .bundle()
        .pipe(buffer())
        .pipe(gulp.dest('dist/'));
});
