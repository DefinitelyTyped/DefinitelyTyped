import gulpHelp = require('gulp-help');

var gulp = gulpHelp(require('gulp'));

gulp.task('lint', 'Lints all server side js', function () {
    var jshint: () => NodeJS.ReadWriteStream;

    gulp.src('./lib/**/*.js')
        .pipe(jshint());
});

gulp.task('task-hidden-from-help', false, function () {
    // ...
});

gulp.task('version', 'prints the version.', [], function() {
    // ...
}, {
    aliases: ['v', 'V']
});

gulp.task('version', 'prints the version.', [], function () {
    // ...
}, {
    options: {
        'env=prod': 'description of env, perhaps with available values',
        'key=val': 'description of key & val',
        'key': 'description of key'
    }
});

var gulp2 = require('gulp');
gulpHelp(gulp2, {
    description: 'Desc',
    aliases: ['h'],
    hideEmpty: true,
    hideDepsMessage: false,
    afterPrintCallback(): any {
        console.log('done');
    }
});

var gulp3 = require('gulp');
gulpHelp(gulp3, {
    description: 'Desc',
    aliases: ['h'],
    hideEmpty: true,
    hideDepsMessage: false,
    afterPrintCallback(): any {
        console.log('done');
    },
    options: {
	    an: 'option'
    },
});
