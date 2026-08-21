/**
 * Confidence is a configuration document format, an API, and a foundation for A/B testing.
 * The configuration format is designed to work with any existing JSON-based configuration,
 * serving values based on object path ('/a/b/c' translates to a.b.c). In addition,
 * confidence defines special $-prefixed keys used to filter values for a given criteria.
 */

export declare class Store {
    /**
     * @param {any} document - the configuration document for this document store
     */
    constructor(document?: any);

    /**
     * Validates the provided configuration, clears any existing configuration, then loads the configuration where:
     *   @param {any} document - an object containing a confidence configuration object generated from a parsed JSON document. If the document is invlaid, will throw an error.
     */
    load(document: any): void;

    /**
     * Retrieves a value from the configuration document after applying the provided criteria where:
     *   @param {string} key - the requested key path. All keys must begin with '/'. '/' returns the the entire document.
     *   @param {any} criteria - optional object used as criteria for applying filters in the configuration document. Defaults to {}.
     *
     *   @return {any} Returns the value found after applying the criteria. If the key is invalid or not found, returns undefined.
     */
    get(key: string, criteria?: any): any;

    /**
     * Retrieves the metadata (if any) from the configuration document after applying the provided criteria where:
     *   @param {string} key - the requested key path. All keys must begin with '/'. '/' returns the the entire document.
     *   @param {any} criteria - optional object used as criteria for applying filters in the configuration document. Defaults to {}.
     *
     *   @return {any} Returns the metadata found after applying the criteria. If the key is invalid or not found, or if no metadata is available, returns undefined.
     */
    meta(key: string, criteria?: any): any;
}
