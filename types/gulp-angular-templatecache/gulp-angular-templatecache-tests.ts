import * as gulp from 'gulp';
import templateCache = require('gulp-angular-templatecache');

gulp.task('templatecache:no-arguments', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache())
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-filename', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache('templates.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-options', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache({
            filename: 'templates.js',
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('templatecache:with-filename-and-options', function () {
    return gulp.src('templates/**/*.html')
        .pipe(templateCache('templates.js', {
            standalone: true,
            module: 'app.templates'
        }))
        .pipe(gulp.dest('public'));
});
