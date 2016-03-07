declare module goog {
    function require(name: 'goog.proto2.PbLiteSerializer'): typeof goog.proto2.PbLiteSerializer;
}

declare module goog.proto2 {

    /**
     * PB-Lite serializer.
     *
     * @constructor
     * @extends {goog.proto2.LazyDeserializer}
     */
    class PbLiteSerializer extends goog.proto2.LazyDeserializer {
        constructor();
        
        /**
         * By default, the proto tag with id 1 will have index 1 in the serialized
         * array.
         *
         * If the serializer is set to use zero-indexing, the tag with id 1 will have
         * index 0.
         *
         * @param {boolean} zeroIndexing Whether this serializer should deal with
         *     0-indexed protos.
         */
        setZeroIndexed(zeroIndexing: boolean): void;
        
        /**
         * Serializes a message to a PB-Lite object.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {!Array<?>} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): Array<any>;
    }
}
