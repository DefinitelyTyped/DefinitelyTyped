// Type definitions for humps 1.1
// Project: https://github.com/domchristie/humps
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function camelize(value: string): string;
export function pascalize(value: string): string;
export function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
export function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string;

export function camelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function camelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;

export function pascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function pascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;

export function decamelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function decamelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;

export function depascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
export function depascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;

export interface HumpsOptions {
    separator?: string;
    split?: RegExp;
    process?: HumpsProcessor;
}
export interface HumpsProcessor {
    (key: string, convert: HumpsProcessorParameter, options?: HumpsOptions): string;
}
export interface HumpsProcessorParameter {
    (key: string, options?: HumpsOptions): string;
}
export type OptionOrProcessor = HumpsOptions | HumpsProcessor;
