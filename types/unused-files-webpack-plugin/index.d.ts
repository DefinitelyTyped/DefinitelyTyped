import { Plugin } from "webpack";

export interface Options {
    patterns?: string[] | undefined;
    failOnUnused: boolean;
    globOptions?: {
        ignore?: string | string[] | undefined;
    } | undefined;
    ignore?: string | string[] | undefined;
    cwd?: string | undefined;
}

export class UnusedFilesWebpackPlugin extends Plugin {
    constructor(options: Options);
}
