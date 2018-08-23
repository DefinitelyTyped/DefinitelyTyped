import gulp = require('gulp');
import gulpPugI18n = require('gulp-pug-i18n');

const options = {
    i18n: { locales: 'locales/*.json' }
};

gulp.task('build', () => {
    return gulp.src('views/*.pug')
        .pipe(gulpPugI18n(options))
        .pipe(gulp.dest('dist'));
});
