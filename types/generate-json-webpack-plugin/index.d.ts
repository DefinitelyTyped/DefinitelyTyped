import webpack = require("webpack");

export = GenerateJsonWebpackPlugin;

declare class GenerateJsonWebpackPlugin implements webpack.WebpackPluginInstance {
    constructor(
        fileName: string,
        value: object,
        replacer?: ((key: string, value: any) => any) | null,
        space?: string | number | null,
    );

    apply: (compiler: webpack.Compiler) => void;
}
