// Type definitions for phonetic 0.1
// Project: https://github.com/TomFrost/node-phonetic
// Definitions by: Emmanuel N Kyeyune <https://github.com/emmanuelnk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PhoneticOptions {
    syllables?: number | undefined;
    seed?: string | undefined;
    phoneticSimplicity?: number | undefined;
    compoundSimplicity?: number | undefined;
    capFirst?: boolean | undefined;
}

export function generate(options?: PhoneticOptions): string;
