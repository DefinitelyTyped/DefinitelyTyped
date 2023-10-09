// Type definitions for indefinite 2.3
// Project: https://github.com/tandrewnichols/indefinite
// Definitions by: omaishar <https://github.com/omaishar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    articleOnly?: boolean | undefined;
    capitalize?: boolean | undefined;
    caseInsensitive?: boolean | undefined;
    numbers?: "colloquial" | undefined;
}

declare function indefinite(word: string | number, opts?: Options): string;

export = indefinite;
