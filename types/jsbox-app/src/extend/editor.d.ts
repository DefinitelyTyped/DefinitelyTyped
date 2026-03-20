// JSBox Editor API TypeScript Declaration

interface JBEditor {
    text: string;
    view: UIView;
    selectedRange: JBRange;
    selectedText: string;
    hasText: boolean;
    isActive: boolean;
    canUndo: boolean;
    canRedo: boolean;

    save(): void;
    undo(): void;
    redo(): void;
    activate(): void;
    deactivate(): void;
    insertText(text: string): void;
    deleteBackward(): void;
    textInRange(range: JBRange): string;
    setTextInRange(text: string, range: JBRange): void;
}

declare const $editor: JBEditor;
