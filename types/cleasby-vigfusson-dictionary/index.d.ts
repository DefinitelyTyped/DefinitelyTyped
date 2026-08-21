export interface DictionaryEntry {
    word: string;
    definitions: string[];
}

export function getDictionary(): DictionaryEntry[];
export function getNoMarkupDictionary(): DictionaryEntry[];
