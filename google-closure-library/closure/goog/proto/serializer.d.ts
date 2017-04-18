declare module goog {
    function require(name: 'goog.proto.Serializer'): typeof goog.proto.Serializer;
}

declare module goog.proto {

    /**
     * Object that can serialize objects or values to a protocol buffer string.
     * @constructor
     * @extends {goog.json.Serializer}
     * @final
     */
    class Serializer extends goog.json.Serializer {
        constructor();
        
        /**
         * Serializes an array to a protocol buffer string. This overrides the JSON
         * method to output empty slots when the value is null or undefined.
         * @param {Array<*>} arr The array to serialize.
         * @param {Array<string>} sb Array used as a string builder.
         * @override
         */
        serializeArray(arr: Array<any>, sb: Array<string>): void;
    }
}
