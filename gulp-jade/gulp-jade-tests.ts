/// <reference path="../gulp/gulp.d.ts" />
/// <reference path="./gulp-jade.d.ts"/>

import * as gulp from 'gulp';
import * as jade from 'gulp-jade';

gulp.task('jade', () => {
  gulp.src('src/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});

gulp.task('jade:pretty', () => {
  gulp.src('src/**/*.jade')
    .pipe(jade({
      pretty: '\t',
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('jade:client', () => {
  gulp.src('src/**/*.jade')
    .pipe(jade({
      client: true,
      pretty: true,
      debug: false,
      compileDebug: false,
    }));
});