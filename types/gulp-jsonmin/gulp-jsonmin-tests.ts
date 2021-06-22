import gulp = require('gulp');
import gulpJsonmin = require('gulp-jsonmin');

gulp.task('build', () => {
    return gulp.src('*.json')
        .pipe(gulpJsonmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp.src('*.json')
        .pipe(gulpJsonmin({ verbose: true }))
        .pipe(gulp.dest('dist'));
});
