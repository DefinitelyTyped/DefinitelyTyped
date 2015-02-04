// Type definitions for mu2
// Project: http://github.com/raycmorgan/mu
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mu2.d.ts

/// <reference path="../node/node.d.ts" />

declare module "mu2" {
	export var root: string;

	export function compileAndRender(templateName: string, view: any): NodeJS.ReadableStream;

	export function compile(filename: string, callback: (err: Error, parsed: IParsed) => void): void;

	export function compileText(name: string, template: string, callback: (err: Error, parsed: IParsed) => void): void;
	export function compileText(name: string, template: string): IParsed;
	export function compileText(template: string): IParsed;

	export function render(filenameOrParsed: string, view: any): NodeJS.ReadableStream;
	export function render(filenameOrParsed: IParsed, view: any): NodeJS.ReadableStream;

	export function renderText(template: string, view: any, partials?: any): NodeJS.ReadableStream;

	export function clearCache(templateName?: string): void;

	export interface IParsed { }
}
