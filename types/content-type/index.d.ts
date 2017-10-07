// Type definitions for content-type 1.1
// Project: https://www.npmjs.com/package/content-type
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export function parse(input: RequestLike | ResponseLike | string): ParsedMediaType;
export function format(obj: MediaType): string;

export interface ParsedMediaType {
    type: string;
    parameters: {[key: string]: string};
}

export interface MediaType {
    type: string;
    parameters?: {[key: string]: string};
}

export interface RequestLike {
    headers: {[header: string]: string | string[]};
}

export interface ResponseLike {
    getHeader(name: string): number | string | string[] | undefined;
}
