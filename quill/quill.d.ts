// Type definitions for Quill v1.0.0
// Project: http://quilljs.com
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace QuillJS {

    export interface QuillOptionsStatic {
        debug?: string,
        modules?: {[key: string]: any},
        placeholder?: string,
        readOnly?: boolean,
        theme?: string
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

    export interface QuillStatic {
        new (selector: string, options?: QuillOptionsStatic): QuillStatic;

        deleteText(start: number, end: number, source?: "api"|"user"|"silent"): void;
        disable(): void;
        enable(enabled?: boolean): void;
        getContents(start?: number, end?: number): DeltaStatic;
        getLength(): number;
        getText(start?: number, end?: number): string;
        insertEmbed(index: number, type: string, url: string, source?: "api"|"user"|"silent"): void;
        insertText(index: number, text: string, source?: "api"|"user"|"silent"): void;
        insertText(index: number, text: string, format: string, value: string, source?: "api"|"user"|"silent"): void;
        insertText(index: number, text: string, formats: { [key: string] : any  }, source?: "api"|"user"|"silent"): void;
        pasteHTML(): string;
        setContents(delta: DeltaStatic, source?: "api"|"user"|"silent"): void;
        setText(text: string, source?: "api"|"user"|"silent"): void;
        update(source?: string): void;
        updateContents(delta: DeltaStatic, source?: "api"|"user"|"silent"): void;

        format(name: string, value: any, source?: "api"|"user"|"silent"): void;
        formatLine(index: number, length: number, source?: "api"|"user"|"silent"): void;
        formatLine(index: number, length: number, format: string, value: any, source?: "api"|"user"|"silent"): void;
        formatLine(index: number, length: number, formats: { [key: string] : any  }, source?: "api"|"user"|"silent"): void;
        formatText(index: number, length: number, source?: "api"|"user"|"silent"): void;
        formatText(index: number, length: number, format: string, value: any, source?: "api"|"user"|"silent"): void;
        formatText(index: number, length: number, formats: { [key: string] : any  }, source?: "api"|"user"|"silent"): void;
        getFormat(range?: RangeStatic): {[key: string]: any};
        getFormat(index: number, length?: number): {[key: string]: any};
        removeFormat(index: Number, length: Number, source?: "api"|"user"|"silent"): void;

        blur(): void;
        focus(): void;
        getBounds(index: number, length?: number): BoundsStatic;
        getSelection(focus?: boolean): RangeStatic;
        hasFocus(): boolean;
        setSelection(index: number, length: number, source?: "api"|"user"|"silent"): void;
        setSelection(range: RangeStatic, source?: "api"|"user"|"silent"): void;

        on(eventName: string, callback: (<T>(delta: T, oldContents: T, source: string) => void) |
                                            ((name: string, ...args:any[]) => void )): QuillStatic;
        once(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;
        off(eventName: string, callback: (delta: DeltaStatic, source: string) => void): QuillStatic;

        debug(level: string): void;
        import(path: string): any;
        register(path: string, def: any, suppressWarning?: boolean): void;
        register(defs: { [key: string] : any  }, suppressWarning?: boolean): void;
        addContainer(className: string, refNode?: any): any;
        getModule(name: string): any
    }
}

declare var Quill: QuillJS.QuillStatic;

declare module "Quill" {
    export = Quill;
}
