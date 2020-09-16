import * as gulp from 'gulp';
import stripDebug = require('gulp-strip-debug');

// Example taken from https://www.npmjs.com/package/gulp-strip-debug
gulp.task('default', function () {
    return gulp.src('src/app.js')
        .pipe(stripDebug())
        .pipe(gulp.dest('dist'));
});
