import gulp = require('gulp');
import gulpTemplate = require('gulp-template');

gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ a: 'A' }, { sourceURL: 'https://www.example.com' })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ b: 'B' }, { escape: /x/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ c: 'C' }, { evaluate: /y/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ d: 'D' }, { imports: /z/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ e: 'E' }, { interpolate: /w/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ f: 'F' }, { variable: 'some-var' })));

// @ts-expect-error
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate({ g: 'G' }, { badOption: 'some-var' })));

gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ sourceURL: 'https://www.example.com' })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ escape: /x/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ evaluate: /y/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ imports: /z/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ interpolate: /w/ })));
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ variable: 'some-var' })));

// @ts-expect-error
gulp.task('replace', () => gulp.src('files').pipe(gulpTemplate.precompile({ badOption: 'some-var' })));
