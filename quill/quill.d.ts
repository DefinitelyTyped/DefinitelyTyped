// Type definitions for quill.js
// Project: https://github.com/quilljs/quill/tree/0.20.1
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/Asana/DefinitelyTyped

declare module "quill" {
    class Quill {
        // we shouldn't be accessing the internal modules object, but we need
        // this for now to hide the warning for replacing paste-manager. We should
        // remove it after mergin our paste-manager PR into Quill.
        static modules: any;
        static DEFAULTS: Quill.QuillConfig;

        root: HTMLElement;
        options: Quill.QuillConfig;
        // by right we shouldn't access the editor attribute since it's not in the API
        // unfortunately we need to access the leaf nodes of the document model
        // for linkifications
        editor: Quill.Editor;

        static require(internalQuillModule: "delta"): Quill.DeltaClass;
        static require(internalQuillModule: string): any;
        static registerModule(name: string, moduleClass: Quill.ModuleClass): void;
        static registerTheme(name: string, theme: Quill.ThemeClass): void;

        addContainer(className: string): HTMLElement;
        constructor(container: HTMLElement, configs?: Quill.QuillConfig);
        addFormat(name: string, config: Quill.FormatConfig): boolean;
        deleteText(start: number, end: number): void;
        destroy(): void;
        focus(): void;
        formatText(start: number, end: number, format: Quill.Attributes, source?: string): void;
        formatText(start: number, end: number, format: string, value: string): void;
        formatLine(start: number, end: number, format: string, value: string, source?: string): void;
        getContents(): Quill.DeltaInit;
        getContents(start: number, end?: number): Quill.DeltaInit;
        getHTML(): string;
        getLength(): number;
        getModule(name: string): any;
        getSelection(): Quill.Range;
        getText(): string;
        getText(start: number, end: number): string;
        insertText(index: number, text: string, formats?: Quill.Attributes, source?: string): void;
        on(eventName: "text-change", listener: Quill.OnTextChangeListener): void;
        on(eventName: "selection-change", listener: Quill.OnSelectionChangeListener): void;
        on(eventName: string, listener: Quill.OnTextChangeListener | Quill.OnSelectionChangeListener): void;
        prepareFormat(format: string, value: string): void;
        setContents(delta: Quill.DeltaInit): void;
        setHTML(html: string): void;
        setSelection(start: number, end: number, source?: string): void;
        setText(text: string): void;
        updateContents(delta: Quill.Delta): void;
    }

    module Quill {
        export interface Editor {
            doc: Document;
            checkUpdate(): void;
        }

        interface LeafOffsetTuple extends Array<Leaf | number> {
            0: Leaf;
            1: number;
        }

        interface LineOffsetTuple extends Array<Line | number> {
            0: Line;
            1: number;
        }

        export interface Document {
            findLeafAt(point: number): LeafOffsetTuple;
            findLineAt(point: number): LineOffsetTuple;
        }

        export interface Leaf {
            prev?: Leaf;
            next?: Leaf;
            length: number;
            formats: Attributes;
        }

        export interface Line {
            prev?: Line;
            next?: Line;
            length: number;
            formats: Attributes;
        }

        export interface Attributes {
            background?: string;
            bold?: boolean;
            color?: string;
            font?: string;
            italic?: boolean;
            link?: string;
            size?: string;
            strike?: boolean;
            underline?: boolean;

            align?: string;
            bullet?: boolean;
            list?: boolean;

            image?: string;
        }

        export interface DeltaClass {
            new(): Quill.Delta;
            new<T extends Operation>(ops: T[]): Quill.DeltaOfType<T>;
            new(ops: Quill.DeltaOperation[]): Quill.Delta;
        }

        export interface ModuleClass {
            new(quill: Quill, option: any): any;
        }

        interface Operation {
            attributes?: Attributes;
        }

        interface QuillConfig {
            formats?: string[];
            modules?: {};
            pollInterval?: number;
            readOnly?: boolean;
            styles?: {};
            theme?: string;
        }

        export interface ThemeClass {
            new(quill: Quill, options: QuillConfig): {};
            OPTIONS: QuillConfig;
        }

        export interface InsertOperation extends Operation {
            insert: string|number;
        }

        export interface DeleteOperation extends Operation {
            delete: number;
        }

        export interface RetainOperation extends Operation {
            retain: number;
        }

        export type DeltaOperation = InsertOperation | DeleteOperation | RetainOperation;

        export interface DeltaOfType<T> {
            ops: Array<T>;
            length(): number;
            retain(characters: number): Delta;
            compose(other: Delta): Delta;
            diff(other: Delta): Delta;
        }

        export interface DeltaInit extends DeltaOfType<InsertOperation> { }

        export interface Delta extends DeltaOfType<DeltaOperation> { }

        export interface Range {
            start: number;
            end: number;
        }

        export interface FormatConfig {
            tag: string;
        }

        export interface OnTextChangeListener {
            (delta: Quill.Delta, source: string): void;
        }

        export interface OnSelectionChangeListener {
            (range: Quill.Range): void;
        }
    }

    export = Quill
}
