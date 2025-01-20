export enum INDEX_MODES {
    ALL_SUBSTRINGS = "ALL_SUBSTRINGS",
    EXACT_WORDS = "EXACT_WORDS",
    PREFIXES = "PREFIXES",
}

export default class SearchApi {
    constructor(someParam?: {
        indexMode?: INDEX_MODES | undefined;
        tokenizePattern?: RegExp | undefined;
        caseSensitive?: boolean | undefined;
        matchAnyToken?: boolean | undefined;
    });
    indexDocument(uid: string, text: string): void;
    search(query: string): Promise<string[]>;
    terminate(): void;
}
