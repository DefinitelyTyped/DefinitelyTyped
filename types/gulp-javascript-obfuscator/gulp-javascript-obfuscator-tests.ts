import gulp = require('gulp');
import javascriptObfuscator = require('gulp-javascript-obfuscator');

// No args
gulp.src('test.js').pipe(javascriptObfuscator()).pipe(gulp.dest('dist'));

// Some javascript-obfuscator args
gulp.src('test.js')
    .pipe(javascriptObfuscator({ compact: true }))
    .pipe(gulp.dest('dist'));
