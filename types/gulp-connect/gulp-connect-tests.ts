// Copying examples from Readme which currently depend on gulp v3
import * as gulp from 'gulp';
import * as connect from 'gulp-connect';

// Simple example
gulp.task('connect', () => {
  connect.server();
});

gulp.task('default', gulp.series(['connect']));

// LiveReload
gulp.task('connect', () => {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./app/*.html'], gulp.series(['html']));
});

gulp.task('default', gulp.series(['connect', 'watch']));

// Start and stop server
gulp.task('jenkins-tests', () => {
  connect.server({
    port: 8888
  });
  // run some headless tests with phantomjs
  // when process exits:
  connect.serverClose();
});

// Multiple server
gulp.task('connectDev', () => {
  connect.server({
    name: 'Dev App',
    root: ['app', 'tmp'],
    port: 8000,
    livereload: true
  });
});

gulp.task('connectDist', () => {
  connect.server({
    name: 'Dist App',
    root: 'dist',
    port: 8001,
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('stylus', () => {
  gulp.src('./app/stylus/*.styl')
    // .pipe(stylus()) // just here for demonstration purposes
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./app/*.html'], gulp.series(['html']));
  gulp.watch(['./app/stylus/*.styl'], gulp.series(['stylus']));
});

gulp.task('default', gulp.series(['connectDist', 'connectDev', 'watch']));

// Barebones middleware example from Readme
gulp.task('connect', () => {
  connect.server({
    root: "app",
    middleware(connect, opt) {
      return [];
    }
  });
});

// The following tests are custom tests to validate the more complicated APIs

// Validate gulp-connect typings allow express apps to be passed in as middleware
import express = require("express");

gulp.task('connect', () => {
    const middleware = [
        express()
    ];

    return connect.server({
        root: [__dirname],
        port: 8081,
        livereload: true,
        middleware: (connect, opt) => middleware,
        silent: true
    });
});

// Validate using paths to restrict handler functions works
gulp.task('connect', () => {
    const middleware: connect.ConnectRouteHandler[] = [
        ["/path", express()],
        ["/path2", express()],
    ];

    return connect.server({
        root: [__dirname],
        port: 8081,
        livereload: true,
        middleware: (connect, opt) => middleware
    });
});
