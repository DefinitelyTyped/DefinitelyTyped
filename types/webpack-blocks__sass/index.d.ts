import { Block } from "webpack-blocks";

declare namespace sass {
    interface Options {
        includePaths?: string[] | undefined;
        indentedSyntax?: boolean | undefined;
        outputStyle?: string | undefined;
        sourceMap?: boolean | undefined;
    }
}

declare function sass(options?: sass.Options): Block;

export = sass;
