declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly focusManager: { new(editor: editor): focusManager };
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_focusManager.html */
    interface focusManager {
        currentActive: dom.domObject;
        hasFocus: boolean;

        add(element: dom.element, isCapture: boolean): void;

        blur(noDelay?: boolean): void;

        focus(currentActive?: dom.element): void;

        lock(): void;

        remove(element: dom.element): void;

        unlock(): void;
    }
}
