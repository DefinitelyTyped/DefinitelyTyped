import gulp = require('gulp');
import lesshint = require('gulp-lesshint');

gulp.task('lint', () => {
    return gulp
        .src('./src/*.less')
        .pipe(
            lesshint({ configPath: './path', maxWarnings: 1 })
                .on('data', file => {
                    file.lesshint.success; // $ExpectType boolean
                    file.lesshint.resultCount; // $ExpectType number
                    file.lesshint.results.column; // $ExpectType number
                })
                .on('end', () => {}),
        )
        .pipe(lesshint.reporter('reporter-name')) // Leave empty to use the default, "stylish"
        .pipe(lesshint.failOnError()) // Use this to fail the task on lint errors
        .pipe(lesshint.failOnWarning()); // Use this to fail the task on lint warnings
});
