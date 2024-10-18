interface Options {
    articleOnly?: boolean | undefined;
    capitalize?: boolean | undefined;
    caseInsensitive?: boolean | undefined;
    numbers?: "colloquial" | undefined;
}

declare function indefinite(word: string | number, opts?: Options): string;

export = indefinite;
