// Type definitions for humps 1.1
// Project: https://github.com/domchristie/humps
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace humps {
    function camelize(value: string): string;
    function pascalize(value: string): string;
    function decamelize(value: string, optionsOrProcessor?: OptionOrProcessor): string;
    function depascalize(value: string, optionsOrProcessor?: OptionOrProcessor): string;

    function camelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
    function pascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
    function decamelizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];
    function depascalizeKeys(str: object[], optionsOrProcessor?: OptionOrProcessor): object[];

    function camelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
    function pascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
    function decamelizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;
    function depascalizeKeys(str: object, optionsOrProcessor?: OptionOrProcessor): object;

    interface HumpsOptions {
        separator?: string;
        split?: RegExp;
        process?: HumpsProcessor;
    }
    interface HumpsProcessor {
        (key: string, convert: HumpsProcessorParameter, options?: HumpsOptions): string;
    }
    interface HumpsProcessorParameter {
        (key: string, options?: HumpsOptions): string;
    }
    type OptionOrProcessor = HumpsOptions | HumpsProcessor;
}

declare module 'humps' {
    export = humps;
}
