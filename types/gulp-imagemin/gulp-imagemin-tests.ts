import gulp = require('gulp');
import gulpImagemin = require('gulp-imagemin');

const plugins = [
    gulpImagemin.gifsicle({ interlaced: true }),
    gulpImagemin.mozjpeg({ progressive: true }),
    gulpImagemin.optipng({ optimizationLevel: 5 }),
    gulpImagemin.svgo({
        floatPrecision: 2,
        plugins: [
            {
                name: 'removeViewBox',
                active: true,
            },
            {
                name: 'cleanupIDs',
                active: false,
            },
        ],
    }),
];

gulp.task('build', () => {
    return gulp.src('*.{gif,jpg,png,svg}').pipe(gulpImagemin()).pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp.src('*.{gif,jpg,png,svg}').pipe(gulpImagemin(plugins)).pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp
        .src('*.{gif,jpg,png,svg}')
        .pipe(gulpImagemin({ silent: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp
        .src('*.{gif,jpg,png,svg}')
        .pipe(gulpImagemin(plugins, { silent: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp
        .src('*.{gif,jpg,png,svg}')
        .pipe(gulpImagemin({ verbose: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', () => {
    return gulp
        .src('*.{gif,jpg,png,svg}')
        .pipe(gulpImagemin(plugins, { verbose: true }))
        .pipe(gulp.dest('dist'));
});
