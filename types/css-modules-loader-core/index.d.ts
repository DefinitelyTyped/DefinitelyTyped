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
        depTrace: string,
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
        pathFetcher?: Core.PathFetcher,
    ): Promise<Core.Result>;
}

export = Core;
export as namespace Core;
