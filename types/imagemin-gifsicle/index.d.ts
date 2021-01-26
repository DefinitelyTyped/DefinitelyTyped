// Type definitions for imagemin-gifsicle 7.0
// Project: https://github.com/imagemin/imagemin-gifsicle#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

/**
 * Imagemin plugin for {@link https://www.lcdf.org/gifsicle/|Gifsicle}
 */
declare function imageminGifsicle(options?: imageminGifsicle.Options): Plugin;

declare namespace imageminGifsicle {
    interface Options {
        /**
         * Reduce the number of distinct colors in each output GIF to num or less.
         * Num must be between 2 and 256.
         */
        colors?: number;
        /**
         * Interlace gif for progressive rendering.
         * @default false
         */
        interlaced?: boolean;
        /**
         * Select an optimization level between 1 and 3.
         * @see {@link https://github.com/imagemin/imagemin-gifsicle#optimizationlevel}
         * @default 1
         */
        optimizationLevel?: number;
    }
}

export = imageminGifsicle;
