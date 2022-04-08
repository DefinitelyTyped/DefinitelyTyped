import gulp = require('gulp');
import coffeeify = require('gulp-coffeeify');

// Basic usage
gulp.task('scripts', function() {
    gulp.src('src/coffee/**/*.coffee')
        .pipe(coffeeify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('scripts', function() {
    gulp.src('src/coffee/**/*.coffee')
        .pipe(coffeeify({
            options: {
                debug: true, // source map
                paths: [__dirname + '/node_modules', __dirname + '/src/coffee']
            }
        }))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('scripts', function() {
    gulp.src('src/coffee/**/*.coffee')
        .pipe(coffeeify({
            aliases: [
                {
                    cwd: 'src/coffee/app',
                    base: 'app'
                }
            ]
        }))
        .pipe(gulp.dest('./build/js'));
});

var xform = function(data: string){
    return 'module.exports = "' + data + '"';
};
gulp.task('scripts', function() {
    gulp.src('src/coffee/**/*.coffee')
        .pipe(coffeeify({
            transforms: [
                {
                    ext: '.extension',
                    transform: xform
                }
            ]
        }))
        .pipe(gulp.dest('./build/js'));
});

