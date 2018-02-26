import gulp = require("gulp");
import browserSync = require("browser-sync");

var typescript: gulp.GulpPlugin = null; // this would be the TypeScript compiler
var jasmine: gulp.GulpPlugin = null; // this would be the jasmine test runner

gulp.task('compile', function()
{
    gulp.src("**/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest('out'))
});

gulp.task('compile2', function(callback: (err?: any) => void)
{
    gulp.src("**/*.ts")
        .pipe(typescript())
        .pipe(gulp.dest('out'))
        .on('end', callback);
});

gulp.task('test', ['compile', 'compile2'], function()
{
    gulp.src("out/test/**/*.js")
        .pipe(jasmine());
});

gulp.task('default', ['compile', 'test']);



var opts = {};

gulp.watch('*.html', 'compile');
gulp.watch('*.html', ['compile', 'test']);
gulp.watch('*.html', () => {});
gulp.watch('*.html', [() => {}, (event) => {}]);
gulp.watch('*.html', ['compile', () => {}]);

gulp.watch('*.html', opts, 'compile');
gulp.watch('*.html', opts, ['compile', 'test']);
gulp.watch('*.html', opts, () => {});
gulp.watch('*.html', opts, [() => {}, (event) => {}]);
gulp.watch('*.html', opts, ['compile', () => {}]);

gulp.watch(['*.html', '*.ts'], 'compile');
gulp.watch(['*.html', '*.ts'], ['compile', 'test']);
gulp.watch(['*.html', '*.ts'], () => {});
gulp.watch(['*.html', '*.ts'], [() => {}, (event) => {}]);
gulp.watch(['*.html', '*.ts'], ['compile', () => {}]);

gulp.watch(['*.html', '*.ts'], opts, 'compile');
gulp.watch(['*.html', '*.ts'], opts, ['compile', 'test']);
gulp.watch(['*.html', '*.ts'], opts, () => {});
gulp.watch(['*.html', '*.ts'], opts, [() => {}, (event) => {}]);
gulp.watch(['*.html', '*.ts'], opts, ['compile', () => {}]);

var watcher = gulp.watch('*.html', event => {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
});

gulp.task('serve', ['compile'], () => {
    var browser = browserSync.create();
    gulp.watch(['*.html', '*.ts'], ['compile', browser.reload]);
});

gulp.start('test', 'compile');
