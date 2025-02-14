/**
 * Data structure for the renderer. It is intended to manage
 * data of objects in dictionaries.
 *
 * @private
 */
declare class DataMap<
    M extends {
        [key: string]: {
            key: object;
            value: unknown;
        };
    },
> {
    data: WeakMap<M[keyof M]["key"], M[keyof M]["value"]>;
    /**
     * Constructs a new data map.
     */
    constructor();
    /**
     * Returns the dictionary for the given object.
     *
     * @param {Object} object - The object.
     * @return {Object} The dictionary.
     */
    get<K extends M[keyof M]["key"]>(object: K): Extract<M[keyof M], {
        key: K;
    }>["value"];
    /**
     * Deletes the dictionary for the given object.
     *
     * @param {Object} object - The object.
     * @return {Object?} The deleted dictionary.
     */
    delete<K extends M[keyof M]["key"]>(object: K): Extract<M[keyof M], {
        key: K;
    }>["value"];
    /**
     * Returns `true` if the given object has a dictionary defined.
     *
     * @param {Object} object - The object to test.
     * @return {Boolean} Whether a dictionary is defined or not.
     */
    has(object: M[keyof M]["key"]): boolean;
    /**
     * Frees internal resources.
     */
    dispose(): void;
}
export default DataMap;
