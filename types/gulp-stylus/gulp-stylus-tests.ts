import * as gulp from 'gulp';
import stylus = require('gulp-stylus');

gulp.task('styles1', () => {
    return gulp.src('./css/one.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css/build'));
});

gulp.task('styles2', () => {
    return gulp.src('./css/compressed.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./css/build'));
});

gulp.task('styles3', () => {
    return gulp.src('./css/*.styl')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(gulp.dest('./'));
});

const data = {red: '#ff0000'};
gulp.task('styles4', () => {
    gulp.src('./sty/main.styl')
        .pipe(stylus({ rawDefine: { data }}))
        .pipe(gulp.dest('./css/build'));
});
