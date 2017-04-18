declare module goog {
    function require(name: 'goog.proto2.Serializer'): typeof goog.proto2.Serializer;
}

declare module goog.proto2 {

    /**
     * Abstract base class for PB2 serializers. A serializer is a class which
     * implements the serialization and deserialization of a Protocol Buffer Message
     * to/from a specific format.
     *
     * @constructor
     */
    class Serializer {
        constructor();
        
        /**
         * Serializes a message to the expected format.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         *
         * @return {*} The serialized form of the message.
         */
        serialize(message: goog.proto2.Message): any;
        
        /**
         * Returns the serialized form of the given value for the given field if the
         * field is a Message or Group and returns the value unchanged otherwise, except
         * for Infinity, -Infinity and NaN numerical values which are converted to
         * string representation.
         *
         * @param {goog.proto2.FieldDescriptor} field The field from which this
         *     value came.
         *
         * @param {*} value The value of the field.
         *
         * @return {*} The value.
         * @protected
         */
        getSerializedValue(field: goog.proto2.FieldDescriptor, value: any): any;
        
        /**
         * Deserializes a message from the expected format.
         *
         * @param {goog.proto2.Descriptor} descriptor The descriptor of the message
         *     to be created.
         * @param {*} data The data of the message.
         *
         * @return {!goog.proto2.Message} The message created.
         */
        deserialize(descriptor: goog.proto2.Descriptor, data: any): goog.proto2.Message;
        
        /**
         * Deserializes a message from the expected format and places the
         * data in the message.
         *
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The data of the message.
         */
        deserializeTo(message: goog.proto2.Message, data: any): void;
        
        /**
         * Returns the deserialized form of the given value for the given field if the
         * field is a Message or Group and returns the value, converted or unchanged,
         * for primitive field types otherwise.
         *
         * @param {goog.proto2.FieldDescriptor} field The field from which this
         *     value came.
         *
         * @param {*} value The value of the field.
         *
         * @return {*} The value.
         * @protected
         */
        getDeserializedValue(field: goog.proto2.FieldDescriptor, value: any): any;
    }
}
