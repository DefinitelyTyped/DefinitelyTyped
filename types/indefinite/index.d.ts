// Type definitions for indefinite 2.2
// Project: https://github.com/tandrewnichols/indefinite
// Definitions by: omaishar <https://github.com/omaishr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    capitalize?: boolean;
    caseInsensitive?: boolean;
    numbers?: "colloquial";
}
export function indefinite(word: string | number, opts?: Options): string;
