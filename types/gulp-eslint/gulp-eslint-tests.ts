import gulp = require('gulp');
import eslint = require('gulp-eslint');

gulp.src(['scripts/*.js'])
    .pipe(eslint())
    .pipe(eslint('configFilePath'))
    .pipe(
        eslint({
            rules: {
                'my-custom-rule': 1,
                strict: 2,
            },
            globals: ['jQuery', '$'],
            envs: ['browser'],
            fix: true,
            quiet: true,
        }),
    )
    .pipe(eslint.failOnError())
    .pipe(eslint.failAfterError())
    .pipe(eslint.formatEach())
    .pipe(eslint.formatEach('compact', process.stderr))
    .pipe(eslint.format())
    .pipe(eslint.format('checkstyle'))
    .pipe(eslint.format('node_modules/eslint-path-formatter'))
    .pipe(eslint.format('junit', process.stdout))
    .pipe(
        eslint.results(results => {
            results; // $ExpectType Results
            results.length; // $ExpectType number
            results.warningCount; // $ExpectType number
            results.errorCount; // $ExpectType number
        }),
    )
    .pipe(
        eslint.result(result => {
            result; // $ExpectType Result
            result.filePath; // $ExpectType string
            result.messages; // $ExpectType string[]
            result.messages.length; // $ExpectType number
            result.warningCount; // $ExpectType number
            result.errorCount; // $ExpectType number
        }),
    );
