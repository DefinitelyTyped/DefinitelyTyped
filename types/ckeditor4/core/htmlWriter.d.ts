declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly htmlWriter: { new(): htmlWriter };
    }
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_htmlWriter.html */
    interface htmlWriter extends htmlParser.basicWriter {
        indentationChars: string;
        lineBreakChars: string;
        selfClosingEnd: string;

        indentation(): void;

        lineBreak(): void;

        setRules(tagName: string, rules: { [key: string]: unknown }): void;
    }
}
