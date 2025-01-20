import { IOptions } from "glob";
import { EntryFunc, Plugin } from "webpack";

interface PluginOptions {
    basename_as_entry_name?: boolean | undefined;
}

declare class WebpackWatchedGlobEntries extends Plugin {
    static getEntries(globs: string[], globOptions?: IOptions, pluginOptions?: PluginOptions): EntryFunc;
    static getFiles(
        globString: string,
        globOptions?: IOptions,
        basename_as_entry_name?: boolean,
    ): Record<string, string>;
}

export = WebpackWatchedGlobEntries;
