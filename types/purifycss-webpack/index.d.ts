import * as webpack from "webpack";

declare class PurifyPlugin extends webpack.Plugin {
    constructor(options?: PurifyOptions);
}

interface PurifyOptions {
    styleExtensions?: string[] | undefined;
    moduleExtensions?: string[] | undefined;
    minimize?: boolean | undefined;
    paths?: object | string[] | undefined;
    purifyOptions?: {
        minify?: boolean | undefined;
        output?: string | boolean | undefined;
        info?: boolean | undefined;
        rejected?: boolean | undefined;
        whitelist?: string[] | undefined;
    } | undefined;
    verbose?: boolean | undefined;
}

export = PurifyPlugin;
