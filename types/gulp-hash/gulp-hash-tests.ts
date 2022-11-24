import * as gulp from 'gulp';
import hash = require('gulp-hash');

gulp.src('./js/**/*.js')
    .pipe(hash())
    .pipe(gulp.dest('public/js'))
    .pipe(
        hash.manifest('public/assets.json', {
            deleteOld: true,
            sourceDir: __dirname + '/public/js',
        }),
    )
    .pipe(hash.manifest('public/assets.json', true))
    .pipe(gulp.dest('.'));
