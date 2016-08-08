/// <reference path="gulp-install.d.ts" />
/// <reference path="../gulp/gulp.d.ts" />

import * as gulp from 'gulp';
import * as install from 'gulp-install';

// Examples taken from https://www.npmjs.com/package/gulp-install

// Usage in a gulp stream
gulp.src('src')
  .pipe(install());

// Options
install({
  production: true,
  ignoreScripts: true,
  noOptional: true,
  allowRoot: true,
  args: ['one', 'two', 'three']
});

// Options: args only as a string
install({
  args: 'one'
});