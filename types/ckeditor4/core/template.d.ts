declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly template: { new(source: string): template };
    }

    interface template {
        readonly source: string;

        output(data: unknown, buffer?: unknown[]): string | number;
    }
}
