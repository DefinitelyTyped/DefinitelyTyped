// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_resourceManager

declare namespace CKEDITOR {
    interface resourceManagerStatic {
        new(basePath: string, fileName: string): resourceManager;
    }
    interface resourceManager {
        basePath: string;
        externals: { [key: string]: unknown };
        fileName: string;
        loaded: { [key: string]: unknown };
        registered: { [key: string]: unknown };

        add(name: string, definition?: pluginDefinition): void;

        addExternal(names: string, path: string, fileName?: string): void;

        get(name: string): pluginDefinition;

        getFilePath(name: string): string;

        getPath(name: string): string;

        load(name: string | string[], callback: (loaded: string[]) => void, scope?: { [key: string]: unknown }): void;
    }
}
