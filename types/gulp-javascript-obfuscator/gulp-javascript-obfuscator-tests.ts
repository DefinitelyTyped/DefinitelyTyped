import gulp = require('gulp');
import javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.src('test.js').pipe(javascriptObfuscator()).pipe(gulp.dest('dist'));
