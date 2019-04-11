import gulpTap = require('gulp-tap');
import gulp = require('gulp');
import Vinyl = require('vinyl');

gulp.task('testTask', () => {
  return gulp.src(['src/*.html'])
      .pipe(gulpTap((sourceFile: Vinyl) => {
        console.log(sourceFile.path);
      }))
      .pipe(gulp.dest('dist/'));
});
