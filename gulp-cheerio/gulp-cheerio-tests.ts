import cheerio = require('gulp-cheerio');
import gulp = require('gulp');
import Vinyl = require('vinyl');

//
// There are two ways to use gulp-cheerio: synchronous and asynchronous. See the following usage examples:
//

gulp.task('sync', function () {
    return gulp
        .src(['src/*.html'])
        .pipe(cheerio(function ($: CheerioStatic, file: Vinyl) {
            // Each file will be run through cheerio and each corresponding `$` will be passed here.
            // `file` is the gulp file object
            // Make all h1 tags uppercase
            $('h1').each(function () {
                var h1 = $(this);
                h1.text(h1.text().toUpperCase());
            });
        }))
        .pipe(gulp.dest('dist/'));
});
gulp.task('async', function () {
    return gulp
        .src(['src/*.html'])
        .pipe(cheerio(function ($: CheerioStatic, file: Vinyl, done: Function) {
            // The only difference here is the inclusion of a `done` parameter.
            // Call `done` when everything is finished. `done` accepts an error if applicable.
            done();
        }))
        .pipe(gulp.dest('dist/'));
});
//TODO


//
// Additional options can be passed by passing an object as the main argument with your function as the run option:
//


gulp.task('sync', function () {
    return gulp
        .src(['src/*.html'])
        .pipe(cheerio({
            run: function ($: CheerioStatic, file: Vinyl) {
                // Each file will be run through cheerio and each corresponding `$` will be passed here.
                // `file` is the gulp file object
                // Make all h1 tags uppercase
                $('h1').each(function () {
                    var h1 = $(this);
                    h1.text(h1.text().toUpperCase());
                });
            }
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('async', function () {
    return gulp
        .src(['src/*.html'])
        .pipe(cheerio({
            run: function ($: CheerioStatic, file: Vinyl, done: Function) {
                // The only difference here is the inclusion of a `done` parameter.
                // Call `done` when everything is finished. `done` accepts an error if applicable.
                done();
            }
        }))
        .pipe(gulp.dest('dist/'));
});

cheerio({
    run: function () {},
    parserOptions: {
        // Options here
    }
});


cheerio({
    run: function () {},
    parserOptions: {
        xmlMode: true
    }
});

cheerio({
    cheerio: require('../cheerio/cheerio.d.ts') as CheerioStatic // special version of `cheerio`
});
