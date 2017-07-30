import * as UglifyJS from 'uglify-js';
import * as GulpUglify from 'gulp-uglify';

interface Composer {
    (uglify: Uglify, log: Logger): typeof GulpUglify;
}

interface Uglify {
    minify(files: string | string[], options: any): UglifyJS.MinifyOutput;
}

interface Logger {
    warn: typeof console.warn;
}

declare const composer: Composer;

export = composer;
