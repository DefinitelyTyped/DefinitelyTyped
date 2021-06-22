import gulp = require('gulp');
import gulpPugI18n = require('gulp-pug-i18n');

gulp.task('build', () => {
    return gulp.src('*.pug')
        .pipe(gulpPugI18n({
            i18n: { locales: 'locales/*.json' }
        }))
        .pipe(gulp.dest('dist'));
});
