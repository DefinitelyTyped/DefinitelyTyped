import { src, dest } from 'gulp';
import gulpPug = require('gulp-pug');

const s1 = gulpPug();
const s2 = gulpPug({});
const s3 = gulpPug({ basedir: '.' });

src('fixtures.js').pipe(s1).pipe(s2).pipe(s3);
