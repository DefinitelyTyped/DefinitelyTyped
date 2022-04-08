import * as gulp from 'gulp';
import gulpJspm = require('gulp-jspm');

// Examples taken from https://www.npmjs.com/package/gulp-jspm
gulp.task('default', function(){
    return gulp.src('src/main.js')
        .pipe(gulpJspm())
        .pipe(gulp.dest('build/'));
});

// Options
gulp.src('src/main.js')
    .pipe(gulpJspm({arithmetic: '- message'})) // exclude message.js from bundle
    .pipe(gulp.dest('build/'));

gulp.src('src/main.js')
    .pipe(gulpJspm({selfExecutingBundle: true})) // `jspm bundle-sfx main`
    .pipe(gulp.dest('build/'));

gulp.src('src/main.jsx')
    .pipe(gulpJspm({plugin: true})) // `jspm bundle main.jsx!`
    .pipe(gulp.dest('build/'));
gulp.src('src/main.jsx')
    .pipe(gulpJspm({plugin: 'jsx'})) // `jspm bundle main.jsx!jsx`
    .pipe(gulp.dest('build/'));

// all other options given to gulp-jspm are passed on to jspm, e.g.
gulp.src('src/main.js')
    .pipe(gulpJspm({inject: true})) // `jspm bundle main --inject`
    .pipe(gulp.dest('build/'));
