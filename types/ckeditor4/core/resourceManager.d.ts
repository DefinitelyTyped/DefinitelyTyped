// https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_resourceManager

declare namespace CKEDITOR {
    class resourceManager {
        basePath: string;
        externals: { [key: string]: unknown };
        fileName: string;
        loaded: { [key: string]: unknown };
        registered: { [key: string]: unknown };

        constructor(basePath: string, fileName: string);

        add(name: string, definition?: pluginDefinition): void;

        addExternal(names: string, path: string, fileName?: string): void;

        get(name: string): pluginDefinition;

        getFilePath(name: string): string;

        getPath(name: string): string;

        load(name: string | string[], callback: (loaded: string[]) => void, scope?: { [key: string]: unknown }): void;
    }
}
