import * as UglifyJS from 'uglify-js';
import * as GulpUglify from 'gulp-uglify';

interface Composer {
    (uglify: Uglify, log: Logger): typeof GulpUglify;
}

interface Uglify {
    minify: typeof UglifyJS.minify;
}

interface Logger {
    warn: typeof console.warn;
}

declare const composer: Composer;

export = composer;
