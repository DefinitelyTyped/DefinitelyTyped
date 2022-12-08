declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly template: typeof template;
    }

    class template {
        readonly source: string;

        constructor(source: string);

        output(data: unknown, buffer?: unknown[]): string | number;
    }
}
