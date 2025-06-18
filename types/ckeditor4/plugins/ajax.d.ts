declare namespace CKEDITOR {
    interface CKEditorStatic {
        // Ajax is an optional plugin
        ajax?: ajax;
    }
    // singleton
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_ajax.html */
    interface ajax {
        load(url: string, callback?: (data: any) => void): string;
        loadXml(url: string, callback?: (data: any) => void): xml;
        post(url: string, data: any, contentType?: string, callback?: (data: any) => void): void;
    }
}
