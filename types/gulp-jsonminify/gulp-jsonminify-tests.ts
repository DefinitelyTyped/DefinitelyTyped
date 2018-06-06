import * as gulp from 'gulp';
import jsonminify = require('gulp-jsonminify');

gulp.task('minify', () => {
  return gulp.src('src/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('dist'));
});
