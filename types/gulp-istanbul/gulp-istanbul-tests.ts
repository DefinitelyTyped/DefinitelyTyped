import gulp = require("gulp");
import istanbul = require("gulp-istanbul");

function testFramework(): NodeJS.ReadWriteStream {
    return null;
}

gulp.task('test', function (cb: () => void) {
    gulp.src(['lib/**/*.js', 'main.js'])
        .pipe(istanbul()) // Covering files
        .pipe(gulp.dest('test-tmp/'))
        .on('finish', function () {
            gulp.src(['test/*.html'])
                .pipe(testFramework())
                .pipe(istanbul.writeReports()) // Creating the reports after tests runned
                .on('end', cb);
        });
});

gulp.task('test', function (cb: () => void) {
    gulp.src(['lib/**/*.js', 'main.js'])
        .pipe(istanbul({includeUntested: true})) // Covering files
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src(['test/*.html'])
                .pipe(testFramework())
                .pipe(istanbul.writeReports({reporters: ['text']})) // Creating the reports after tests runned
                .on('end', cb);
        });
});

gulp.task('test', function (cb: () => void) {
    gulp.src(['lib/**/*.js', 'main.js'])
        .pipe(istanbul({includeUntested: true})) // Covering files
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src(['test/*.html'])
                .pipe(testFramework())
                .pipe(istanbul.writeReports({reporters: ['text']})) // Creating the reports after tests runned
                .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) //
                .on('end', cb);
        });
});
