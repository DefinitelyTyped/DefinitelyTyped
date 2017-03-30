import * as gulp from 'gulp';
import * as tslint from 'gulp-tslint';
import vinyl = require('vinyl');

// Taken from gulp-tslint README https://github.com/panuhorsmalahti/gulp-tslint/blob/master/README.md

gulp.task('tslint', function(){
    return gulp.src('source.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('invalid-noemit', function(){
    return gulp.src('input.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose', {
          emitError: false
        }));
});

gulp.task('invalid-noemit', function(){
    return gulp.src('input.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose', {
          summarizeFailureOutput: true
        }));
});

/* output is in the following form:
 * [{
 *   "name": "invalid.ts",
 *   "failure": "missing whitespace",
 *   // Lines and characters start from 0
 *   "startPosition": {"position": 8, "line": 0, "character": 8},
 *   "endPosition": {"position": 9, "line": 0, "character": 9},
 *   "ruleName": "one-line"
 * }]
 */
const testReporter: tslint.Reporter = function (output, file, options) {
    // file is a reference to the vinyl File object
    console.log("Found " + output.length + " errors in " + file.path);
    // options is a reference to the reporter options, e.g. including the emitError boolean
};

gulp.task('invalid-custom', function(){
    return gulp.src('input.ts')
        .pipe(tslint())
        .pipe(tslint.report(testReporter));
});

gulp.task('tslint-json', function(){
    return gulp.src('input.ts')
        .pipe(tslint({
            configuration: {
              rules: {
                "class-name": true,
                // ...
              }
            }
        }))
        .pipe(tslint.report('prose'));;
});

gulp.task('tslint', function(){
    return gulp.src(['input.ts',])
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            reportLimit: 2
        }));
});


gulp.task('tslint', function(){
    return gulp.src(['input.ts',])
        .pipe(tslint({
            tslint: require('tslint')
        }));
});

const tslintOptions: tslint.Options = {
    configuration: {},
    rulesDirectory: null,
    tslint: null
};

const reportOptions: tslint.ReportOptions = {
    emitError: true,
    reportLimit: 0,
    summarizeFailureOutput: false
};
