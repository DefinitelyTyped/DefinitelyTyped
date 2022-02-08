import { Control } from './Control';

export class CodeEditorControl extends Control {
    initEditor(): void;
    focus(params: any): void; // TODO
    initSyntaxHighlightingEditor(codeEditorSettings: any): void; // TODO
    onTabNext(): void;
    onTabPrevious(): void;
    onUpdateErrorNotice(errorAnnotations: ReadonlyArray<any>): void; // TODO
    initPlainTextareaEditor(): void;
}
