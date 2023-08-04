declare namespace CKEDITOR {
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_loader.html */
    interface CKEditorStatic {
        readonly loader: loader;
    }

    // Singleton
    interface loader {
        loadedScripts: string[];
        scripts: string[];

        load(scriptName: string, defer?: boolean): void;

        loadPending(): void;
    }
}
