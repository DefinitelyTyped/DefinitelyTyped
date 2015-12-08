/// <reference path="./gulp-jade.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
/// <reference path="../jade/jade.d.ts"/>

import gulp = require("gulp");
import jade = require("gulp-jade");


gulp.task('check1', function() {
    gulp.src('lib/*.jade')
        .pipe(jade({
			locals: {},
			client: false
		}));
});

import jadeLib = require('jade');

gulp.task('check2', function() {
    gulp.src('lib/*.jade')
        .pipe(jade({
			jade: jadeLib,
			pretty: true
		}));
});