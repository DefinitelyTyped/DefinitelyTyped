import { Plugin } from "imagemin";

declare function imageminOptipng(options?: imageminOptipng.Options): Plugin;

declare namespace imageminOptipng {
    interface Options {
        bitDepthReduction?: boolean | undefined;
        colorTypeReduction?: boolean | undefined;
        optimizationLevel?: number | undefined;
        paletteReduction?: boolean | undefined;
    }
}

export = imageminOptipng;
