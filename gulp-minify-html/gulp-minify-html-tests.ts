/// <reference path="gulp-minify-html.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as minifyHtml from 'gulp-minify-html';

minifyHtml();
minifyHtml({conditionals: true, loose: true});

gulp.task('minify-html', () => {
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('./static/html/*.html')
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest('./dist/'));
});
