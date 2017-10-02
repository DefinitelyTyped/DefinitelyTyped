import * as gulp from 'gulp';
import * as diff from 'gulp-diff';

gulp.task('task', () => {
  return gulp.src('src')
    .pipe(diff('dest'))
    .pipe(diff.reporter({fail: true}));
});
