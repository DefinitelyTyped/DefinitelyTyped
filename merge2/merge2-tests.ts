/// <reference path="merge2.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp = require('gulp');
import merge2 = require('merge2');

gulp.task('app-js', () =>
  merge2(
      gulp.src('static/src/tpl/*.html'),
      gulp.src([
        'static/src/js/app.js',
        'static/src/js/locale_zh-cn.js',
        'static/src/js/router.js',
        'static/src/js/tools.js',
        'static/src/js/services.js',
        'static/src/js/filters.js',
        'static/src/js/directives.js',
        'static/src/js/controllers.js'
      ])
    )
    .pipe(gulp.dest('static/dist/js/'))
);


var stream1 = gulp.src('*.html');
var stream2 = gulp.src('*.html');
var stream3 = gulp.src('*.html');
var stream4 = gulp.src('*.html');
var stream5 = gulp.src('*.html');
var stream6 = gulp.src('*.html');
var stream7 = gulp.src('*.html');


var stream = merge2([stream1, stream2], stream3, {end: false})
//...
stream.add(stream4, stream5);
//..
stream.end();


// equal to merge2([stream1, stream2], stream3)
var stream = merge2();
stream.add([stream1, stream2]);
stream.add(stream3);


// merge order:
//   1. merge `stream1`;
//   2. merge `stream2` and `stream3` in parallel after `stream1` merged;
//   3. merge 'stream4' after `stream2` and `stream3` merged;
var stream = merge2(stream1, [stream2, stream3], stream4);

// merge order:
//   1. merge `stream5` and `stream6` in parallel after `stream4` merged;
//   2. merge 'stream7' after `stream5` and `stream6` merged;
stream.add([stream5, stream6], stream7);


// nest merge
// equal to merge2(stream1, stream2, stream6, stream3, [stream4, stream5]);
var streamA = merge2(stream1, stream2);
var streamB = merge2(stream3, [stream4, stream5]);
var stream = merge2(streamA, streamB);
streamA.add(stream6);
