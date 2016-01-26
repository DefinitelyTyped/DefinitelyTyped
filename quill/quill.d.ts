// Type definitions for Quill
// Project: http://quilljs.com
// Definitions by: Sumit <https://github.com/sumitkm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../eventemitter2/eventemitter2.d.ts" />

declare interface  DeltaStatic{
	ops : Array<any>;
}

declare interface QuillStatic {
    on(eventName: string, callback: (delta: DeltaStatic, source: string) => void): EventEmitter2;
    addModule(id: string, options: any) : Object;

    getText(): string;
    getText(start: number): string;
    getText(start: number, end: number): string;

    getLength(): number;

    getContents(): DeltaStatic;
    getContents(start: number): DeltaStatic;
    getContents(start: number, end: number): DeltaStatic;

    getHTML(): string;

    insertText(index: number, text: string): void;
    insertText(index: number, text: string, name: string, value: string): void;
    insertText(index: number, text: string, formats: any): void;
    insertText(index: number, text: string, source: string) : void;
    insertText(index: number, text: string, name: string, value: string, source: string): void;
    insertText(index: number, text: string, formats: any, source: string): void;

    deleteText(start: number, end: number): void;
    deleteText(start: number, end: number, source: string): void;

    formatText(start: number, end: number): void;
    formatText(start: number, end: number, name: string, value: string): void;
    formatText(start: number, end: number, formats: any): void;
    formatText(start: number, end: number, source: string): void;
    formatText(start: number, end: number, name: string, value: string, source: string): void;
    formatText(start: number, end: number, formats: string, source: string): void;


    formatLine(start: number, end: number): void;
    formatLine(start: number, end: number, name: string, value: string): void;
    formatLine(start: number, end: number, formats: any): void;
    formatLine(start: number, end: number, source: string): void;
    formatLine(start: number, end: number, name: string, value: string, source: string): void;
    formatLine(start: number, end: number, formats: any, source: string): void;


    insertEmbed(index: number, type: string, url: string): void;
    insertEmbed(index: number, type: string, url: string, source: string): void;

    updateContents(delta: DeltaStatic): void;

    setContents(delta: DeltaStatic): void;

    setHTML(html: string): void;

    setText(text: string): void;

    getSelection(): string;

    setSelection(start: number, end: number): void;
    setSelection(start: number, end: number, source: string): void;
    setSelection(range: any): void;
    setSelection(range: any, source: string): void;

    prepareFormat(format: string, value: string): void;

    focus(): void;

    getBounds(index: number): any;

    registerModule(name: string, callback: (quill: QuillStatic, options: any) => {}): any;

    addModule(name: string, options: any): any;

    getModule(name: string): any;

    onModuleLoad(name: string, callback: (input: any) => {}): void;

    addFormat(name: string, config: any): void;

    addContainer(cssClass: string, before: number): HTMLDivElement;
}

declare var Quill: QuillStatic;

declare var Delta: DeltaStatic;

declare module "Delta"{
	export = Delta;
}
declare module "Quill" {
    export = Quill;
}
