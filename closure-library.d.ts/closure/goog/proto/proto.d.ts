declare module goog {
    function require(name: 'goog.proto'): typeof goog.proto;
}

declare module goog.proto {

    /**
     * Serializes an object or a value to a protocol buffer string.
     * @param {Object} object The object to serialize.
     * @return {string} The serialized protocol buffer string.
     */
    function serialize(object: Object): string;
}
