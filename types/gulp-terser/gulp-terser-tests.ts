import * as gulp from 'gulp';
import terser = require('gulp-terser');
import pump = require('pump');

gulp.task('basic terser', () => {
    const tsResult = gulp.src('lib/*.ts')
        .pipe(terser())
        .pipe(gulp.dest('dist'));
});

gulp.task('terser with options', () => {
    const tsResult = gulp.src('lib/*.ts')
        .pipe(terser({
            mangle: false,
            compress: false,
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('terser with pump', (cb) => {
    pump([
            gulp.src('lib/*.js'),
            terser(),
            gulp.dest('dist')
        ],
        cb
    );
});
