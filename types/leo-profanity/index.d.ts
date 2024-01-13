export function loadDictionary(lang: "en" | "fr"): void;
export function list(): string[];
export function check(text: string): boolean;
export function clean(text: string, replaceKey?: string): string;
export function add(word: string | string[]): void;
export function remove(word: string | string[]): void;
export function reset(): void;
export function clearList(): void;
