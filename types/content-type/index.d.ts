// Type definitions for content-type 1.1
// Project: https://www.npmjs.com/package/content-type
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export function parse(input: ReqLike | ResLike | string): ParsedMediaType;
export function format(obj: MediaType): string;

export interface ParsedMediaType {
    type: string;
    parameters: {[key: string]: string};
}

export interface MediaType {
    type: string;
    parameters?: {[key: string]: string};
}

export interface ReqLike {
    headers: {[header: string]: string | string[]};
}

export interface ResLike {
    getHeader(name: string): number | string | string[] | undefined;
}
