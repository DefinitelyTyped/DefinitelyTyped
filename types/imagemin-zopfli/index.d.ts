import { Plugin } from "imagemin";

declare function imageminZopfli(options?: imageminZopfli.Options): Plugin;

declare namespace imageminZopfli {
    interface Options {
        /** Convert 16-bit per channel images to 8-bit per channel. */
        "8bit"?: boolean | undefined;

        /**
         * Remove colors behind alpha channel 0.
         * No visual difference, removes hidden information.
         */
        transparent?: boolean | undefined;

        /**
         * The number of iterations, more iterations makes it slower
         * but provides slightly better compression.
         * Default: 15 for small files, 5 for large files.
         */
        iterations?: number | undefined;

        /**
         * Compress more: use more iterations (depending on file size).
         */
        more?: boolean | undefined;
    }
}

export = imageminZopfli;
