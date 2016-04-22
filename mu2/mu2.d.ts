// Type definitions for mu2
// Project: http://github.com/raycmorgan/mu
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mu2.d.ts

/// <reference path="../node/node.d.ts" />


declare export var root: string;

declare export function compileAndRender(templateName: string, view: any): NodeJS.ReadableStream;

declare export function compile(filename: string, callback: (err: Error, parsed: IParsed) => void): void;

declare export function compileText(name: string, template: string, callback: (err: Error, parsed: IParsed) => void): void;
declare export function compileText(name: string, template: string): IParsed;
declare export function compileText(template: string): IParsed;

declare export function render(filenameOrParsed: string, view: any): NodeJS.ReadableStream;
declare export function render(filenameOrParsed: IParsed, view: any): NodeJS.ReadableStream;

declare export function renderText(template: string, view: any, partials?: any): NodeJS.ReadableStream;

declare export function clearCache(templateName?: string): void;

export interface IParsed { }
