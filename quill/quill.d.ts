// Type definitions for Quill v1.0.3
// Project: http://quilljs.com
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace QuillJS {

    export interface QuillOptionsStatic {
        debug?: string,
        modules?: { [key: string]: any },
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

    type sourceType = "api" | "user" | "silent";
    type formatsType = { [key: string]: any };

    export interface QuillStatic {
        new (container: string | Element, options?: QuillOptionsStatic): QuillStatic;
        deleteText(start: number, end: number, source?: sourceType): void;
        disable(): void;
        enable(enabled?: boolean): void;
        getContents(start?: number, end?: number): DeltaStatic;
        getLength(): number;
        getText(start?: number, end?: number): string;
        insertEmbed(index: number, type: string, url: string, source?: sourceType): void;
        insertText(index: number, text: string, source?: sourceType): void;
        insertText(index: number, text: string, format: string, value: string, source?: sourceType): void;
        insertText(index: number, text: string, formats: formatsType, source?: sourceType): void;
        pasteHTML(index: number, html: string, source?:sourceType): string;
        pasteHTML(html:string, source?: sourceType): string;
        setContents(delta: DeltaStatic, source?: sourceType): void;
        setText(text: string, source?: sourceType): void;
        update(source?: string): void;
        updateContents(delta: DeltaStatic, source?: sourceType): void;

        format(name: string, value: any, source?: sourceType): void;
        formatLine(index: number, length: number, source?: sourceType): void;
        formatLine(index: number, length: number, format: string, value: any, source?: sourceType): void;
        formatLine(index: number, length: number, formats: formatsType, source?: sourceType): void;
        formatText(index: number, length: number, source?: sourceType): void;
        formatText(index: number, length: number, format: string, value: any, source?: sourceType): void;
        formatText(index: number, length: number, formats: formatsType, source?: sourceType): void;
        getFormat(range?: RangeStatic): formatsType;
        getFormat(index: number, length?: number): formatsType;
        removeFormat(index: Number, length: Number, source?: sourceType): void;

        blur(): void;
        focus(): void;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        hasFocus(): boolean;
        setSelection(index: number, length: number, source?: sourceType): void;
        setSelection(range: RangeStatic, source?: sourceType): void;

        on(eventName: string, callback: (<T>(delta: T, oldContents: T, source: string) => void) |
            ((name: string, ...args: any[]) => void)): QuillStatic;
        once(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;
        off(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;

        debug(level: string): void;
        import(path: string): any;
        register(path: string, def: any, suppressWarning?: boolean): void;
        register(defs: formatsType, suppressWarning?: boolean): void;
        addContainer(className: string, refNode?: any): any;
        getModule(name: string): any
    }
}

declare var Quill: QuillJS.QuillStatic;

declare module "quill" {
    export = Quill;
}
