import gulp = require('gulp');
import ttf2woff2 = require('gulp-ttf2woff2');
import PluginError = require('plugin-error');

gulp.task('ttf2woff2', () => {
    gulp.src(['fonts/*.ttf']).pipe(ttf2woff2()).pipe(gulp.dest('fonts/'));
});

ttf2woff2({});

ttf2woff2({
    ignoreExt: true,
});

ttf2woff2({
    clone: true,
});

ttf2woff2({
    ignoreExt: true,
    clone: true,
});

const fileTransform = ttf2woff2.fileTransform();

declare const err1: TypeError | null;
declare const buf1: Buffer | undefined;
declare const transformResult1: (err: PluginError | null, buf: Buffer | undefined) => string | undefined;

// $ExpectType string | undefined
fileTransform(err1, buf1, transformResult1);

declare const err2: TypeError;
declare const buf2: undefined;
declare const transformResult2: (err: PluginError | null, buf: Buffer | undefined) => void;

// $ExpectType void
fileTransform(err2, buf2, transformResult2);

declare const err3: null;
declare const buf3: Buffer;
declare const transformeResult3: (err: PluginError | null, buf: Buffer | undefined) => string;

// $ExpectType string
fileTransform(err3, buf3, transformeResult3);
