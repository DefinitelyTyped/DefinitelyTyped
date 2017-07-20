// Type definitions for Quill 1.3
// Project: https://github.com/quilljs/quill/
// Definitions by: Sumit <https://github.com/sumitkm>
//                 Guillaume <https://github.com/guillaume-ro-fr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A stricter type definition would be:
 *
 *   type DeltaOperation ({ insert: any } | { delete: number } | { retain: number }) & OptionalAttributes;
 *
 *  But this would break a lot of existing code as it would require manual discrimination of the union types.
 */
export type DeltaOperation = { insert?: any, delete?: number, retain?: number } & OptionalAttributes;
export type Sources = "api" | "user" | "silent";

export interface Key {
    key: string;
    shortKey?: boolean;
}

export interface StringMap {
    [key: string]: any;
}

export interface OptionalAttributes {
    attributes?: StringMap;
}

export type TextChangeHandler = (delta: DeltaStatic, oldContents: DeltaStatic, source: Sources) => any;
export type SelectionChangeHandler = (range: RangeStatic, oldRange: RangeStatic, source: Sources) => any;
export type EditorChangeHandler = ((name: "text-change", delta: DeltaStatic, oldContents: DeltaStatic, source: Sources) => any)
    | ((name: "selection-change", range: RangeStatic, oldRange: RangeStatic, source: Sources) => any);

export interface KeyboardStatic {
    addBinding(key: Key, callback: (range: RangeStatic, context: any) => void): void;
    addBinding(key: Key, context: any, callback: (range: RangeStatic, context: any) => void): void;
}

export interface ClipboardStatic {
    addMatcher(selectorOrNodeType: string|number, callback: (node: any, delta: DeltaStatic) => DeltaStatic): void;
    dangerouslyPasteHTML(html: string, source?: Sources): void;
    dangerouslyPasteHTML(index: number, html: string, source?: Sources): void;
}

export interface QuillOptionsStatic {
    debug?: string;
    modules?: StringMap;
    placeholder?: string;
    readOnly?: boolean;
    theme?: string;
    formats?: string[];
    bounds?: HTMLElement | string;
}

export interface BoundsStatic {
    left: number;
    top: number;
    height: number;
    width: number;
}

export interface DeltaStatic {
    ops?: DeltaOperation[];
    retain(length: number, attributes?: StringMap): DeltaStatic;
    delete(length: number): DeltaStatic;
    filter(predicate: (op: DeltaOperation) => boolean): DeltaOperation[];
    forEach(predicate: (op: DeltaOperation) => void): void;
    insert(text: any, attributes?: StringMap): DeltaStatic;
    map<T>(predicate: (op: DeltaOperation) => T): T[];
    partition(predicate: (op: DeltaOperation) => boolean): [DeltaOperation[], DeltaOperation[]];
    reduce<T>(predicate: (acc: T, curr: DeltaOperation, idx: number, arr: DeltaOperation[]) => T, initial: T): T;
    chop(): DeltaStatic;
    length(): number;
    slice(start?: number, end?: number): DeltaStatic;
    compose(other: DeltaStatic): DeltaStatic;
    concat(other: DeltaStatic): DeltaStatic;
    diff(other: DeltaStatic, index?: number): DeltaStatic;
    eachLine(predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => any, newline?: string): DeltaStatic;
    transform(index: number): number;
    transform(other: DeltaStatic, priority: boolean): DeltaStatic;
    transformPosition(index: number): number;
}

export class Delta implements DeltaStatic {
    constructor(ops?: DeltaOperation[] | { ops: DeltaOperation[] });
    ops?: DeltaOperation[];
    retain(length: number, attributes?: StringMap): DeltaStatic;
    delete(length: number): DeltaStatic;
    filter(predicate: (op: DeltaOperation) => boolean): DeltaOperation[];
    forEach(predicate: (op: DeltaOperation) => void): void;
    insert(text: any, attributes?: StringMap): DeltaStatic;
    map<T>(predicate: (op: DeltaOperation) => T): T[];
    partition(predicate: (op: DeltaOperation) => boolean): [DeltaOperation[], DeltaOperation[]];
    reduce<T>(predicate: (acc: T, curr: DeltaOperation, idx: number, arr: DeltaOperation[]) => T, initial: T): T;
    chop(): DeltaStatic;
    length(): number;
    slice(start?: number, end?: number): DeltaStatic;
    compose(other: DeltaStatic): DeltaStatic;
    concat(other: DeltaStatic): DeltaStatic;
    diff(other: DeltaStatic, index?: number): DeltaStatic;
    eachLine(predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => any, newline?: string): DeltaStatic;
    transform(index: number): number;
    transform(other: DeltaStatic, priority: boolean): DeltaStatic;
    transformPosition(index: number): number;
}

export interface RangeStatic {
    index: number;
    length: number;
}

export class RangeStatic implements RangeStatic {
    constructor();
    index: number;
    length: number;
}

