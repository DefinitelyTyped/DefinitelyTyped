// Type definitions for Quill v1.0.0
// Project: http://quilljs.com
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace QuillJS {


    export interface BoundsStatic {
        left: number,
        top: number,
        height: number,
        width: number
    }

    export interface DeltaStatic {
        ops?: Array<any>;
        retain?: any,
        delete?: any,
        insert?: any,
        attributes?: any
    }

    export interface RangeStatic {
        new (): RangeStatic;
        index: number;
        length: number;
    }

    export interface QuillStatic {
        new (selector: string, options?: Object): QuillStatic;

        deleteText(start: number, end: number, source?: string): void;
        disable(): void;
        enable(enabled?: boolean): void;
        getContents(start?: number, end?: number): DeltaStatic;
        getLength(): number;
        getText(start?: number, end?: number): string;
        insertEmbed(index: number, type: string, url: string, source?: string): void;
        insertText(index: number, text: string, source?: string): void;
        insertText(index: number, text: string, format: string, value: string, source?: string): void;
        insertText(index: number, text: string, formats: any, source?: string): void;
        pasteHTML(): string;
        setContents(delta: DeltaStatic, source?: string): void;
        setText(text: string, source?: string): void;
        update(source?: string): void;
        updateContents(delta: DeltaStatic, source?: string): void;

        format(name: string, value: any, source?: string): void;
        formatLine(index: number, length: number, source?: string): void;
        formatLine(index: number, length: number, format: string, value: any, source?: string): void;
        formatLine(index: number, length: number, formats: any, source?: string): void;
        formatText(index: number, length: number, source?: string): void;
        formatText(index: number, length: number, format: string, value: any, source?: string): void;
        formatText(index: number, length: number, formats: any, source?: string): void;
        getFormat(range?: RangeStatic): any;
        getFormat(index: number, length?: number): any;
        removeFormat(index: Number, length: Number, source?: String): void;

        blur(): void;
        focus(): void;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        hasFocus(): boolean;
        setSelection(index: number, length: number, source?: string): void;
        setSelection(range: RangeStatic, source?: string): void;

        on(eventName: string, callback: (delta: DeltaStatic, oldContents: DeltaStatic, source: String) => void): QuillStatic;
        on(eventName: string, callback: (range: RangeStatic, oldRange: RangeStatic, source: String) => void): QuillStatic;
        once(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;
        off(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;

        debug(level: string): void;
        import(path: string): any;
        register(path: string, def: any, suppressWarning?: boolean): void;
        register(defs: any, suppressWarning?: boolean): void;
        addContainer(className: string, refNode?: any): any;
        getModule(name: string): any
    }
}

declare var Quill: QuillJS.QuillStatic;

declare module "Quill" {
    export = Quill;
}
