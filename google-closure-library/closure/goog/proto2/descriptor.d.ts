declare module goog {
    function require(name: 'goog.proto2.Descriptor'): typeof goog.proto2.Descriptor;
}

declare module goog.proto2 {

    /**
     * @typedef {{name: (string|undefined),
     *            fullName: (string|undefined),
     *            containingType: (goog.proto2.Message|undefined)}}
     */
    type Metadata = {name: string|void; fullName: string|void; containingType: goog.proto2.Message|void};

    /**
     * A class which describes a Protocol Buffer 2 Message.
     *
     * @param {function(new:goog.proto2.Message)} messageType Constructor for
     *      the message class that this descriptor describes.
     * @param {!goog.proto2.Metadata} metadata The metadata about the message that
     *      will be used to construct this descriptor.
     * @param {Array<!goog.proto2.FieldDescriptor>} fields The fields of the
     *      message described by this descriptor.
     *
     * @constructor
     * @final
     */
    class Descriptor {
        constructor(messageType: () => any, metadata: goog.proto2.Metadata, fields: Array<goog.proto2.FieldDescriptor>);
        
        /**
         * Returns the name of the message, if any.
         *
         * @return {?string} The name.
         */
        getName(): string;
        
        /**
         * Returns the full name of the message, if any.
         *
         * @return {?string} The name.
         */
        getFullName(): string;
        
        /**
         * Returns the descriptor of the containing message type or null if none.
         *
         * @return {goog.proto2.Descriptor} The descriptor.
         */
        getContainingType(): goog.proto2.Descriptor;
        
        /**
         * Returns the fields in the message described by this descriptor ordered by
         * tag.
         *
         * @return {!Array<!goog.proto2.FieldDescriptor>} The array of field
         *     descriptors.
         */
        getFields(): Array<goog.proto2.FieldDescriptor>;
        
        /**
         * Returns the fields in the message as a key/value map, where the key is
         * the tag number of the field. DO NOT MODIFY THE RETURNED OBJECT. We return
         * the actual, internal, fields map for performance reasons, and changing the
         * map can result in undefined behavior of this library.
         *
         * @return {!Object<number, !goog.proto2.FieldDescriptor>} The field map.
         */
        getFieldsMap(): {[index: number]: goog.proto2.FieldDescriptor};
        
        /**
         * Returns the field matching the given name, if any. Note that
         * this method searches over the *original* name of the field,
         * not the camelCase version.
         *
         * @param {string} name The field name for which to search.
         *
         * @return {goog.proto2.FieldDescriptor} The field found, if any.
         */
        findFieldByName(name: string): goog.proto2.FieldDescriptor;
        
        /**
         * Returns the field matching the given tag number, if any.
         *
         * @param {number|string} tag The field tag number for which to search.
         *
         * @return {goog.proto2.FieldDescriptor} The field found, if any.
         */
        findFieldByTag(tag: number|string): goog.proto2.FieldDescriptor;
        
        /**
         * Creates an instance of the message type that this descriptor
         * describes.
         *
         * @return {!goog.proto2.Message} The instance of the message.
         */
        createMessageInstance(): goog.proto2.Message;
    }
}
