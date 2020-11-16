// Type definitions for js-worker-search 1.4
// Project: https://github.com/bvaughn/js-worker-search
// Definitions by: Peter Balogh <https://github.com/pbalogh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum INDEX_MODES {
    ALL_SUBSTRINGS = 'ALL_SUBSTRINGS',
    EXACT_WORDS = 'EXACT_WORDS',
    PREFIXES = 'PREFIXES',
}

export default class SearchApi {
    constructor(someParam?: {
        indexMode?: INDEX_MODES;
        tokenizePattern?: RegExp;
        caseSensitive?: boolean;
        matchAnyToken?: boolean;
    });
    indexDocument(uid: string, text: string): void;
    search(query: string): Promise<string[]>;
}
