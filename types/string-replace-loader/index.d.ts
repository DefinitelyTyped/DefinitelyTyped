// Type definitions for string-replace-loader 2.3
// Project: https://github.com/Va1/string-replace-loader
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
        flags?: string;
        strict?: boolean;
    }

    interface ReplaceCallback {
        (substring: string, ...args: any[]): string;
    }
}

export = loader;
