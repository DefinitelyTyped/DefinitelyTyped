declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly editable: { new(editor: editor, element: HTMLElement | dom.element): editable };
    }
    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_editable.html */
    interface editable extends dom.element {
        hasFocus: boolean;
        readonly status: string;

        attachClass(className: string): void;

        attachListener(
            obj: event | editable,
            eventName: string,
            listenerFunction: (
                ei: eventInfo<
                    | dom.domObject<Event | EventTarget>
                    | dom.event<Event | EventTarget>
                    | eventData
                >,
            ) => void,
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
