import * as gulp from 'gulp';
import * as htmlreplace from 'gulp-html-replace';

// Examples taken from README.md of the gulp-html-replace project:
// https://www.npmjs.com/package/gulp-html-replace

// Simple examples
gulp.task('simple1', () => {
  gulp.src('src')
    .pipe(htmlreplace({ js: 'js/main.js' }))
    .pipe(gulp.dest('dest'));
});

gulp.task('simple2', () => {
  gulp.src('src')
    .pipe(htmlreplace({ js: ['js/monster.js', 'js/hero.js'] }))
    .pipe(gulp.dest('dest'));
});

// Advanced examples
gulp.task('advanced1', () => {
  gulp.src('src')
    .pipe(htmlreplace({
    js: 'js/main.js',
    tpl: '<img src="%s" align="left" />'
  }))
    .pipe(gulp.dest('dest'));
});

gulp.task('advanced2', () => {
  gulp.src('src')
    .pipe(htmlreplace({
    js: ['data-main.js', 'require-src.js'],
    tpl: '<img src="%s" align="left" />'
  }))
    .pipe(gulp.dest('dest'));
});

// Extended replacements
gulp.task('ext1', () => {
  gulp.src('src')
    .pipe(htmlreplace({
    js: {
      src: null,
      tpl: '<script src="%f".js></script>'
    }
  }))
    .pipe(gulp.dest('dest'));
});

gulp.task('ext2', () => {
  gulp.src('src')
    .pipe(htmlreplace({
    js: {
      src: 'dir',
      tpl: '<script src="%f".js></script>'
    }
  }))
    .pipe(gulp.dest('dest'));
});

// Options example
gulp.task('options1', () => {
  gulp.src('src')
    .pipe(htmlreplace({
    js: {
      src: null,
      tpl: '<script src="%f".js></script>'
    }
  }, {
    keepUnassigned: false,
    keepBlockTags: false,
    resolvePaths: false
  }))
    .pipe(gulp.dest('dest'));
});
