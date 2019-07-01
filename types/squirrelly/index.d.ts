// Type definitions for squirrelly 7.1
// Project: https://squirrelly.js.org
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export as namespace Sqrl;

export interface Options {
    $cache?: boolean;
    $file?: string;
    $name?: string;
}

export interface NativeHelper {
    blocks?: Blocks;
    helperEnd?: () => string;
    helperStart?: (param?: string, id?: string) => string;
    selfClosing?: (param?: string) => string;
}

export type Blocks = Record<string, () => string>;
export type SqrlFn = (options: TemplateOptions, Sqrl: any) => string;
export type TemplateOptions = Record<string, string | number>;

export function __express(filePath: string, options: TemplateOptions, callback: (...args: any[]) => any): void;

export function autoEscaping<T extends boolean>(bool: T): T;
export function Compile(str: string): SqrlFn;
export function defaultTags(tagArray: string[]): void;
export function defineFilter(name: string, callback: (str: string) => string): void;
export function defineHelper(
    name: string,
    callback: (args: string[], content: () => string, blocks: Blocks) => string,
): void;
export function defineNativeHelper(name: string, obj: NativeHelper): void;
export function definePartial(name: string, str: string): void;
export function load(options: Options, str?: string): SqrlFn;
export function Render(template: string | SqrlFn, options: TemplateOptions): string;
export function renderFile(filePath: string, options: TemplateOptions): string;
export function setDefaultFilters(obj: 'clear' | Record<string, boolean>): void;

export namespace F {
    function e(str: string): string;
}
