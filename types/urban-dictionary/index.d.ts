// Type definitions for urban-dictionary 3.0
// Project: https://github.com/NightfallAlicorn/urban-dictionary
// Definitions by: Nigecat <https://github.com/Nigecat>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DefinitionObject {
    author: string;
    current_vote: string;
    defid: number;
    definition: string;
    example: string;
    permalink: string;
    sound_urls: string[];
    thumbs_down: number;
    thumbs_up: number;
    word: string;
    written_on: string;
}

export interface AutocompleteExtraObject {
    preview: string;
    term: string;
}

/**
 * Use this to retrieve an array up to 20 search suggested strings.
 */
export function autocomplete(term: string, callback: (error: Error, results: string[]) => void): void;
export function autocomplete(term: string): Promise<string[]>;

/**
 * Use this to retrieve an array up to 20 search suggested AutocompleteExtraObject
 * that contain a preview and suggested term.
 */
export function autocompleteExtra(
    term: string,
    callback: (error: Error, results: AutocompleteExtraObject[]) => void,
): void;
export function autocompleteExtra(term: string): Promise<AutocompleteExtraObject[]>;

/**
 * Use this to retrieve an array up to 10 DefinitionObject.
 */
export function define(term: string, callback: (error: Error, results: DefinitionObject[]) => void): void;
export function define(term: string): Promise<DefinitionObject[]>;

/**
 * Use this to retrieve a specific DefinitionObject by its defid.
 */
export function getDefinitionByDefid(id: number, callback: (error: Error, results: DefinitionObject) => void): void;
export function getDefinitionByDefid(id: number): Promise<DefinitionObject>;

/**
 * Use this to retrieve an array up to 10 random DefinitionObject.
 */
export function random(callback: (error: Error, results: DefinitionObject[]) => void): void;
export function random(): Promise<DefinitionObject[]>;

/**
 * Use this to retrieve an array with 10 Words of the Day DefinitionObject.
 */
export function wordsOfTheDay(callback: (error: Error, results: DefinitionObject[]) => void): void;
export function wordsOfTheDay(): Promise<DefinitionObject[]>;
