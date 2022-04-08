// Type definitions for phonetic 0.1
// Project: https://github.com/TomFrost/node-phonetic
// Definitions by: Emmanuel N Kyeyune <https://github.com/emmanuelnk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PhoneticOptions {
    syllables?: number;
    seed?: string;
    phoneticSimplicity?: number;
    compoundSimplicity?: number;
    capFirst?: boolean;
}

export function generate(options?: PhoneticOptions): string;
