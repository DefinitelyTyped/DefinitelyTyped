/// <reference path="./gulp-tslint.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
/// <reference path="../vinyl/vinyl.d.ts"/>
import gulp = require("gulp");
import tslint = require("gulp-tslint");
import vinyl = require("vinyl");

gulp.task('tslint', function(){
    gulp.src('source.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

/* Output is in the following form:
 * [{
 *   "name": "invalid.ts",
 *   "failure": "missing whitespace",
 *   // Lines and characters start from 0
 *   "startPosition": {"position": 8, "line": 0, "character": 8},
 *   "endPosition": {"position": 9, "line": 0, "character": 9},
 *   "ruleName": "one-line"
 * }]
 */
var testReporter = function (output: tslint.Output[], file: vinyl, options: tslint.Options) {
    // file is a reference to the vinyl File object
    console.log("Found " + output.length + " errors in " + file.path);
    // options is a reference to the reporter options, e.g. options.emitError
};

gulp.task('invalid-custom', function(){
    gulp.src('invalid.ts')
        .pipe(tslint())
        .pipe(tslint.report(testReporter));
});

gulp.task('invalid-custom', function () {
    gulp.src('invalid.ts')
        .pipe(tslint())
        .pipe(tslint.report(testReporter, { emitError: false }));
});

gulp.task('tslint-json', function(){
    gulp.src('invalid.ts')
        .pipe(tslint({
            configuration: {
                rules: {
                    "class-name": true
                    // ...
                }
            }
        }))
        .pipe(tslint.report('prose'));;
});

gulp.task("lint", () => {
      return gulp.src(["gulpfile.ts", "{src,test}/**/*.ts"])
          .pipe(tslint())
          .pipe(tslint.report("verbose", {
              emitError: true
          }));
});
