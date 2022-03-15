// Type definitions for mime-types 2.1
// Project: https://github.com/jshttp/mime-types#readme
// Definitions by: Gyusun Yeom <https://github.com/Perlmint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function lookup(filenameOrExt: string): string | false;
export function contentType(filenameOrExt: string): string | false;
export function extension(typeString: string): string | false;
export function charset(typeString: string): string | false;
export namespace charsets {
    const lookup: typeof charset;
}
export const types: {[key: string]: string};
export const extensions: {[key: string]: string[]};
