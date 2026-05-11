import { Input, PluginCreator } from "postcss";
declare namespace PostcssPxToRem {
    interface Options {
        rootValue?: number | ((input: Input) => number);
        unitPrecision?: number;
        propList?: string[];
        selectorBlackList?: Array<string | RegExp>;
        replace?: boolean;
        mediaQuery?: boolean;
        minPixelValue?: number;
        exclude?: string | RegExp | ((file: string) => boolean);
        unit?: string;
    }
}

declare var pxtorem: PluginCreator<PostcssPxToRem.Options>;

export = pxtorem;
