export interface Humanize {
    capitalize?: boolean;
}

export interface Parameterize {
    preserveCase?: boolean;
    separator?: string;
}

export interface Transliterate {
    locale?: string;
    replacement?: string;
}

export interface Inflections {
    acronym(word: string): void;
    plural(rule: RegExp, replacement: string): void;
    plural(rule: string): void;
    singular(rule: RegExp, replacement: string): void;
    singular(rule: string): void;
    irregular(singular: string, plural: string): void;
    uncountable(...words: string[]): void;
    human(rule: RegExp | string, replacement: string): void;
    clear(scope?: string): void;
}

export interface Transliterations {
    approximate(original: string, replacement: string): void;
}

export function pluralize(word: string, locale?: string): string;
export function singularize(word: string, locale?: string): string;
export function camelize(term: string, uppercaseFirstLetter?: boolean): string;
export function underscore(camelCaseWord: string): string;
export function humanize(lowerCaseAndUnderscoredWord: string, options?: Humanize): string;
export function titleize(sentence: string): string;
export function tableize(className: string): string;
export function classify(tableName: string): string;
export function dasherize(underscoredWord: string): string;
export function foreignKey(className: string, separateClassNameAndIdWithUnderscore?: boolean): string;
export function ordinal(number: number): string;
export function ordinalize(number: number): string;
export function inflections(locale: string, inflect?: (inflect: Inflections) => void): void;
export function inflections(inflect?: (inflect: Inflections) => void): void;
export function transliterate(sentence: string, options?: Transliterate): string;
export function transliterations(locale: string, transliterate?: (transliterate: Transliterations) => void): void;
export function transliterations(transliterate?: (transliterate: Transliterations) => void): void;
export function parameterize(sentence: string, options?: Parameterize): string;
export function constantify(words: string): string;
export function capitalize(word?: string | null): string;

export as namespace Inflector;
