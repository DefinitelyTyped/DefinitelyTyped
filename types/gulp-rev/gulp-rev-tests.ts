import gulp = require('gulp');
import rev = require('gulp-rev');

gulp.task('default', () =>
    gulp.src('src/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist'))
);

gulp.task('default', () =>
    // by default, gulp would pick `assets/css` as the base,
    // so we need to set it explicitly:
    gulp.src(['assets/css/*.css', 'assets/js/*.js'], {base: 'assets'})
        .pipe(gulp.dest('build/assets'))  // copy original assets to build dir
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest('build/assets')) // write manifest to build dir
);

gulp.task('default', () =>
    // by default, gulp would pick `assets/css` as the base,
    // so we need to set it explicitly:
    gulp.src(['assets/css/*.css', 'assets/js/*.js'], {base: 'assets'})
        .pipe(gulp.dest('build/assets'))
        .pipe(rev())
        .pipe(gulp.dest('build/assets'))
        .pipe(rev.manifest({
            base: 'build/assets',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('build/assets'))
);
