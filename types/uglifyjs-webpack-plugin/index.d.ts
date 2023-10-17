import { Plugin } from "webpack";

export = UglifyJsPlugin;

declare class UglifyJsPlugin extends Plugin {
    constructor(options?: UglifyJsPlugin.UglifyJsPluginOptions);
}

declare namespace UglifyJsPlugin {
    interface UglifyJsPluginOptions {
        test?: RegExp | RegExp[] | undefined;
        include?: RegExp | RegExp[] | undefined;
        exclude?: RegExp | RegExp[] | undefined;
        cache?: boolean | string | undefined;
        parallel?: boolean | number | undefined;
        sourceMap?: boolean | undefined;
        uglifyOptions?: UglifyJsOptions | undefined;
        extractComments?:
            | boolean
            | RegExp
            | ((node: object, comment: string) => boolean)
            | ExtractCommentsOptions
            | undefined;
        warningsFilter?: ((source: string) => boolean) | undefined;
    }

    interface UglifyJsOptions {
        ie8?: boolean | undefined;
        ecma?: number | undefined;
        parse?: object | undefined;
        mangle?: boolean | object | undefined;
        output?: object | undefined;
        compress?: boolean | object | undefined;
        warnings?: boolean | undefined;
        toplevel?: boolean | undefined;
        nameCache?: object | undefined;
        keep_classnames?: boolean | undefined;
        keep_fnames?: boolean | undefined;
        safari10?: boolean | undefined;
    }

    interface ExtractCommentsOptions {
        condition?: RegExp | ((node: object, comment: string) => boolean) | undefined;
        filename?: string | ((originalFileName: string) => string) | undefined;
        banner?: boolean | string | ((fileName: string) => string) | undefined;
    }
}
