declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly htmlDataProcessor: { new(editor: editor): htmlDataProcessor };
    }
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_htmlDataProcessor.html */
    interface htmlDataProcessor extends dataProcessor {
        dataFilter: htmlParser.filter;
        htmlFilter: htmlParser.filter;
        writer: htmlParser.basicWriter;

        toDataFormat(
            html: string,
            options?:
                | string
                | {
                    context?: string | undefined;
                    filter?: filter | undefined;
                    enterMode?: number | undefined;
                },
        ): string;

        toHtml(data: string, options?: string | htmlDataProcessorOptions): string;
    }

    /**
     * Note this is currently incorrect in the docs refer to github for details on this interface type:
     * https://github.com/ckeditor/ckeditor4/blob/b520aa2b406091dd378f77b5173a6249a2ddef38/core/htmldataprocessor.js#L238
     * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_htmlDataProcessor.html#method-toHtml
     */
    interface htmlDataProcessorOptions {
        context?: string | undefined;
        fixForBody?: boolean | undefined;
        filter?: filter | undefined;
        dontFilter?: boolean | undefined;
        enterMode?: number | undefined;
        protectedWhitespaces?: boolean | undefined;
    }
}
