import coffeelint = require('gulp-coffeelint');
import gulp = require('gulp');

gulp.task('lint', function () {
    gulp.src('./src/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

gulp.src('./src/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('csv'));


declare var stylish: Function;

gulp.src('./src/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter(stylish));

gulp.src('./src/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffelint-stylish'));

gulp.src('./src/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('coffeelint-stylish'))
    .pipe(coffeelint.reporter('fail'));

var myReporter = (function() {
    function MyReporter(errorReport: any) {
        this.errorReport = errorReport;
    }

    MyReporter.prototype.publish = function() {
        var hasError = this.errorReport.hasError();
        if (hasError) {
            return console.log('Oh no!');
        }
        return console.log('Oh yeah!');
    };

    return MyReporter;
})();

gulp.task('lint', function() {
    return gulp.src('./src/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter(myReporter));
});
