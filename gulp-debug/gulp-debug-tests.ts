


import * as gulp from 'gulp';
import * as debug from 'gulp-debug';

gulp.task('default', () =>
    gulp.src('foo.js')
        .pipe(debug({title: 'unicorn:'}))
        .pipe(gulp.dest('dist'))
);


debug();
