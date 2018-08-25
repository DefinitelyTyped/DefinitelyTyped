import gulp = require('gulp');
import gulpImagemin = require('gulp-imagemin');

const plugins = [
    gulpImagemin.gifsicle({ interlaced: true }),
    gulpImagemin.jpegtran({ progressive: true }),
    gulpImagemin.optipng({ optimizationLevel: 5 }),
    gulpImagemin.svgo({ floatPrecision: 2 })
];

gulp.task('minify:img', () => {
    return gulp.src('img/**/*')
        .pipe(gulpImagemin())
        .pipe(gulpImagemin(plugins))
        .pipe(gulpImagemin({ verbose: true }))
        .pipe(gulpImagemin(plugins, { verbose: true }))
        .pipe(gulp.dest('dist'));
});
