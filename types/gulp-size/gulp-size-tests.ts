


import * as gulp from 'gulp';
import * as size from 'gulp-size';
import * as debug from 'gulp-debug';

gulp.task('default', () =>
    gulp.src('fixture.js')
        .pipe(size())
        .pipe(gulp.dest('dist'))
);


gulp.task('default', () => {
    var s = size();

    return gulp.src('fixture.js')
        .pipe(s)
        .pipe(gulp.dest('dist'))
        .pipe(debug({title: 'Total size ' + s.prettySize}));
});


size();
size({showFiles: true, gzip: true});
