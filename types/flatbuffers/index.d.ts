// Type definitions for flatbuffers 1.6
// Project: http://google.github.io/flatbuffers/index.html
// Definitions by: Kamil Rojewski <kamil.rojewski@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export { flatbuffers };

declare global {
  namespace flatbuffers {
    /**
     * @typedef {number}
     */
    type Offset = number;

    /**
     * @typedef {{
     *   bb: flatbuffers.ByteBuffer,
     *   bb_pos: number
     * }}
     */
    interface Table {
      bb: ByteBuffer;
      bb_pos: number;
    }

    /**
     * @type {number}
     * @const
     */
    const SIZEOF_SHORT: number;

    /**
     * @type {number}
     * @const
     */
    const SIZEOF_INT: number;

    /**
     * @type {number}
     * @const
     */
    const FILE_IDENTIFIER_LENGTH: number;

    /**
     * @enum {number}
     */
    enum Encoding { UTF8_BYTES, UTF16_STRING }

    /**
     * @type {Int32Array}
     * @const
     */
    const int32: Int32Array;

    /**
     * @type {Float32Array}
     * @const
     */
    const float32: Float32Array;

    /**
     * @type {Float64Array}
     * @const
     */
    const float64: Float64Array;

    /**
     * @type {boolean}
     * @const
     */
    const isLittleEndian: boolean;

    ////////////////////////////////////////////////////////////////////////////////

    class Long {
      /**
       * @type {number}
       * @const
       */
      low: number;

      /**
       * @type {number}
       * @const
       */
      high: number;

      /**
       * @type {flatbuffers.Long}
       * @const
       */
      static ZERO: Long;

      /**
       * @constructor
       * @param {number} high
       * @param {number} low
       */
      constructor(low: number, high: number);

      /**
       * @returns {number}
       */
      toFloat64(): number;

      /**
       * @param {flatbuffers.Long} other
       * @returns {boolean}
       */
      equals(other: any): boolean;

      /**
       * @param {number} low
       * @param {number} high
       */
      static create(low: number, high: number): Long;
    }

    ////////////////////////////////////////////////////////////////////////////////

    class Builder {
      /**
       * @constructor
       * @param {number=} initial_size
       */
      constructor(initial_size?: number);

      /**
       * In order to save space, fields that are set to their default value
       * don't get serialized into the buffer. Forcing defaults provides a
       * way to manually disable this optimization.
       *
       * @param {boolean} forceDefaults true always serializes default values
       */
      forceDefaults(forceDefaults: boolean): void;

      /**
       * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
       * called finish(). The actual data starts at the ByteBuffer's current position,
       * not necessarily at 0.
       *
       * @returns {flatbuffers.ByteBuffer}
       */
      dataBuffer(): ByteBuffer;

      /**
       * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
       * called finish(). The actual data starts at the ByteBuffer's current position,
       * not necessarily at 0.
       *
       * @returns {Uint8Array}
       */
      asUint8Array(): Uint8Array;

      /**
       * Prepare to write an element of `size` after `additional_bytes` have been
       * written, e.g. if you write a string, you need to align such the int length
       * field is aligned to 4 bytes, and the string data follows it directly. If all
       * you need to do is alignment, `additional_bytes` will be 0.
       *
       * @param {number} size This is the of the new element to write
       * @param {number} additional_bytes The padding size
       */
      prep(size: number, additional_bytes: number): void;

      /**
       * @param {number} byte_size
       */
      pad(byte_size: number): void;

      /**
       * @param {number} value
       */
      writeInt8(value: number): void;

      /**
       * @param {number} value
       */
      writeInt16(value: number): void;

      /**
       * @param {number} value
       */
      writeInt32(value: number): void;

      /**
       * @param {flatbuffers.Long} value
       */
      writeInt64(value: Long): void;

      /**
       * @param {number} value
       */
      writeFloat32(value: number): void;

      /**
       * @param {number} value
       */
      writeFloat64(value: number): void;

      /**
       * @param {number} value
       */
      addInt8(value: number): void;

      /**
       * @param {number} value
       */
      addInt16(value: number): void;

      /**
       * @param {number} value
       */
      addInt32(value: number): void;

      /**
       * @param {flatbuffers.Long} value
       */
      addInt64(value: Long): void;

      /**
       * @param {number} value
       */
      addFloat32(value: number): void;

      /**
       * @param {number} value
       */
      addFloat64(value: number): void;

      /**
       * @param {number} voffset
       * @param {number} value
       * @param {number} defaultValue
       */
      addFieldInt8(voffset: number, value: number, defaultValue: number): void;

      /**
       * @param {number} voffset
       * @param {number} value
       * @param {number} defaultValue
       */
      addFieldInt16(voffset: number, value: number, defaultValue: number): void;

      /**
       * @param {number} voffset
       * @param {number} value
       * @param {number} defaultValue
       */
      addFieldInt32(voffset: number, value: number, defaultValue: number): void;

      /**
       * @param {number} voffset
       * @param {flatbuffers.Long} value
       * @param {flatbuffers.Long} defaultValue
       */
      addFieldInt64(voffset: number, value: Long, defaultValue: Long): void;

      /**
       * @param {number} voffset
       * @param {number} value
       * @param {number} defaultValue
       */
      addFieldFloat32(voffset: number, value: number, defaultValue: number): void;

      /**
       * @param {number} voffset
       * @param {number} value
       * @param {number} defaultValue
       */
      addFieldFloat64(voffset: number, value: number, defaultValue: number): void;

      /**
       * @param {number} voffset
       * @param {flatbuffers.Offset} value
       * @param {flatbuffers.Offset} defaultValue
       */
      addFieldOffset(voffset: number, value: Offset, defaultValue: Offset): void;

      /**
       * Structs are stored inline, so nothing additional is being added. `d` is always 0.
       *
       * @param {number} voffset
       * @param {flatbuffers.Offset} value
       * @param {flatbuffers.Offset} defaultValue
       */
      addFieldStruct(voffset: number, value: Offset, defaultValue: Offset): void;

      /**
       * Structures are always stored inline, they need to be created right
       * where they're used.  You'll get this assertion failure if you
       * created it elsewhere.
       *
       * @param {flatbuffers.Offset} obj The offset of the created object
       */
      nested(obj: Offset): void;

      /**
       * Should not be creating any other object, string or vector
       * while an object is being constructed
       */
      notNested(): void;

      /**
       * Set the current vtable at `voffset` to the current location in the buffer.
       *
       * @param {number} voffset
       */
      slot(voffset: number): void;

      /**
       * @returns {flatbuffers.Offset} Offset relative to the end of the buffer.
       */
      offset(): Offset;

      /**
       * Doubles the size of the backing ByteBuffer and copies the old data towards
       * the end of the new buffer (since we build the buffer backwards).
       *
       * @param {flatbuffers.ByteBuffer} bb The current buffer with the existing data
       * @returns {flatbuffers.ByteBuffer} A new byte buffer with the old data copied
       * to it. The data is located at the end of the buffer.
       */
      static growByteBuffer(bb: ByteBuffer): ByteBuffer;

      /**
       * Adds on offset, relative to where it will be written.
       *
       * @param {flatbuffers.Offset} offset The offset to add
       */
      addOffset(offset: Offset): void;

      /**
       * Start encoding a new object in the buffer.  Users will not usually need to
       * call this directly. The FlatBuffers compiler will generate helper methods
       * that call this method internally.
       *
       * @param {number} numfields
       */
      startObject(numfields: number): void;

      /**
       * Finish off writing the object that is under construction.
       *
       * @returns {flatbuffers.Offset} The offset to the object inside `dataBuffer`
       */
      endObject(): Offset;

      /**
       * @param {flatbuffers.Offset} root_table
       * @param {string=} file_identifier
       */
      finish(root_table: Offset, file_identifier?: string): void;

      /**
       * This checks a required field has been set in a given table that has
       * just been constructed.
       *
       * @param {flatbuffers.Offset} table
       * @param {number} field
       */
      requiredField(table: Offset, field: number): void;

      /**
       * Start a new array/vector of objects.  Users usually will not call
       * this directly. The FlatBuffers compiler will create a start/end
       * method for vector types in generated code.
       *
       * @param {number} elem_size The size of each element in the array
       * @param {number} num_elems The number of elements in the array
       * @param {number} alignment The alignment of the array
       */
      startVector(elem_size: number, num_elems: number, alignment: number): void;

      /**
       * Finish off the creation of an array and all its elements. The array must be
       * created with `startVector`.
       *
       * @returns {flatbuffers.Offset} The offset at which the newly created array
       * starts.
       */
      endVector(): Offset;

      /**
       * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
       * instead of a string, it is assumed to contain valid UTF-8 encoded data.
       *
       * @param {string|Uint8Array} s The string to encode
       * @return {flatbuffers.Offset} The offset in the buffer where the encoded string starts
       */
      createString(s: string|Uint8Array): Offset;

      /**
       * Conveniance function for creating Long objects.
       *
       * @param {number} low
       * @param {number} high
       * @returns {Long}
       */
      createLong(low: number, high: number): Long;
    }

    ////////////////////////////////////////////////////////////////////////////////

    class ByteBuffer {
      /**
       * @constructor
       * @param {Uint8Array} bytes
       */
      constructor(bytes: Uint8Array);

      /**
       * @param {number} byte_size
       * @returns {flatbuffers.ByteBuffer}
       */
      static allocate(byte_size: number): ByteBuffer;

      /**
       * @returns {Uint8Array}
       */
      bytes(): Uint8Array;

      /**
       * @returns {number}
       */
      position(): number;

      /**
       * @param {number} position
       */
      setPosition(position: number): void;

      /**
       * @returns {number}
       */
      capacity(): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readInt8(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readUint8(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readInt16(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readUint16(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readInt32(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readUint32(offset: number): number;

      /**
       * @param {number} offset
       * @returns {flatbuffers.Long}
       */
      readInt64(offset: number): Long;

      /**
       * @param {number} offset
       * @returns {flatbuffers.Long}
       */
      readUint64(offset: number): Long;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readFloat32(offset: number): number;

      /**
       * @param {number} offset
       * @returns {number}
       */
      readFloat64(offset: number): number;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeInt8(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeUint8(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeInt16(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeUint16(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeInt32(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeUint32(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {flatbuffers.Long} value
       */
      writeInt64(offset: number, value: Long): void;

      /**
       * @param {number} offset
       * @param {flatbuffers.Long} value
       */
      writeUint64(offset: number, value: Long): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeFloat32(offset: number, value: number): void;

      /**
       * @param {number} offset
       * @param {number} value
       */
      writeFloat64(offset: number, value: number): void;

      /**
       * Look up a field in the vtable, return an offset into the object, or 0 if the
       * field is not present.
       *
       * @param {number} bb_pos
       * @param {number} vtable_offset
       * @returns {number}
       */
      __offset(bb_pos: number, vtable_offset: number): number;

      /**
       * Initialize any Table-derived type to point to the union at the given offset.
       *
       * @param {flatbuffers.Table} t
       * @param {number} offset
       * @returns {flatbuffers.Table}
       */
      __union<T extends flatbuffers.Table>(t: T, offset: number): T;

      /**
       * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
       * This allocates a new string and converts to wide chars upon each access.
       *
       * To avoid the conversion to UTF-16, pass flatbuffers.Encoding.UTF8_BYTES as
       * the "optionalEncoding" argument. This is useful for avoiding conversion to
       * and from UTF-16 when the data will just be packaged back up in another
       * FlatBuffer later on.
       *
       * @param {number} offset
       * @param {flatbuffers.Encoding=} optionalEncoding Defaults to UTF16_STRING
       * @returns {string|Uint8Array}
       */
      __string(offset: number, optionalEncoding?: Encoding): string|Uint8Array;

      /**
       * Retrieve the relative offset stored at "offset"
       * @param {number} offset
       * @returns {number}
       */
      __indirect(offset: number): number;

      /**
       * Get the start of data of a vector whose offset is stored at "offset" in this object.
       *
       * @param {number} offset
       * @returns {number}
       */
      __vector(offset: number): number;

      /**
       * Get the length of a vector whose offset is stored at "offset" in this object.
       *
       * @param {number} offset
       * @returns {number}
       */
      __vector_len(offset: number): number;

      /**
       * @param {string} ident
       * @returns {boolean}
       */
      __has_identifier(ident: string): boolean;

      /**
       * Conveniance function for creating Long objects.
       *
       * @param {number} low
       * @param {number} high
       * @returns {Long}
       */
      createLong(low: number, high: number): Long;
    }
  }
}
