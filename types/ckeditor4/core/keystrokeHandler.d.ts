/** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_keystrokeHandler.html */

declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly keystrokeHandler: { new(editor: editor): keystrokeHandler };
    }
    interface keystrokeHandler {
        blockedKeystrokes: { [key: number]: string | boolean };
        keystrokes: { [key: number]: string | boolean };

        attach(domObject: dom.domObject): void;
    }
}
