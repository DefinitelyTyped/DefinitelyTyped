import * as gulp from 'gulp';
import diff = require('gulp-diff');

gulp.task('task', () => {
  return gulp.src('src')
    .pipe(diff('dest'))
    .pipe(diff.reporter({fail: true}));
});
