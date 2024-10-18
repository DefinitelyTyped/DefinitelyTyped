interface Options {
    emptyList?: boolean | undefined;
    exclude?: string[] | undefined;
    list?: string[] | undefined;
    placeHolder?: string | undefined;
    regex?: RegExp | undefined;
    replaceRegex?: RegExp | undefined;
    splitRegex?: RegExp | undefined;
}

declare class BadWordsFilter {
    constructor(options?: Options);

    addWords(...words: string[]): void;
    clean(text: string): string;
    isProfane(text: string): boolean;
    removeWords(...words: string[]): void;
    replaceWord(text: string): string;
}

export = BadWordsFilter;
