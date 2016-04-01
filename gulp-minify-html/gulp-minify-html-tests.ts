/// <reference path="gulp-minify-html.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as minifyHtml from 'gulp-minify-html';

// This package has been deprecated in favor of gulp-htmlmin, which should be faster and more comprehensive.

minifyHtml();
minifyHtml({conditionals: true, loose: true});

gulp.task('minify-html', () => {
    var opts: minifyHtml.Options = {
        conditionals: true,
        spare: true
    };

    return gulp.src('./static/html/*.html')
        .pipe(minifyHtml(opts))
        .pipe(gulp.dest('./dist/'));
});
