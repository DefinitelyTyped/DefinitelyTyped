/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts" />
/// <reference path="../through2/through2.d.ts" />
/// <reference path="gulp-notify.d.ts" />

import gulp = require('gulp');
import notify = require('gulp-notify');
import Vinyl = require('vinyl');
import through = require('through2');

declare function jshint(): NodeJS.ReadWriteStream;
declare function plumber(arg: { errorHandler: Function }): NodeJS.ReadWriteStream;

gulp.src("./src/test.ext")
    .pipe(notify("Hello Gulp!"));

gulp.src("./src/test.ext")
    .pipe(notify("Found file: <%= file.relative %>!"));

gulp.src("../test/fixtures/*")
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(through(function () {
        this.emit("error", new Error("Something happend: Error message!"))
    }));


gulp.src("../test/fixtures/*")
    .pipe(notify({
        message: "Generated file: <%= file.relative %> @ <%= options.date %>",
        templateOptions: {
            date: new Date()
        }
    }));


//
// notify.on(event, function (notificationOptions)) - Events
//

notify.on('click', function (options: any) {
    console.log('I clicked something!', options);
});

notify.on('timeout', function (options: any) {
    console.log('The notification timed out', options);
});

gulp.task("click", function () {
    return gulp.src("some/glob/**")
        .pipe(notify({ message: 'Click or wait', wait: true }));
});


//
// notify.withReporter(Function)
//

var custom = notify.withReporter(function (options: notify.NotifierOption, callback: Function) {
    console.log("Title:", options.title);
    console.log("Message:", options.message);
    callback();
});

gulp.src("../test/fixtures/1.txt")
    .pipe(custom("This is a message."));

gulp.src("../test/fixtures/1.txt")
    .pipe(notify({
        message: "This is a message.",
        notifier: function (options: notify.NotifierOption, callback: Function) {
            console.log("Title:", options.title);
            console.log("Message:", options.message);
            callback();
        }
    }));

//
// notify.onError()
//

gulp.src("../test/fixtures/*")
    .pipe(through(function () {
        this.emit("error", new Error("Something happend: Error message!"))
    }))
    .on("error", notify.onError(function (error: any) {
        return "Message to the notifier: " + error.message;
    }));

gulp.src("../test/fixtures/*")
    .pipe(through(function () {
        this.emit("error", new Error("Something happend: Error message!"))
    }))
    .on("error", notify.onError("Error: <%= error.message %>"));

gulp.src("../test/fixtures/*")
    .pipe(through(function () {
        this.emit("error", new Error("Something happend: Error message!"))
    }))
    .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error running something"
    }));


gulp.task('lint', function() {
    gulp.src('/src/**/*.js')
        .pipe(jshint())
        // Use gulp-notify as jshint reporter
        .pipe(notify(function (file: Vinyl) {
            //
            return file.relative;
        }));
});
