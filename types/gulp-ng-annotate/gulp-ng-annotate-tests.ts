


import ngAnnotate = require('gulp-ng-annotate');
import gulp = require('gulp');

gulp.task('default', function () {
    return gulp.src('src/app.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
});

ngAnnotate({
    remove: true,
    add: true,
    single_quotes: true
});
