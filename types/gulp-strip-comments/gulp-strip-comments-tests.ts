import * as gulp from 'gulp';
import stripComments = require('gulp-strip-comments');

gulp.task('default', () => {
	return gulp.src('src/app.js')
		.pipe(stripComments({
            safe: true,
        }))
        .pipe(stripComments.html())
        .pipe(stripComments.text())
		.pipe(gulp.dest('dist'));
});
