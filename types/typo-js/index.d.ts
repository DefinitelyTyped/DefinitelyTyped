// Type definitions for typo-js 1.2
// Project: https://github.com/cfinke/Typo.js#readme
// Definitions by: Will Hawker <https://github.com/whawker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TypoSettings {
    dictionaryPath?: string;
    asyncLoad?: boolean;
    loadedCallback?: (dict: Typo) => void;
}

declare class Typo {
    constructor(dictionary?: string, affData?: string | null, wordsData?: string | null, settings?: TypoSettings);
    loaded: boolean;
    check: (word: string) => boolean;
    suggest: (word: string, limit?: number) => string[];
}

export = Typo;
