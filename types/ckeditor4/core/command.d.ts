declare namespace CKEDITOR {
    interface CKEditorStatic {
        command: commandConstructor;
    }

    interface commandConstructor extends eventConstructor<command> {
        new(editor: editor, commandDefinition: commandDefinition): command;
    }

    /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_command.html */
    interface command extends event, commandDefinition {
        fakeKeystroke: number;
        previousState: number;
        state: number;
        uiItems: any[];

        // Methods
        checkAllowed(noCache: boolean): boolean;
        disable(): void;
        enable(): void;
        exec(data?: { [key: string]: any }): boolean;
        refresh(editor: editor, path: dom.elementPath): void;
        setState(newState: number): boolean;
        toggleState(): void;
    }

    interface commandDefinition {
        async?: boolean | undefined;
        canUndo?: boolean | undefined;
        context?: boolean | undefined;
        contextSensitive?: boolean | undefined;
        editorFocus?: boolean | undefined;
        fakeKeystroke?: number | undefined;
        modes?: { [key: string]: any } | undefined;
        startDisabled?: boolean | undefined;
        readOnly?: boolean | undefined;
        exec(editor: editor, data?: any): boolean;
        refresh?(editor: editor, path: dom.elementPath): void;
    }
}
