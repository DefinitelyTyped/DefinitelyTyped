import * as gulp from 'gulp';
import changed = require('gulp-changed');

// Without options
gulp.src('*.html').pipe(changed('build')).pipe(gulp.dest('build'));

// With some options
gulp.src('*.html')
    .pipe(changed('build', { hasChanged: changed.compareContents }))
    .pipe(gulp.dest('build'));
