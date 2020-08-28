// Type definitions for urban-dictionary 2.2
// Project: https://github.com/NightfallAlicorn/urban-dictionary
// Definitions by: Nigecat <https://github.com/Nigecat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface WordDefinition {
    definition: string;
    permalink: string;
    thumbs_up: number;
    thumbs_down: number;
    sound_urls: string[];
    author: string;
    word: string;
    defid: number;
    current_vote: string;
    written_on: string;
    example: string;
}

/**
 * Asynchronously obtain Urban Dictionary term entry by defid.
 * @param id Definition entry to retrieve
 * @param callback Optional callback to return the data with
 * @return The word definition data, this is also passed to the callback if it is specified.
 */
export function defid(id: number, callback?: (error: Error, object: WordDefinition) => any): Promise<WordDefinition>;

/**
 * Asynchronously obtain a random definition from Urban Dictionary.
 * @param callback Optional callback to return the data with
 * @return The word definition data, this is also passed to the callback if it is specified.
 */
export function random(callback?: (error: Error, object: WordDefinition) => any): Promise<WordDefinition>;

/**
 * Asynchronously obtain Urban Dictionary by term.
 * @param word Definition to search for
 * @param callback Optional callback to return the data with
 * @return Returns a promise object containing entries, tags and sounds properties.
 */
export function term(word: string, callback?: (error: Error, entries: WordDefinition[], tags: string[], sounds: string[]) => any): Promise<{
    entries: WordDefinition[];
    tags: string[];
    sounds: string[];
}>;
