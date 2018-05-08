// Type definitions for ids 0.2.0
// Project: https://github.com/bpmn-io/ids
// Definitions by: Jan Steinbruecker <https://github.com/3fd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Ids;

declare class Ids {

    /**
     * Create a new id generator / cache instance.
     * @param {number[]} [seed] a seed that is used internally.
     */
    constructor(seed?: number[]);

    /**
     * Returns true if the given id has already been assigned.
     * @param {string} id
     * @return {boolean}
     */
    assigned(id: string): boolean;

    /**
     * Manually claim an existing id.
     * @param {string} id
     * @param {*} [element] element the id is claimed by
     */
    claim(id: string, element?: any): void;

    /** Clear all claimed ids. */
    clear(): void;

    /**
     * Generate a next id.
     * @param {*} [element] element to bind the id to
     * @return {string} id
     */
    next(element?: any): string;

    /**
     * Generate a next id with a given prefix.
     * @param {*} [element] element to bind the id to
     * @return {string} id
     */
    nextPrefixed(prefix: string, element?: any): string;

    /**
     * Unclaim an id.
     * @param {string} id - the id to unclaim
     */
    unclaim(id: string): void;

}
