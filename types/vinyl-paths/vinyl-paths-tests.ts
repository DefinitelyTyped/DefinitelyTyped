import gulp = require('gulp');
import del = require('del');
import paths = require('vinyl-paths');

gulp.task('delete', function () {
    return gulp.src('app/*')
        .pipe(paths(del));
});

// or if you need to use the paths after the pipeline
gulp.task('delete2', function (cb: Function) {
    var vp = paths();

    gulp.src('app/*')
        .pipe(vp)
        .pipe(gulp.dest('dist'))
        .on('end', function () {
            del(vp.paths);
        });
});


