


import gulp = require('gulp');
import gzip = require('gulp-gzip');

gzip({ append: true });

gzip({ extension: 'zip' }); // note that the `.` should not be included in the extension

gzip({ preExtension: 'gz' }); // note that the `.` should not be included in the extension

gzip({ threshold: '1kb' });

gzip({ threshold: 1024 });

gzip({ threshold: true });

gzip({ gzipOptions: { level: 9 } });

gzip({ gzipOptions: { memLevel: 1 } });

gulp.task('compress', function() {
    gulp.src('./dev/scripts/*.js')
        .pipe(gzip())
        .pipe(gulp.dest('./public/scripts'));
});
