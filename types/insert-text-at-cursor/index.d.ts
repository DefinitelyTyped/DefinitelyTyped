// Type definitions for insert-text-at-cursor 0.3
// Project: https://github.com/grassator/insert-text-at-cursor#readme
// Definitions by: Christophe Coevoet <https://github.com/stof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace insertTextAtCursor;

export = insertTextAtCursor;

declare function insertTextAtCursor(input: HTMLTextAreaElement | HTMLInputElement, text: string): void;
