// Type definitions for atpl
// Project: https://github.com/soywiz/atpl.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/atpl.d.ts


declare export function compile(templateString: string, options: any): (context: any) => string;
declare export function __express(filename: string, options: any, callback: Function): any;

declare export function registerExtension(items: any): void;
declare export function registerTags(items: any): void;
declare export function registerFunctions(items: any): void;
declare export function registerFilters(items: any): void;
declare export function registerTests(items: any): void;

declare export function renderFileSync(viewsPath: string, filename: string, parameters: any, cache: boolean): string;
declare export function renderFile(viewsPath: string, filename: string, parameters: any, cache: boolean, done: (err: Error, result?: string) => void): void;
