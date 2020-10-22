import * as gulp from 'gulp';
import prettifyHtml = require('gulp-html-prettify');

gulp.task('prettifyHtml', () => {
    gulp.src('source/*.html')
        .pipe(prettifyHtml({
            indent_char: ' ',
            indent_size: 2
        }))
        .pipe(gulp.dest('./dist/'));
});
