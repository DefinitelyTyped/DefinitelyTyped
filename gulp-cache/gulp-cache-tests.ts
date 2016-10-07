/// <reference path="gulp-cache.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as fs from "fs";
import * as gulp from "gulp";
import * as cache from "gulp-cache";
import File = require("vinyl");

// Some gulp plugin
let jshint: any;

gulp.task('lint', function () {
    gulp.src('./non/existent/path/*.js')
        .pipe(cache(jshint('.jshintrc'), {
            key: makeHashKey,
            success: function (jshintedFile) {
                return jshintedFile.jshint.success;
            },
            value: function (jshintedFile) {
                return {
                    jshint: jshintedFile.jshint
                };
            }
        }))
        .pipe(jshint.reporter('default'));
});

var jsHintVersion = '2.4.1',
    jshintOptions = fs.readFileSync('.jshintrc');

function makeHashKey(file: File) {
    return [file.contents.toString('utf8'), jsHintVersion, jshintOptions].join('');
}

gulp.task('clear', function (done: any) {
    return cache.clearAll(done);
});
