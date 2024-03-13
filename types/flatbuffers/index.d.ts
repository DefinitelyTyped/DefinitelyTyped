export { flatbuffers };

declare global {
    namespace flatbuffers {
        type Offset = number;

        interface Table {
            bb: ByteBuffer | null;
            bb_pos: number;
        }

        const SIZEOF_SHORT: number;
        const SIZEOF_INT: number;
        const FILE_IDENTIFIER_LENGTH: number;
        const SIZE_PREFIX_LENGTH: number;

        enum Encoding {
            UTF8_BYTES,
            UTF16_STRING,
        }

        const int32: Int32Array;
        const float32: Float32Array;
        const float64: Float64Array;
        const isLittleEndian: boolean;

        ////////////////////////////////////////////////////////////////////////////////

        class Long {
            low: number;
            high: number;
            static ZERO: Long;
            constructor(low: number, high: number);
            toFloat64(): number;
            equals(other: any): boolean;
            static create(low: number, high: number): Long;
        }

        ////////////////////////////////////////////////////////////////////////////////

        class Builder {
            constructor(initial_size?: number);

            /**
             * Reset all the state in this FlatBufferBuilder
             * so it can be reused to construct another buffer.
             */
            clear(): void;

            /**
             * In order to save space, fields that are set to their default value
             * don't get serialized into the buffer. Forcing defaults provides a
             * way to manually disable this optimization.
             *
             * @param forceDefaults true always serializes default values
             */
            forceDefaults(forceDefaults: boolean): void;

            /**
             * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
             * called finish(). The actual data starts at the ByteBuffer's current position,
             * not necessarily at 0.
             */
            dataBuffer(): ByteBuffer;

            /**
             * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
             * called finish(). The actual data starts at the ByteBuffer's current position,
             * not necessarily at 0.
             */
            asUint8Array(): Uint8Array;

            /**
             * Prepare to write an element of `size` after `additional_bytes` have been
             * written, e.g. if you write a string, you need to align such the int length
             * field is aligned to 4 bytes, and the string data follows it directly. If all
             * you need to do is alignment, `additional_bytes` will be 0.
             *
             * @param size This is the of the new element to write
             * @param additional_bytes The padding size
             */
            prep(size: number, additional_bytes: number): void;

            pad(byte_size: number): void;

            writeInt8(value: number): void;
            writeInt16(value: number): void;
            writeInt32(value: number): void;
            writeInt64(value: Long): void;
            writeFloat32(value: number): void;
            writeFloat64(value: number): void;

            addInt8(value: number): void;
            addInt16(value: number): void;
            addInt32(value: number): void;
            addInt64(value: Long): void;
            addFloat32(value: number): void;
            addFloat64(value: number): void;
            addFieldInt8(voffset: number, value: number, defaultValue: number): void;
            addFieldInt16(voffset: number, value: number, defaultValue: number): void;
            addFieldInt32(voffset: number, value: number, defaultValue: number): void;
            addFieldInt64(voffset: number, value: Long, defaultValue: Long): void;
            addFieldFloat32(voffset: number, value: number, defaultValue: number): void;
            addFieldFloat64(voffset: number, value: number, defaultValue: number): void;

            addFieldOffset(voffset: number, value: Offset, defaultValue: Offset): void;

            /**
             * Structs are stored inline, so nothing additional is being added. `d` is always 0.
             */
            addFieldStruct(voffset: number, value: Offset, defaultValue: Offset): void;

            /**
             * Structures are always stored inline, they need to be created right
             * where they're used.  You'll get this assertion failure if you
             * created it elsewhere.
             *
             * @param obj The offset of the created object
             */
            nested(obj: Offset): void;

            /**
             * Should not be creating any other object, string or vector
             * while an object is being constructed
             */
            notNested(): void;

            /**
             * Set the current vtable at `voffset` to the current location in the buffer.
             */
            slot(voffset: number): void;

            /**
             * @returns Offset relative to the end of the buffer.
             */
            offset(): Offset;

            /**
             * Doubles the size of the backing ByteBuffer and copies the old data towards
             * the end of the new buffer (since we build the buffer backwards).
             *
             * @param bb The current buffer with the existing data
             * @returns A new byte buffer with the old data copied
             * to it. The data is located at the end of the buffer.
             */
            static growByteBuffer(bb: ByteBuffer): ByteBuffer;

            /**
             * Adds on offset, relative to where it will be written.
             *
             * @param offset The offset to add
             */
            addOffset(offset: Offset): void;

            /**
             * Start encoding a new object in the buffer.  Users will not usually need to
             * call this directly. The FlatBuffers compiler will generate helper methods
             * that call this method internally.
             */
            startObject(numfields: number): void;

            /**
             * Finish off writing the object that is under construction.
             *
             * @returns The offset to the object inside `dataBuffer`
             */
            endObject(): Offset;

            finish(root_table: Offset, file_identifier?: string, size_prefix?: boolean): void;
            finishSizePrefixed(root_table: Offset, file_identifier?: string): void;

            /**
             * This checks a required field has been set in a given table that has
             * just been constructed.
             */
            requiredField(table: Offset, field: number): void;

            /**
             * Start a new array/vector of objects.  Users usually will not call
             * this directly. The FlatBuffers compiler will create a start/end
             * method for vector types in generated code.
             *
             * @param elem_size The size of each element in the array
             * @param num_elems The number of elements in the array
             * @param alignment The alignment of the array
             */
            startVector(elem_size: number, num_elems: number, alignment: number): void;

            /**
             * Finish off the creation of an array and all its elements. The array must be
             * created with `startVector`.
             *
             * @returns The offset at which the newly created array
             * starts.
             */
            endVector(): Offset;

            /**
             * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
             * instead of a string, it is assumed to contain valid UTF-8 encoded data.
             *
             * @param s The string to encode
             * @return The offset in the buffer where the encoded string starts
             */
            createString(s: string | Uint8Array): Offset;

            /**
             * Convenience function for creating Long objects.
             */
            createLong(low: number, high: number): Long;
        }

        ////////////////////////////////////////////////////////////////////////////////

        class ByteBuffer {
            constructor(bytes: Uint8Array);

            static allocate(byte_size: number): ByteBuffer;

            clear(): void;

            bytes(): Uint8Array;

            position(): number;

            setPosition(position: number): void;

            capacity(): number;

            readInt8(offset: number): number;
            readUint8(offset: number): number;
            readInt16(offset: number): number;
            readUint16(offset: number): number;
            readInt32(offset: number): number;
            readUint32(offset: number): number;
            readInt64(offset: number): Long;
            readUint64(offset: number): Long;
            readFloat32(offset: number): number;
            readFloat64(offset: number): number;

            writeInt8(offset: number, value: number): void;
            writeUint8(offset: number, value: number): void;
            writeInt16(offset: number, value: number): void;
            writeUint16(offset: number, value: number): void;
            writeInt32(offset: number, value: number): void;
            writeUint32(offset: number, value: number): void;
            writeInt64(offset: number, value: Long): void;
            writeUint64(offset: number, value: Long): void;
            writeFloat32(offset: number, value: number): void;
            writeFloat64(offset: number, value: number): void;

            getBufferIdentifier(): string;

            /**
             * Look up a field in the vtable, return an offset into the object, or 0 if the
             * field is not present.
             */
            __offset(bb_pos: number, vtable_offset: number): number;

            /**
             * Initialize any Table-derived type to point to the union at the given offset.
             */
            __union<T extends Table>(t: T, offset: number): T;

            /**
             * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
             * This allocates a new string and converts to wide chars upon each access.
             *
             * To avoid the conversion to UTF-16, pass flatbuffers.Encoding.UTF8_BYTES as
             * the "optionalEncoding" argument. This is useful for avoiding conversion to
             * and from UTF-16 when the data will just be packaged back up in another
             * FlatBuffer later on.
             *
             * @param optionalEncoding Defaults to UTF16_STRING
             */
            __string(offset: number, optionalEncoding?: Encoding): string | Uint8Array;

            /**
             * Retrieve the relative offset stored at "offset"
             */
            __indirect(offset: number): number;

            /**
             * Get the start of data of a vector whose offset is stored at "offset" in this object.
             */
            __vector(offset: number): number;

            /**
             * Get the length of a vector whose offset is stored at "offset" in this object.
             */
            __vector_len(offset: number): number;

            __has_identifier(ident: string): boolean;

            /**
             * Convenience function for creating Long objects.
             */
            createLong(low: number, high: number): Long;
        }
    }
}
