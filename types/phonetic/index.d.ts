// Type definitions for phonetic 0.1
// Project: https://github.com/TomFrost/node-phonetic
// Definitions by: Emmanuel N Kyeyune <https://github.com/emmanuelnk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const phonetic: Phonetic;

export = phonetic;

interface PhoneticOptions {
    syllables?: number;
    seed?: string;
    phoneticSimplicity?: number;
    compoundSimplicity?: number;
    capFirst?: boolean;
}

interface Phonetic {
  generate: (options: PhoneticOptions) => string;
}
