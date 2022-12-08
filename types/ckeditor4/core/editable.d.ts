declare namespace CKEDITOR {
    interface CKEditorStatic {
        editable: typeof editable;
    }
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_editable.html */
    class editable extends dom.element {
        hasFocus: boolean;
        readonly status: string;

        constructor(editor: editor, element: HTMLElement | dom.element);

        attachClass(className: string): void;

        attachListener(
            obj: event | editable,
            eventName: string,
            listenerFunction: (ei: eventInfo) => void,
            scopeobj?: unknown,
            listenerData?: unknown,
            priority?: number,
        ): listenerRegistration;

        changeAttr(attr: string, val: string): void;

        detach(): void;

        insertElement(element: dom.element, range?: dom.range): void;

        insertHtml(data: string, mode?: string, range?: dom.range): void;

        insertText(text: dom.text): void;

        isInline(): boolean;

        setReadOnly(isReadOnly: boolean): void;
    }
}
