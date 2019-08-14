// Type definitions for imagemin-gifsicle 5.2
// Project: https://github.com/imagemin/imagemin-gifsicle#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

declare function imageminGifsicle(options?: imageminGifsicle.Options): Plugin;

declare namespace imageminGifsicle {
    interface Options {
        colors?: number;
        interlaced?: boolean;
        optimizationLevel?: number;
    }
}

export = imageminGifsicle;
