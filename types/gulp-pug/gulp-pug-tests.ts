import { src, dest } from 'gulp';
import * as gulpPug from 'gulp-pug';

let s1 = gulpPug();
let s2 = gulpPug({});
let s3 = gulpPug({ basedir: '.' });

src('fixtures.js').pipe(s1).pipe(s2).pipe(s3);
