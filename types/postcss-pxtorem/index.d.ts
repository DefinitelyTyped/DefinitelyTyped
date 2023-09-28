// Type definitions for postcss-pxtorem 6.0
// Project: https://github.com/cuth/postcss-pxtorem#readme
// Definitions by: Steven Bassett <https://github.com/bassettsj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PluginCreator } from "postcss";

declare namespace PostcssPxToRem {
    interface Options {
        rootValue?: number | ((pixelValue: number) => number);
        unitPrecision?: number;
        propList?: string[];
        selectorBlackList?: Array<string | RegExp>;
        replace?: boolean;
        mediaQuery?: boolean;
        minPixelValue?: number;
        exclude?: string | RegExp | ((file: string) => boolean);
    }
}

declare var pxtorem: PluginCreator<PostcssPxToRem.Options>;

export = pxtorem;
