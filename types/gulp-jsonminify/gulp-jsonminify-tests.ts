import * as gulp from 'gulp';
import * as jsonminify from 'gulp-jsonminify';

gulp.task('minify', () => {
  return gulp.src('src/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('dist'));
});
