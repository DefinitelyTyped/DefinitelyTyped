// Type definitions for imagemin-jpegtran 5.0
// Project: https://github.com/imagemin/imagemin-jpegtran#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

declare function imageminJpegtran(options?: imageminJpegtran.Options): Plugin;

declare namespace imageminJpegtran {
    interface Options {
        arithmetic?: boolean;
        progressive?: boolean;
    }
}

export = imageminJpegtran;
