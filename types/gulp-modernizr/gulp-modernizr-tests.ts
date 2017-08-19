import { src, dest } from 'gulp';
import * as gulpModernizr from 'gulp-modernizr';

let s1 = gulpModernizr();
let s2 = gulpModernizr('filename.js', {});
let s3 = gulpModernizr({cache: false});

src('fixtures.js').pipe(s1).pipe(s2);
