// Type definitions for indefinite 2.3
// Project: https://github.com/tandrewnichols/indefinite
// Definitions by: omaishar <https://github.com/omaishar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    articleOnly?: boolean;
    capitalize?: boolean;
    caseInsensitive?: boolean;
    numbers?: "colloquial";
}
export default function(word: string | number, opts?: Options): string;
