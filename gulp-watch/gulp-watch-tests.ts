/// <reference path="gulp-watch.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import gulp from 'gulp';
import watch = require('gulp-watch');

gulp.task('stream', () =>
    gulp.src('css/**/*.css')
        .pipe(watch('css/**/*.css'))
        .pipe(gulp.dest('build'))
);

gulp.task('callback', (cb) =>
    watch('css/**/*.css', () =>
        gulp.src('css/**/*.css')
            .pipe(watch('css/**/*.css'))
            .on('end', cb)
    )
);

gulp.task('build', () => {
    var files = [
        'app/**/*.ts',
        'lib/**/*.ts',
        'components/**/*.ts',
    ];

    gulp.src(files, { base: '..' })
        .pipe(watch(files, { base: '..' }));
});
