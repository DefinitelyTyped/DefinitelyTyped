/** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_lang.html */

declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly lang: lang;
    }
    interface lang {
        languages: { [code: string]: number };
        rtl: { [code: string]: number };

        detect(defaultLanguage: string, probeLanguage?: string): string;

        load(languageCode: string, defaultLanguage: string, callback: (code: string, entries: unknown) => void): void;
    }
}
