// Type definitions for camaro 2.2
// Project: https://github.com/tuananh/camaro
// Definitions by: Tuan Anh Tran <https://github.com/tuananh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/**
 * Transform the input xml to json using the input template object.
 * @param input The input xml string
 * @param template The output template
 */
declare function transform(input: string, template: object): object;
export = transform;
