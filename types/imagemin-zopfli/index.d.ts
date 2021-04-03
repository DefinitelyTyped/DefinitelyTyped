// Type definitions for imagemin-zopfli 7.0
// Project: https://github.com/imagemin/imagemin-zopfli
// Definitions by: Marius Metzger <https://github.com/crushedpixel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'imagemin';

declare function imageminZopfli(options?: imageminZopfli.Options): Plugin;

declare namespace imageminZopfli {
    interface Options {
        /** Convert 16-bit per channel images to 8-bit per channel. */
        '8bit'?: boolean;

        /**
         * Remove colors behind alpha channel 0.
         * No visual difference, removes hidden information.
         */
        transparent?: boolean;

        /**
         * The number of iterations, more iterations makes it slower
         * but provides slightly better compression.
         * Default: 15 for small files, 5 for large files.
         */
        iterations?: number;

        /**
         * Compress more: use more iterations (depending on file size).
         */
        more?: boolean;
    }
}

export = imageminZopfli;
