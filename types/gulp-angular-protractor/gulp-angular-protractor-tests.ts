// Based on https://github.com/rochejul/gulp-angular-protractor/tree/master/examples

import gulp = require('gulp');

import gulpProtractorAngular = require('gulp-angular-protractor');

// Required options
gulp.src(['example_spec.js']).pipe(
    gulpProtractorAngular({
        configFile: 'protractor.conf.js',
    }),
);

// All options
gulp.src(['example_spec.js']).pipe(
    gulpProtractorAngular({
        configFile: 'protractor.conf.js',
        args: ['--help'],
        autoStartStopServer: true,
        debug: false,
        protractorModulePath: '../protractor/bin/',
        verbose: true,
        webDriverUpdate: {
            skip: false,
            browsers: ['ie'],
            args: ['--ie32'],
        },
        webDriverStart: {
            args: ['--ie32'],
        },
    }),
);
