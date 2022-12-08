declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly styleCommand: typeof styleCommand;
    }
    class styleCommand {
        constructor(style: style, ext?: unknown);

        exec(editor: editor): void;
    }
}
