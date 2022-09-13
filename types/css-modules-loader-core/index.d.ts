// Type definitions for css-modules-loader-core 1.1
// Project: https://github.com/css-modules/css-modules-loader-core
// Definitions by: Spencer Miskoviak <https://github.com/skovy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Plugin } from "postcss";

declare namespace Core {
    type Source =
        | string
        | {
              toString(): string;
          };

    type PathFetcher = (
        file: string,
        relativeTo: string,
        depTrace: string
    ) => void;

    interface ExportTokens {
        [index: string]: string;
    }

    interface Result {
        injectableSource: string;
        exportTokens: ExportTokens;
    }
}

declare class Core {
    static values: Plugin<{}>;
    static localByDefault: Plugin<{}>;
    static extractImports: Plugin<{}>;
    static scope: Plugin<{}>;
    static defaultPlugins: Array<Plugin<{}>>;

    constructor(plugins?: Array<Plugin<any>>);

    load(
        source: Core.Source,
        sourcePath?: string,
        trace?: string,
        pathFetcher?: Core.PathFetcher
    ): Promise<Core.Result>;
}

export = Core;
export as namespace Core;
