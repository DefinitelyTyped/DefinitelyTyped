declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly styleCommand: { new(style: style, ext?: unknown): styleCommand };
    }

    interface styleCommand {
        exec(editor: editor): void;
    }
}
