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
