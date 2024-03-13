import { PluginCreator } from "postcss";

declare namespace scope {
    interface Options {
        generateScopedName?:
            | ((
                name: string,
                path: string,
                css: string,
            ) => string)
            | undefined;

        generateExportEntry?:
            | ((
                name: string,
                scopedName: string,
                path: string,
                css: string,
            ) => { key: string; value: string })
            | undefined;

        exportGlobals?: boolean | undefined;
    }
}

declare const creator: PluginCreator<scope.Options>;
export = creator;
