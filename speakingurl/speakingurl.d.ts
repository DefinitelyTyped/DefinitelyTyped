// Type definitions for speakingurl
// Project: https://github.com/pid/speakingurl
// Definitions by: Weber Chris <https://github.com/chrisweb>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "speakingurl" {

    export interface slugOptions {
        separator: string,
        lang: string,
        symbols: boolean,
        maintainCase: boolean,
        titleCase: boolean|string[],
        truncate: number,
        uric: boolean,
        uricNoSlash: boolean,
        mark: boolean,
        custom: {}|string[]
    }

    export function getSlug(input: string, options: string|slugOptions): string;
    export function createSlug(options: string|slugOptions): (input: string, options: string|slugOptions) => string;

}