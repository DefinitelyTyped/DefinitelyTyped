import { Plugin } from "imagemin";

/**
 * upng imagemin plugin
 */
declare function process(options?: process.Options): Plugin;

declare namespace process {
    interface Options {
        /**
         * number of colors in the result (0 = lossless, 256 = lossy).
         * @default 256
         */
        cnum?: number | undefined;
    }
}

export default process;
