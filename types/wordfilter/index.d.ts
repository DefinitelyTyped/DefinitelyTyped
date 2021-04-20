// Type definitions for wordfilter 0.2
// Project: https://github.com/dariusk/wordfilter
// Definitions by: mike castleman <https://github.com/mlc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function blacklisted(string: string): boolean;
export function addWords(array: string | readonly string[]): void;
export function removeWord(word: string): void;
export function clearList(): void;
