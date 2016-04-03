declare module goog {
    function require(name: 'goog.structs.weak'): typeof goog.structs.weak;
}

declare module goog.structs.weak {

    /**
     * Whether this browser supports weak collections, using either the native or
     * shim implementation.
     * @const
     */
    var SUPPORTED_BROWSER: any;

    /**
     * Whether to use the browser's native WeakMap.
     * @const
     */
    var USE_NATIVE_WEAKMAP: any;

    /**
     * Whether to use the browser's native WeakSet.
     * @const
     */
    var USE_NATIVE_WEAKSET: any;

    /** @const */
    var WEAKREFS_PROPERTY_NAME: any;

    /**
     * Generate a unique ID for shim.
     * @return {string}
     */
    function generateId(): string;

    /**
     * Checks that the key is an extensible object, otherwise throws an Error.
     * @param {*} key The key.
     */
    function checkKeyType(key: any): void;

    /**
     * Adds a key-value pair to the collection with the given ID. Helper for shim
     * implementations of Map#set and Set#add.
     * @param {string} id The unique ID of the shim weak collection.
     * @param {*} key The key.
     * @param {*} value value to add.
     */
    function set(id: string, key: any, value: any): void;

    /**
     * Returns whether the collection with the given ID contains the given
     * key. Helper for shim implementations of Map#containsKey and Set#contains.
     * @param {string} id The unique ID of the shim weak collection.
     * @param {*} key The key to check for.
     * @return {boolean}
     */
    function has(id: string, key: any): boolean;

    /**
     * Removes a key-value pair based on the key. Helper for shim implementations of
     * Map#remove and Set#remove.
     * @param {string} id The unique ID of the shim weak collection.
     * @param {*} key The key to remove.
     * @return {boolean} Whether object was removed.
     */
    function remove(id: string, key: any): boolean;
}
