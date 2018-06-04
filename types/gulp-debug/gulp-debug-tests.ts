import * as gulp from 'gulp';
import debug = require('gulp-debug');

gulp.task('default', () =>
    gulp.src('foo.js')
        .pipe(debug({title: 'unicorn:'}))
        .pipe(gulp.dest('dist'))
);

debug();
