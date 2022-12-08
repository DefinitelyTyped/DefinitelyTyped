/** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_lang.html */

declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly lang: lang
    }
    class lang {
        languages: { [code: string]: number }
        rtl: { [code: string]: number }

        private constructor()



        detect(defaultLanguage: string, probeLanguage?: string): string

        load(
            languageCode: string,
            defaultLanguage: string,
            callback: (code: string, entries: unknown) => void
        ): void
    }
}
