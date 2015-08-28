// Type definitions for speakingurl
// Project: https://github.com/pid/speakingurl
// Definitions by: Weber Chris <https://github.com/chrisweb>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "speakingurl" {

    export interface ISlugOptions {
        separator?: string,
        lang?: string,
        symbols?: boolean,
        maintainCase?: boolean,
        titleCase?: boolean|string[],
        truncate?: number,
        uric?: boolean,
        uricNoSlash?: boolean,
        mark?: boolean,
        custom?: {}|string[]
    }

    interface IGetSlug {
        (input: string, options?: string): string;
    }

    interface IGetSlug {
        (input: string, options?: ISlugOptions): string;
    }

    export function getSlug(input: string, options?: string): string;

    export function createSlug(options?: string): IGetSlug;
    export function createSlug(options?: ISlugOptions): IGetSlug;

}