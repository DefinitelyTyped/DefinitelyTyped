/// <reference path="./gulp-notify.d.ts"/>
/// <reference path="../gulp/gulp.d.ts"/>
import gulp = require("gulp");
import notify = require("gulp-notify");

var custom = notify.withReporter(function(options, callback) {
	console.log("Title:", options.title);
	console.log("Message:", options.message);
	callback();
});

notify.on('click', (options) => {
	console.log('I clicked something!', options);
});

notify.on('timeout', (options) => {
	console.log('The notification timed out', options);
});

gulp.task('notify1', function() {
    gulp.src("./src/test.ext")
		.pipe(notify("Hello Gulp! From file: <%= file.relative %>"));
});

gulp.task('notify2', function() {
    gulp.src("./src/test.ext")
		.pipe(notify({
			message: "Generated file: <%= file.relative %> @ <%= options.date %>",
			templateOptions: {
				date: new Date()
			}
		}));
});

gulp.task('notify3', function() {
    gulp.src("./src/test.ext")
		.pipe(custom("This is a message."))
		.on("error", notify.onError((error: Error) => {
			return "Message to the notifier: " + error.message;
		}));
});