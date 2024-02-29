import * as Webpack from "webpack";

declare const loader: Webpack.loader.Loader;

declare namespace loader {
    type Options = ReplaceEntry | ReplaceEntries;

    interface ReplaceEntries {
        multiple: ReplaceEntry[];
    }

    interface ReplaceEntry {
        search: string | RegExp;
        replace: string | ReplaceCallback;
        flags?: string | undefined;
        strict?: boolean | undefined;
    }

    interface ReplaceCallback {
        (substring: string, ...args: any[]): string;
    }
}

export = loader;
