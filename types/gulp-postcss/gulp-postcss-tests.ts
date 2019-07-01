import * as gulp from 'gulp';
import * as Vinyl from 'vinyl';
import postcss = require('gulp-postcss');
import autoprefixer = require('autoprefixer');
import sass = require('sass');

gulp.task('postCss1', () => {
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
});

gulp.task('postCss2', () => {
    const postCssPlugins = [ autoprefixer({browsers: ['last 1 version']}) ];
    return gulp.src('./src/*.css')
        .pipe(postcss(postCssPlugins))
        .pipe(gulp.dest('./dest'));
});

gulp.task('postCss3', () => {
    const plugins = [ autoprefixer({browsers: ['last 1 version']}) ];
    return gulp.src('in.sss')
        .pipe(postcss(plugins, { parser: sass }))
        .pipe(gulp.dest('out'));
});

gulp.task('postCss4', () => {
    function callback(file: Vinyl) {
        return {
            plugins: [
                require('postcss-import')({ root: file.dirname }),
                require('postcss-modules')
            ],
            options: {
                parser: file.extname === '.sss' ? require('sugarss') : false
            }
        };
    }
    return gulp.src('./src/*.css')
        .pipe(postcss(callback))
        .pipe(gulp.dest('./dest'));
});
