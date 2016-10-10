import * as gulp from 'gulp';
import * as uglify from 'gulp-uglify';

gulp.task('compress', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('compress2', function() {
    var tsResult = gulp.src('lib/*.ts')
        .pipe(uglify({
            mangle: false,
            preserveComments: "some",
            compress: false,
            output: {
                max_line_len: 300
            }
        }))
        .pipe(gulp.dest('dist'));
});
