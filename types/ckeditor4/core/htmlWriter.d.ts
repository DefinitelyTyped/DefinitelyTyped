declare namespace CKEDITOR {
    interface CKEditorStatic {
        htmlWriter: typeof htmlWriter
    }
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_htmlWriter.html */
    class htmlWriter extends htmlParser.basicWriter {
        indentationChars: string
        lineBreakChars: string
        selfClosingEnd: string

        indentation(): void

        lineBreak(): void

        setRules(tagName: string, rules: { [key: string]: unknown }): void
    }
}
