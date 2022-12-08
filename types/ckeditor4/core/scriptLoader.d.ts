// see https://docs.com/CKEDITOR4/latest/api/CKEDITOR_scriptLoader.html

declare namespace CKEDITOR {
    interface CKEditorStatic {
        scriptLoader: scriptLoader
    }

    class scriptLoader {
        private constructor()
        load(
            scriptUrls: string | string[],
            callback: (
                succeededUrls: boolean | string[],
                failedUrls: string[]
            ) => void,
            scope?: unknown,
            showBusy?: boolean
        ): void

        queue(
            scriptUrl: string,
            callback?: (succeeded: boolean) => void
        ): void
    }
}
