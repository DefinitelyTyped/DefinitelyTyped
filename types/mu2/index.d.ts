// Type definitions for mu2
// Project: https://github.com/raycmorgan/mu
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mu2.d.ts

/// <reference types="node" />


export declare var root: string;

export declare function compileAndRender(templateName: string, view: any): NodeJS.ReadableStream;

export declare function compile(filename: string, callback: (err: Error, parsed: IParsed) => void): void;

export declare function compileText(name: string, template: string, callback: (err: Error, parsed: IParsed) => void): void;
export declare function compileText(name: string, template: string): IParsed;
export declare function compileText(template: string): IParsed;

export declare function render(filenameOrParsed: string, view: any): NodeJS.ReadableStream;
export declare function render(filenameOrParsed: IParsed, view: any): NodeJS.ReadableStream;

export declare function renderText(template: string, view: any, partials?: any): NodeJS.ReadableStream;

export declare function clearCache(templateName?: string): void;

export interface IParsed { }