export interface EventEmitter {
    on(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
    on(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
    on(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
    once(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
    once(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
    once(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
    off(eventName: "text-change", handler: TextChangeHandler): EventEmitter;
    off(eventName: "selection-change", handler: SelectionChangeHandler): EventEmitter;
    off(eventName: "editor-change", handler: EditorChangeHandler): EventEmitter;
}

export interface Quill extends EventEmitter {
    /**
     * @private Internal API
     */
    root: HTMLDivElement;
    clipboard: ClipboardStatic;
    deleteText(index: number, length: number, source?: Sources): DeltaStatic;
    disable(): void;
    enable(enabled?: boolean): void;
    getContents(index?: number, length?: number): DeltaStatic;
    getLength(): number;
    getText(index?: number, length?: number): string;
    insertEmbed(index: number, type: string, value: any, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, format: string, value: any, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, formats: StringMap, source?: Sources): DeltaStatic;
    /**
     * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(index: number, html: string, source: Sources)
     */
    pasteHTML(index: number, html: string, source?: Sources): string;
    /**
     * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(html: string, source: Sources): void;
     */
    pasteHTML(html: string, source?: Sources): string;
    setContents(delta: DeltaStatic, source?: Sources): DeltaStatic;
    setText(text: string, source?: Sources): DeltaStatic;
    update(source?: Sources): void;
    updateContents(delta: DeltaStatic, source?: Sources): DeltaStatic;

    format(name: string, value: any, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, format: string, value: any, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, formats: StringMap, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, format: string, value: any, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, formats: StringMap, source?: Sources): DeltaStatic;
    getFormat(range?: RangeStatic): StringMap;
    getFormat(index: number, length?: number): StringMap;
    removeFormat(index: number, length: number, source?: Sources): DeltaStatic;

    blur(): void;
    focus(): void;
    getBounds(index: number, length?: number): BoundsStatic;
    getSelection(focus?: boolean): RangeStatic;
    hasFocus(): boolean;
    setSelection(index: number, length: number, source?: Sources): void;
    setSelection(range: RangeStatic, source?: Sources): void;

    debug(level: string|boolean): void;
    import(path: string): any;
    register(path: string, def: any, suppressWarning?: boolean): void;
    register(defs: StringMap, suppressWarning?: boolean): void;
    addContainer(classNameOrDomNode: string|Node, refNode?: Node): any;
    getModule(name: string): any;

    // Blot interface is not exported on Parchment
    find(domNode: Node, bubble?: boolean): Quill | any;
    getIndex(blot: any): number;
    getLeaf(index: number): any;
    getLine(index: number): [any, number];
    getLines(index?: number, length?: number): any[];
    getLines(range: RangeStatic): any[];
}

export class Quill implements Quill {
    /**
     * @private Internal API
     */
    root: HTMLDivElement;
    clipboard: ClipboardStatic;
    constructor(container: string | Element, options?: QuillOptionsStatic);
    deleteText(index: number, length: number, source?: Sources): DeltaStatic;
    disable(): void;
    enable(enabled?: boolean): void;
    getContents(index?: number, length?: number): DeltaStatic;
    getLength(): number;
    getText(index?: number, length?: number): string;
    insertEmbed(index: number, type: string, value: any, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, format: string, value: any, source?: Sources): DeltaStatic;
    insertText(index: number, text: string, formats: StringMap, source?: Sources): DeltaStatic;
    /**
     * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(index: number, html: string, source: Sources)
     */
    pasteHTML(index: number, html: string, source?: Sources): string;
    /**
     * @deprecated Remove in 2.0. Use clipboard.dangerouslyPasteHTML(html: string, source: Sources): void;
     */
    pasteHTML(html: string, source?: Sources): string;
    setContents(delta: DeltaStatic, source?: Sources): DeltaStatic;
    setText(text: string, source?: Sources): DeltaStatic;
    update(source?: Sources): void;
    updateContents(delta: DeltaStatic, source?: Sources): DeltaStatic;

    format(name: string, value: any, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, format: string, value: any, source?: Sources): DeltaStatic;
    formatLine(index: number, length: number, formats: StringMap, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, format: string, value: any, source?: Sources): DeltaStatic;
    formatText(index: number, length: number, formats: StringMap, source?: Sources): DeltaStatic;
    getFormat(range?: RangeStatic): StringMap;
    getFormat(index: number, length?: number): StringMap;
    removeFormat(index: number, length: number, source?: Sources): DeltaStatic;

    blur(): void;
    focus(): void;
    getBounds(index: number, length?: number): BoundsStatic;
    getSelection(focus?: boolean): RangeStatic;
    hasFocus(): boolean;
    setSelection(index: number, length: number, source?: Sources): void;
    setSelection(range: RangeStatic, source?: Sources): void;

    debug(level: string|boolean): void;
    import(path: string): any;
    register(path: string, def: any, suppressWarning?: boolean): void;
    register(defs: StringMap, suppressWarning?: boolean): void;
    addContainer(classNameOrDomNode: string|Node, refNode?: Node): any;
    getModule(name: string): any;

    // Blot interface is not exported on Parchment
    find(domNode: Node, bubble?: boolean): Quill | any;
    getIndex(blot: any): number;
    getLeaf(index: number): any;
    getLine(index: number): [any, number];
    getLines(index?: number, length?: number): any[];
    getLines(range: RangeStatic): any[];
}
