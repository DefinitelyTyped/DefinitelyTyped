// Type definitions for imagemin-optipng 5.2
// Project: https://github.com/imagemin/imagemin-optipng#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
