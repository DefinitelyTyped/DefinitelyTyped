import gulpTap = require('gulp-tap');
import gulp = require('gulp');
import Vinyl = require('vinyl');


gulp.task('testTask', function() {
  return gulp.src(['src/*.html'])
      .pipe(gulpTap(function(sourceFile: Vinyl): void {
        console.log(sourceFile.path);
      }))
      .pipe(gulp.dest('dist/'))
});