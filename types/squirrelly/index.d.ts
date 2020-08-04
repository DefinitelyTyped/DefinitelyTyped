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
export type SqrlFn = (options: object, Sqrl: any) => string;
export type HelperCallback = (args: string[], content: () => string, blocks: Blocks) => string;

export function __express(filePath: string, options: object, callback: (...args: any[]) => any): void;

export function autoEscaping<T extends boolean>(bool: T): T;
export function Compile(str: string): SqrlFn;
export function defaultTags(tagArray: string[]): void;
export function defineFilter(name: string, callback: (str: string) => string): void;
export function defineHelper(name: string, callback: HelperCallback): void;
export function defineNativeHelper(name: string, obj: NativeHelper): void;
export function definePartial(name: string, str: string): void;
export function load(options: Options): SqrlFn | string;
export function load(options: Options, str: string): SqrlFn;
export function Render(template: string | SqrlFn, options: object): string;
export function renderFile(filePath: string, options: object): string;
export function setDefaultFilters(obj: 'clear' | Record<string, boolean>): void;

export namespace F {
    function e(str: string): string;
}
