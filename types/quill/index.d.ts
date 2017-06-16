// Type definitions for Quill
// Project: https://github.com/quilljs/quill/
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Quill {

    type Key = { key: string, shortKey?: boolean };
    type Sources = "api" | "user" | "silent";
    type StringMap = { [key: string]: any };
    type OptionalAttributes = { attributes?: StringMap };
    /**
     * A stricter type definition would be:
     *
     *   type DeltaOperation ({ insert: any } | { delete: number } | { retain: number }) & OptionalAttributes;
     *
     *  But this would break a lot of existing code as it would require manual discrimination of the union types.
     */
    type DeltaOperation = StringMap & OptionalAttributes;

    export interface KeyboardStatic {
        addBinding(key: Key, callback: (range: RangeStatic, context: any) => void): void;
        addBinding(key: Key, context: any, callback: (range: RangeStatic, context: any) => void) : void;
    }

    export interface ClipboardStatic {
        addMatcher(selector: string, callback: (node: any, delta: DeltaStatic) => DeltaStatic) : void;
        addMatcher(nodeType: number, callback: (node: any, delta: DeltaStatic) => DeltaStatic) : void;
        dangerouslyPasteHTML(html: string, source?: Sources): void;
        dangerouslyPasteHTML(index: number, html: string, source?: Sources): void;
    }

    export interface QuillOptionsStatic {
        debug?: string,
        modules?: StringMap,
        placeholder?: string,
        readOnly?: boolean,
        theme?: string,
        formats?: string[]
    }

    export interface BoundsStatic {
        left: number,
        top: number,
        height: number,
        width: number
    }

    export interface DeltaStatic {
        new (ops?: DeltaOperation[] | { ops: DeltaOperation[] }) : DeltaStatic;
        ops?: DeltaOperation[];
        retain(length: number, attributes?: StringMap) : DeltaStatic;
        delete(length: number) : DeltaStatic;
        filter(predicate: (op: DeltaOperation) => boolean) : DeltaOperation[];
        forEach(predicate: (op: DeltaOperation) => void) : void;
        insert(text: any, attributes?: StringMap): DeltaStatic;
        map<T>(predicate: (op: DeltaOperation) => T) : T[];
        partition(predicate: (op: DeltaOperation) => boolean) : [DeltaOperation[], DeltaOperation[]];
        reduce<T>(predicate: (acc: T, curr: DeltaOperation, idx: number, arr: DeltaOperation[]) => T, initial: T): T;
        chop() : DeltaStatic;
        length(): number;
        slice(start?: number, end?: number): DeltaStatic;
        compose(other: DeltaStatic): DeltaStatic;
        concat(other: DeltaStatic): DeltaStatic;
        diff(other: DeltaStatic, index?: number) : DeltaStatic;
        eachLine(predicate: (line: DeltaStatic, attributes: StringMap, idx: number) => any, newline?: string) : DeltaStatic;
        transform(index: number) : DeltaStatic;
        transform(other: DeltaStatic, priority: boolean) : DeltaStatic;
        transformPosition(index: number) : DeltaStatic;
    }

    export interface RangeStatic {
        new (): RangeStatic;
        index: number;
        length: number;
    }

    export interface Quill {
        new (container: string | Element, options?: QuillOptionsStatic): Quill;
        deleteText(index: number, length: number, source?: Sources): void;
        disable(): void;
        enable(enabled?: boolean): void;
        getContents(index?: number, length?: number): DeltaStatic;
        getLength(): number;
        getText(index?: number, length?: number): string;
        insertEmbed(index: number, type: string, value: any, source?: Sources): void;
        insertText(index: number, text: string, source?: Sources): DeltaStatic;
        insertText(index: number, text: string, format: string, value: any, source?: Sources): DeltaStatic;
        insertText(index: number, text: string, formats: StringMap, source?: Sources): DeltaStatic;
        /**
        * @deprecated Use clipboard.dangerouslyPasteHTML(index: number, html: string, source: Sources)
        */
        pasteHTML(index: number, html: string, source?: Sources): string;
        /**
        * @deprecated Use dangerouslyPasteHTML(html: string, source: Sources): void;
        */
        pasteHTML(html: string, source?: Sources): string;
        setContents(delta: DeltaStatic, source?: Sources): DeltaStatic;
        setText(text: string, source?: Sources): DeltaStatic;
        update(source?: string): void;
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
        removeFormat(index: number, length: number, source?: Sources): void;

        blur(): void;
        focus(): void;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        hasFocus(): boolean;
        setSelection(index: number, length: number, source?: Sources): void;
        setSelection(range: RangeStatic, source?: Sources): void;

        on(eventName: string, callback: (<T>(delta: T, oldContents: T, source: string) => void) |
            ((name: string, ...args: any[]) => void)): Quill;
        once(eventName: string, callback: (delta: DeltaStatic, source: string) => void): Quill;
        off(eventName: string, callback: (delta: DeltaStatic, source: string) => void): Quill;

        debug(level: string): void;
        import(path: string): any;
        register(path: string, def: any, suppressWarning?: boolean): void;
        register(defs: StringMap, suppressWarning?: boolean): void;
        addContainer(className: string, refNode?: any): any;
        addContainer(domNode: any, refNode?: any): any;
        getModule(name: string): any

        clipboard: ClipboardStatic;
    }
}

declare var Quill: Quill.Quill;

declare var Delta: Quill.DeltaStatic;

declare module "quill" {
    export = Quill;
}
