/// <reference path="./gulp-if.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import _if = require("gulp-if");

gulp.src("test.css")
    .pipe(_if(true, gulp.src("test.css")));

gulp.src("test.css")
    .pipe(_if(false, gulp.src("test.css"), gulp.src("test.css")));
    
/*
 * When using gulp-load-plugins, it is useful to be able to 
 * access type information through the plugin variable as well
 */
interface Plugins {
    if: gulpIf.GulpIf;
}

var $: Plugins = require("gulp-load-plugins");

gulp.src("test.css")
    .pipe($.if(true, gulp.src("test.css")));

gulp.src("test.css")
    .pipe($.if(false, gulp.src("test.css"), gulp.src("test.css")));