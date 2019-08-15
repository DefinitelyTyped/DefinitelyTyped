import * as gulp from 'gulp';
import uglify = require('gulp-uglify');
import pump = require('pump');
import uglifyjs = require('uglify-js');
import composer = require('gulp-uglify/composer');

gulp.task('compress', () => {
    const tsResult = gulp.src('lib/*.ts')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('compress2', () => {
    const tsResult = gulp.src('lib/*.ts')
        .pipe(uglify({
            mangle: false,
            compress: false,
            output: {
                max_line_len: 300
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('compress', (cb) => {
    pump([
            gulp.src('lib/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

const minify = composer(uglifyjs, console);

gulp.task('compress', (cb) => {
    // the same options as described above
    const options = {};

    pump([
            gulp.src('lib/*.js'),
            minify(options),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('compress', () => {
    return gulp.src('lib/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'));
});
