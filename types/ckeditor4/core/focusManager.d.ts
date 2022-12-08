declare namespace CKEDITOR {
    interface CKEditorStatic {
        focusManager: typeof focusManager;
    }

    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_focusManager.html */
    class focusManager {
        currentActive: dom.domObject;
        hasFocus: boolean;

        constructor(editor: editor);

        add(element: dom.element, isCapture: boolean): void;

        blur(noDelay?: boolean): void;

        focus(currentActive?: dom.element): void;

        lock(): void;

        remove(element: dom.element): void;

        unlock(): void;
    }
}
