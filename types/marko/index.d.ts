import { AsyncStream, Template } from "./src/runtime/html";

export function createOut(globalData: any): AsyncStream;

export interface TemplateOptions {
    buffer?: boolean | undefined;
    writeToDisk?: boolean | undefined;
}

export function load(templatePath: string, options?: TemplateOptions): Template;
export function load(templatePath: string, templateSrc: string, options?: TemplateOptions): Template;
