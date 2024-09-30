import { Input, PluginCreator } from "postcss";

interface BaseOptions {
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

interface LegacyOptions {
    /**
     * @deprecated use `rootValue` instead
     */
    root_value?: number | ((input: Input) => number);
    /**
     * @deprecated use `unitPrecision` instead
     */
    unit_precision?: number;
    /**
     * @deprecated use `selectorBlackList` instead
     */
    selector_black_list?: Array<string | RegExp>;
    /**
     * @deprecated use `propList` instead
     */
    prop_white_list?: string[];
    /**
     * @deprecated use `mediaQuery` instead
     */
    media_query?: boolean;
    /**
     * @deprecated use `propList` instead
     */
    propWhiteList?: string[];
}

interface PostcssPxToRemOptions extends BaseOptions, LegacyOptions {}

declare var pxtorem: PluginCreator<PostcssPxToRemOptions>;

export = pxtorem;
