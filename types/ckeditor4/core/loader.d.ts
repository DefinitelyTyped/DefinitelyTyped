declare namespace CKEDITOR {
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_loader.html */
    interface CKEditorStatic {
        readonly loader: loader;
    }

    // Singleton
    class loader {
        private constructor();

        loadedScripts: string[];
        scripts: string[];

        load(scriptName: string, defer?: boolean): void;

        loadPending(): void;
    }
}
