import { src, dest } from 'gulp';
import gulpModernizr = require('gulp-modernizr');

const s1 = gulpModernizr();
const s2 = gulpModernizr('filename.js', {});
const s3 = gulpModernizr({cache: false});

src('fixtures.js').pipe(s1).pipe(s2);
