import { Plugin } from "webpack";

export = GenerateJsonWebpackPlugin;

declare class GenerateJsonWebpackPlugin extends Plugin {
    constructor(
        fileName: string,
        value: object,
        replacer?: ((key: string, value: any) => any) | null,
        space?: string | number | null,
    );
}
