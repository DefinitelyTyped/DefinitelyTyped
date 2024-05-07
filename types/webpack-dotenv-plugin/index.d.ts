import * as webpack from "webpack";

declare namespace WebpackDotenvPlugin {
    interface Options {
        path?: string | undefined;
        sample?: string | undefined;
        silent?: boolean | undefined;
        encoding?: string | undefined;
        allowEmptyValues?: boolean | undefined;
    }
}

declare class WebpackDotenvPlugin extends webpack.Plugin {
    constructor(options?: WebpackDotenvPlugin.Options);
}

export = WebpackDotenvPlugin;
