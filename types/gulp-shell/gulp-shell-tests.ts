import shell = require('gulp-shell');
import gulp = require('gulp');

gulp.task('example', function () {
    return gulp.src('*.js', {read: false})
        .pipe(shell([
        'echo <%= f(file.path) %>',
        'ls -l <%= file.path %>'
    ], {
        templateData: {
            f: function (s: string) {
                return s.replace(/$/, '.bak')
            }
        }
    }))
});

gulp.task('shorthand', shell.task([
    'echo hello',
    'echo world'
]));

var paths: any = {
    js: ['*.js', 'test/*.js']
};

gulp.task('test', shell.task('mocha -R spec'));

gulp.task('coverage', gulp.parallel('test', shell.task('istanbul cover _mocha -- -R spec')));
 		
gulp.task('coveralls', gulp.parallel('coverage', shell.task('cat coverage/lcov.info | coveralls')));

gulp.task('lint', shell.task('eslint ' + paths.js.join(' ')));

gulp.task('default', gulp.parallel('coverage', 'lint'));

gulp.task('watch', function () {
    gulp.watch(paths.js)
});
