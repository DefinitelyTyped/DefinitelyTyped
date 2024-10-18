import { Plugin } from "webpack";

declare class LibraryExportDefaultPlugin extends Plugin {
    constructor(entryPointNames: string[]);
}

export = LibraryExportDefaultPlugin;
