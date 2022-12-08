/** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_keystrokeHandler.html */

declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly keystrokeHandler: typeof keystrokeHandler
    }
    class keystrokeHandler {
        blockedKeystrokes: { [key: number]: string | boolean }
        keystrokes: { [key: number]: string | boolean }

        constructor(editor: editor)

        attach(domObject: dom.domObject): void
    }
}
