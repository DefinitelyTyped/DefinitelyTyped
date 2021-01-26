// Type definitions for cleasby-vigfusson-dictionary 1.0
// Project: https://github.com/stscoundrel/cleasby-vigfusson-dictionary
// Definitions by: StScoundrel <https://github.com/stscoundrel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DictionaryEntry {
    word: string;
    definitions: string[];
}

export function getDictionary(): DictionaryEntry[];
export function getNoMarkupDictionary(): DictionaryEntry[];
