import gulp = require('gulp');
import wiredep = require('wiredep');

gulp.task('bower', function () {
    gulp.src('./src/footer.html')
    .pipe(wiredep.stream({
        cwd:'.',
        overrides:{
          optional: 'configuration',
          goes: 'here'
        }
    }))
    .pipe(gulp.dest('./dest'));
});
