// JSBox Keyboard API TypeScript Declaration

interface JBKeyboard {
    insert(text: string): void;
    delete(): void;
    moveCursor(position: number): void;
    playInputClick(): void;
    readonly hasText: boolean;
    readonly selectedText: string;
    readonly textBeforeInput: string;
    readonly textAfterInput: string;
    getAllText(handler: (text: string) => void): void;
    next(): void;
    send(): void;
    dismiss(): void;
    barHidden: boolean;
    height: number;
}

declare const $keyboard: JBKeyboard;
