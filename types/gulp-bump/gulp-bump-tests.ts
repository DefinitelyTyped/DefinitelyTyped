import * as gulp from 'gulp';
import * as GulpBump from 'gulp-bump';

gulp
    .src('package.json')
    .pipe(GulpBump())
    .pipe(gulp.dest('./'));

gulp
    .src('package.json')
    .pipe(GulpBump({regex: /^.+$/}))
    .pipe(gulp.dest('./'));

gulp
    .src('package.json')
    .pipe(GulpBump({version: '1.0.0', global: true}))
    .pipe(gulp.dest('./'));

gulp
    .src('package.json')
    .pipe(GulpBump({version: '1.0.0', case: true}))
    .pipe(gulp.dest('./'));
