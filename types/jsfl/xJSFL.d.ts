// Type definitions for xJSFL
// Project: http://www.xjsfl.com/
// Definitions by: soywiz <https://github.com/soywiz/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="index.d.ts" />

interface _xjsfl {
    init(_this: any): void;
    uri: string;
}

declare class _File {
    constructor(path: string);
    copy(path: string): _File;
    write(data: string): _File;
    contents: string;
}

declare class _Folder {
    constructor(path: string);
    contents: _File[];
}

declare class _Context {
    static create(): _Context;
    static from(frame: FlashFrame): _Context;
    layer: FlashLayer;
    frame: FlashFrame;
    keyframes: FlashFrame[];
    elements: FlashElement[];
    setLayer(index: number);
    update();
    goto();
}

interface GenericCollection<T> {
    elements: T[];
    rename(pattern: string): GenericCollection<T>;
    update(): GenericCollection<T>;
    select(): GenericCollection<T>;
    toGrid(x: number, y: number): GenericCollection<T>;
    randomize(info: any): GenericCollection<T>;
    each(callback: (element: T, index?: number, elements?: T[]) => void );
}

interface ElementCollection extends GenericCollection<FlashElement> {
}

interface ItemCollection extends GenericCollection<FlashItem> {
}

declare class _URI {
    constructor(path: string);
    uri: string;
    folder: string;
    name: string;
    extension: string;
    path: string;
    type: string;
    toURI(string: string): string;
}

declare var xjsfl: _xjsfl;

// Global variables
declare var $dom: FlashDocument;
declare var $timeline: FlashTimeline;
declare var $library: FlashLibrary;
declare var $selection: FlashElement[];

// Global functions

// Output
declare function trace(...args: any[]): void;
declare function clear(): void;
declare function format(format: string, ...params: any[]): void;

// Inspection and debugging
declare function inspect(item: any): void;
declare function list(item: any): void;
declare function debug(item: any): void;

// Library / class loading
declare function include(className: string): void;
declare function require(className: string): void;

// File
declare function load(filePath: string): string;
declare function save(filePath: string, data: string): void;

// http://www.xjsfl.com/support/guides/working-with-flash/introduction-to-selectors

// http://www.xjsfl.com/support/api/elements/ElementSelector
declare function $(selector: string): ElementCollection; // ElementSelector

// http://www.xjsfl.com/support/api/elements/ItemSelector
declare function $$(selector: string): ItemCollection; // ItemSelector
