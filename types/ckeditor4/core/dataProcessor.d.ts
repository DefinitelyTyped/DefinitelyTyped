declare namespace CKEDITOR {
    /**
     * https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dataProcessor.html
     */
    interface dataProcessor {
        toDataFormat(html: string, fixForBody: string): void;

        toHtml(data: string, fixForBody?: string): void;
    }
}
