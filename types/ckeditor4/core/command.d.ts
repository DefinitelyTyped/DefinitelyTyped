declare namespace CKEDITOR {
    /** https://CKEDITOR.com/docs/CKEDITOR4/latest/api/CKEDITOR_command.html */
    class command extends event implements commandDefinition {
        fakeKeystroke: number;
        previousState: number;
        state: number;
        uiItems: any[];

        // Methods
        constructor(editor: editor, commandDefinition: commandDefinition);
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
