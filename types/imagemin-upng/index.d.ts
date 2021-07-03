// Type definitions for imagemin-upng 2.0
// Project: https://github.com/fisker/imagemin-upng#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

/**
 * upng imagemin plugin
 */
declare function imageminUpng(options?: imageminUpng.Options): Plugin;

declare namespace imageminUpng {
    interface Options {
        /**
         * number of colors in the result (0 = lossless, 256 = lossy).
         * @default 256
         */
        cnum?: number;
    }
}

export = imageminUpng;
