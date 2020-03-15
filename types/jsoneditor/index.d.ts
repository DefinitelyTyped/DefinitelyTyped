// Type definitions for jsoneditor v5.28.2
// Project: https://github.com/josdejong/jsoneditor
// Definitions by: Alejandro Sánchez <https://github.com/alejo90>
//                 Errietta Kostala <https://github.com/errietta>
//                 Adam Vigneaux <https://github.com/adamvig>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="ace" />

import { Ajv } from "ajv";

declare module 'jsoneditor' {
    type JSONPath = (string|number)[];

    export interface Node {
        field: string;
        value?: string;
        path: JSONPath;
    }

    export type JSONEditorMode = 'tree' | 'view' | 'form' | 'code' | 'text';

    export interface NodeName {
        path: ReadonlyArray<string>;
        type: 'object'|'array';
        size: number;
    }

    export interface ValidationError {
        path: JSONPath;
        message: string;
    }

    export interface Template {
        text: string;
        title: string;
        className?: string;
        field: string;
        value: any;
    }

    export type AutoCompleteCompletion = null|string[]|{startFrom: number, options: string[]};

    export type AutoCompleteOptionsGetter = (
        text: string, path: JSONPath, input: string, editor: JSONEditor,
    ) => AutoCompleteCompletion|Promise<AutoCompleteCompletion>;

    export interface AutoCompleteOptions {
        /**
         * @default [39, 35, 9]
         */
        confirmKeys?: number[];
        caseSensitive?: boolean;
        getOptions?: AutoCompleteOptionsGetter;
    }

    export interface SelectionPosition {
        row: number;
        column: number;
    }

    export interface SerializableNode {
        value: any;
        path: JSONPath;
    }

    // Based on the API of https://github.com/Sphinxxxx/vanilla-picker
    export interface Color {
        rgba: Array<number>;
        hsla: Array<number>;
        rgbString: string;
        rgbaString: string;
        hslString: string;
        hslaString: string;
        hex: string;
    }

    export interface JSONEditorOptions {
        ace?: AceAjax.Ace;
        ajv?: Ajv;
        onChange?: () => void;
        onChangeJSON?: (json: any) => void;
        onChangeText?: (jsonString: string) => void;
        onEditable?: (node: Node) => boolean|{field: boolean, value: boolean};
        onError?: (error: Error) => void;
        onModeChange?: (newMode: JSONEditorMode, oldMode: JSONEditorMode) => void;
        onNodeName?: (nodeName: NodeName) => string|undefined;
        onValidate?: (json: any) => ValidationError[]|Promise<ValidationError[]>;
        /**
         * @default false
         */
        escapeUnicode?: boolean;
        /**
         * @default false
         */
        sortObjectKeys?: boolean;
        /**
         * @default true
         */
        history?: boolean;
        /**
         * @default 'tree'
         */
        mode?: JSONEditorMode;
        modes?: JSONEditorMode[];
        /**
         * @default undefined
         */
        name?: string;
        schema?: object;
        schemaRefs?: object;
        /**
         * @default true
         */
        search?: boolean;
        /**
         * @default 2
         */
        indentation?: number;
        theme?: string;
        templates?: Template[];
        autocomplete?: AutoCompleteOptions;
        /**
         * @default true
         */
        mainMenuBar?: boolean;
        /**
         * @default true
         */
        navigationBar?: boolean;
        /**
         * @default true
         */
        statusBar?: boolean;
        onTextSelectionChange?: (start: SelectionPosition, end: SelectionPosition, text: string) => void;
        onSelectionChange?: (start: SerializableNode, end: SerializableNode) => void;
        onEvent?: (node: Node, event: string) => void;
        /**
         * @default true
         */
        colorPicker?: boolean;
        onColorPicker?: (parent: HTMLElement, color: string, onChange: (color: Color) => void) => void;
        /**
         * @default true
         */
        timestampTag?: boolean;
        language?: string;
        languages?: {
            [lang: string]: {
                [key: string]: string;
            };
        };
        modalAnchor?: HTMLElement;
        /**
         * @default true
         */
        enableSort?: boolean;
        /**
         * @default true
         */
        enableTransform?: boolean;
        /**
         * @default 100
         */
        maxVisibleChilds?: number;

    }

    export default class JSONEditor {
        constructor(container: HTMLElement, options?: JSONEditorOptions, json?: any);
        collapseAll(): void;
        destroy(): void;
        expandAll(): void;
        focus(): void;
        get(): any;
        getMode(): JSONEditorMode;
        getName(): string|undefined;
        getNodesByRange(start: {path: JSONPath}, end: {path: JSONPath}): Array<SerializableNode>;
        getSelection(): {start: SerializableNode, end: SerializableNode};
        getText(): string;
        getTextSelection(): {start: SelectionPosition, end: SelectionPosition, text: string};
        refresh(): void;
        set(json: any): void;
        setMode(mode: JSONEditorMode): void;
        setName(name?: string): void;
        setSchema(schema: object, schemaRefs?: object): void;
        setSelection(start: {path: JSONPath}, end: {path: JSONPath}): void;
        setText(jsonString: string): void;
        setTextSelection(start: SelectionPosition, end: SelectionPosition): void;
        update(json: any): void;
        updateText(jsonString: string): void;
        format?: () => void;
        compact?: () => void;
        repair?: () => void;

        static VALID_OPTIONS: Array<string>;
        static ace: AceAjax.Ace;
        static Ajv: Ajv;
        static VanillaPicker: any;
    }
}
