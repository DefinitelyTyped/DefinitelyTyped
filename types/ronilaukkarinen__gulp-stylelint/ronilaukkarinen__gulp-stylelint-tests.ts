import gulp = require('gulp');
import gulpStylelint = require('@ronilaukkarinen/gulp-stylelint');

gulp.task('lint-css', function lintCssTask() {
    return gulp.src('src/**/*.css').pipe(
        gulpStylelint({
            failAfterError: true,
            reportOutputDir: 'reports/lint',
            reporters: [
                { formatter: 'verbose', console: true },
                { formatter: 'json', save: 'report.json' },
            ],
            debug: true,
            fix: true,
        }),
    );
});

gulpStylelint.formatters; // $ExpectType Record<string, Formatter>
