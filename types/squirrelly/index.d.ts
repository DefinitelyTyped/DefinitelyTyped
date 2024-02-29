export as namespace Sqrl;

export interface Options {
    $cache?: boolean | undefined;
    $file?: string | undefined;
    $name?: string | undefined;
}

export interface NativeHelper {
    blocks?: Blocks | undefined;
    helperEnd?: (() => string) | undefined;
    helperStart?: ((param?: string, id?: string) => string) | undefined;
    selfClosing?: ((param?: string) => string) | undefined;
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
export function setDefaultFilters(obj: "clear" | Record<string, boolean>): void;

export namespace F {
    function e(str: string): string;
}
