// Type definitions for marko 4.6
// Project: http://markojs.com
// Definitions by: Timur Manyanov <https://github.com/darkwebdev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { AsyncStream, Template } from './src/runtime/html';

export function createOut(globalData: any): AsyncStream;

export interface TemplateOptions {
    buffer?: boolean;
    writeToDisk?: boolean;
}

export function load(templatePath: string, options?: TemplateOptions): Template;
export function load(templatePath: string, templateSrc: string, options?: TemplateOptions): Template;
