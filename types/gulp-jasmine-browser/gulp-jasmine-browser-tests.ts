


import gulp = require('gulp');
import jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('jasmine', () =>
  gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({port: 8888}))
);


gulp.task('jasmine-phantom', () =>
  gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless())
);


gulp.task('jasmine-slimerjs', () =>
  gulp.src(['src/**/*.js', 'spec/**/*_spec.js'])
    .pipe(jasmineBrowser.specRunner({console: true}))
    .pipe(jasmineBrowser.headless({driver: 'slimerjs'}))
);


gulp.task('jasmine', () =>
  gulp.src('spec/**/*_spec.js')
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server())
);
