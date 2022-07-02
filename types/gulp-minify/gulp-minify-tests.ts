import * as gulp from 'gulp';
import * as minify from 'gulp-minify';

gulp.task('minify-1', () => {
    gulp.src('./src').pipe(minify()).pipe(gulp.dest('./out'));
});

gulp.task('minify-2', () => {
    gulp.src('./src')
        .pipe(
            minify({
                preserveComments: 'all',
                mangle: true,
                ignoreFiles: ['file.js'],
            }),
        )
        .pipe(gulp.dest('./out'));
});
