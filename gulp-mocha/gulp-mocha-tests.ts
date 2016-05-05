import * as gulp from "gulp";
import * as mocha from "gulp-mocha";

gulp.task('default', function () {
    return gulp.src('test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
