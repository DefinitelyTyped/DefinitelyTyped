import espower = require('gulp-espower');
import * as gulp from 'gulp';

gulp.src('src/*.coffee')
    .pipe(espower())
    .pipe(gulp.dest('out'));

gulp.src('src/*.coffee')
    .pipe(espower({ patterns: ['assert(value, [message])'] }))
    .pipe(gulp.dest('out'));
