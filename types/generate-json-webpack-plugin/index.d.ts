import { Compiler, WebpackPluginInstance } from "webpack";

export = GenerateJsonWebpackPlugin;

declare class GenerateJsonWebpackPlugin implements WebpackPluginInstance {
    constructor(
        fileName: string,
        value: object,
        replacer?: ((key: string, value: any) => any) | null,
        space?: string | number | null,
    );

    apply: (compiler: Compiler) => void;
}
