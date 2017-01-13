// Type definitions for jsoneditor v5.5.7
// Project: https://github.com/josdejong/jsoneditor
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="ace" />

declare module 'jsoneditor' {
    export interface JSONEditorNode {
        field: string;
        value: string;
        path: Array<string>;
    }

    export type JSONEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

    export interface JSONEditorOptions {
        ace?: AceAjax.Ace;
        ajv?: any; // Any for now, since ajv typings aren't A-Ok
        onChange?: () => void;
        onEditable?: (node: JSONEditorNode) => boolean | {field: boolean, value: boolean};
        onError?: (error: Error) => void;
        onModeChange?: (newMode: JSONEditorMode, oldMode: JSONEditorMode) => void;
        escapeUnicode?: boolean;
        sortObjectKeys?: boolean;
        history?: boolean;
        mode?: JSONEditorMode;
        modes?: Array<JSONEditorMode>;
        name?: string;
        schema?: Object;
        search?: boolean;
        indentation?: number;
        theme?: string;
    }

    export default class JSONEditor {
        constructor(container: HTMLElement, options?: JSONEditorOptions, json?: Object);
        collapseAll(): void;
        destroy(): void;
        expandAll(): void;
        focus(): void;
        set(json: Object): void;
        setMode(mode: JSONEditorMode): void;
        setName(name?: string): void;
        setSchema(schema: Object): void;
        setText(jsonString: string): void;
        get(): any;
        getMode(): JSONEditorMode;
        getName(): string;
        getText(): string;
    }
}
