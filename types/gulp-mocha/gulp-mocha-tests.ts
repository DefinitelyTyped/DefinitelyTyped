import * as gulp from "gulp";
import mocha = require("gulp-mocha");

gulp.task('default', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
