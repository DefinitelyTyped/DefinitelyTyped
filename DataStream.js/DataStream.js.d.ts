// Type definitions for DataStream.js
// Project: https://github.com/kig/DataStream.js
// Definitions by: Tat <https://github.com/tatchx/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class DataStream {

    /**
      Big-endian const to use as default endianness.
      */
    static BIG_ENDIAN: boolean;
    
    /**
      Little-endian const to use as default endianness.
      */
    static LITTLE_ENDIAN: boolean;

    /**
    DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
    It's like a file-like DataView on steroids.

    @param {ArrayBuffer} arrayBuffer ArrayBuffer to read from.
    */
    constructor(arrayBuffer: ArrayBuffer);
    
    /**
    DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
    It's like a file-like DataView on steroids.

    @param arrayBuffer ArrayBuffer to read from.
    @param byteOffset Offset from arrayBuffer beginning for the DataStream.
    */
    constructor(arrayBuffer: ArrayBuffer, byteOffset: number);
    
    /**
    DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
    It's like a file-like DataView on steroids.

    @param arrayBuffer ArrayBuffer to read from.
    @param byteOffset Offset from arrayBuffer beginning for the DataStream.
    @param endianness DataStream.BIG_ENDIAN or DataStream.LITTLE_ENDIAN (the default).
    */
    constructor(arrayBuffer: ArrayBuffer, byteOffset: number, endianness: boolean);
    
    /**
    Saves the DataStream contents to the given filename.
    Uses Chrome's anchor download property to initiate download.
    * 
    @param filename Filename to save as.
    @return nothing
    */
    save(filename: string): void;
    
    /**
    Whether to extend DataStream buffer when trying to write beyond its size.
    If set, the buffer is reallocated to twice its current size until the
    requested write fits the buffer.
    */
    dynamicSize: boolean;
    
    /**
    Returns the byte length of the DataStream object.
    */
    byteLength: number;
    
    /**
    Set/get the backing ArrayBuffer of the DataStream object.
    The setter updates the DataView to point to the new buffer.
    */
    buffer: ArrayBuffer;
    
    /**
    Set/get the byteOffset of the DataStream object.
    The setter updates the DataView to point to the new byteOffset.
    */
    byteOffset: number;
    
    /**
    Set/get the backing DataView of the DataStream object.
    The setter updates the buffer and byteOffset to point to the DataView values.
    */
    dataView: Object;
    
    /**
    Sets the DataStream read/write position to given position.
    Clamps between 0 and DataStream length.
    * 
    @param pos Position to seek to.
    @return nothing
    */
    seek(pos: number): void;
    
    /**
    Returns true if the DataStream seek pointer is at the end of buffer and
    there's no more data to read.
    * 
    @return true if the seek pointer is at the end of the buffer.
    */
    isEof(): boolean;
    
    /**
    Maps an Int32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Int32Array to the DataStream backing buffer.
    */
    mapInt32Array(length: number): Int32Array;
    
    /**
    Maps an Int32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Int32Array to the DataStream backing buffer.
    */
    mapInt32Array(length: number, e: boolean): Int32Array;
    
    /**
    Maps an Int16Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Int16Array to the DataStream backing buffer.
    */
    mapInt16Array(length: number): Int16Array;
    
    /**
    Maps an Int16Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Int16Array to the DataStream backing buffer.
    */
    mapInt16Array(length: number, e: boolean): Int16Array;
    
    /**
    Maps an Int8Array into the DataStream buffer.
    * 
    Nice for quickly reading in data. 
    * 
    @param length Number of elements to map.
    @return Int8Array to the DataStream backing buffer.
    */
    mapInt8Array(length: number): Int8Array;
    
    /**
    Maps a Uint32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Uint32Array to the DataStream backing buffer.
    */
    mapUint32Array(length: number): Uint32Array;
    
    /**
    Maps a Uint32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Uint32Array to the DataStream backing buffer.
    */
    mapUint32Array(length: number, e: boolean): Uint32Array;
    
    /**
    Maps a Uint16Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Uint16Array to the DataStream backing buffer.
    */
    mapUint16Array(length: number): Uint16Array;
    
    /**
    Maps a Uint16Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Uint16Array to the DataStream backing buffer.
    */
    mapUint16Array(length: number, e: boolean): Uint16Array;
    
    /**
    Maps a Uint8Array into the DataStream buffer.
    * 
    Nice for quickly reading in data. 
    * 
    @param length Number of elements to map.
    @return Uint8Array to the DataStream backing buffer.
    */
    mapUint8Array(length: number): Uint8Array;

    /**
    Maps a Float64Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Float64Array to the DataStream backing buffer.
    */
    mapFloat64Array(length: number): Float64Array;
    
    /**
    Maps a Float64Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Float64Array to the DataStream backing buffer.
    */
    mapFloat64Array(length: number, e: boolean): Float64Array;
    
    /**
    Maps a Float32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @return Float32Array to the DataStream backing buffer.
    */
    mapFloat32Array(length: number): Float32Array;
    
    /**
    Maps a Float32Array into the DataStream buffer, swizzling it to native
    endianness in-place. The current offset from the start of the buffer needs to
    be a multiple of element size, just like with typed array views.
    * 
    Nice for quickly reading in data. Warning: potentially modifies the buffer
    contents.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return Float32Array to the DataStream backing buffer.
    */
    mapFloat32Array(length: number, e: boolean): Float32Array;
    
    /**
    Reads an Int32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Int32Array.
    */
    readInt32Array(length: number): Int32Array;
    
    /**
    Reads an Int32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Int32Array.
    */
    readInt32Array(length: number, e: boolean): Int32Array;
    
    /**
    Reads an Int16Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Int16Array.
    */
    readInt16Array(length: number): Int16Array;
    
    /**
    Reads an Int16Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Int16Array.
    */
    readInt16Array(length: number, e: boolean): Int16Array;
    
    /**
    Reads an Int8Array of desired length from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Int8Array.
    */
    readInt8Array(length: number): Int8Array;
    
    /**
    Reads an Uint32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Uint32Array.
    */
    readUint32Array(length: number): Uint32Array;
    
    /**
    Reads an Uint32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Uint32Array.
    */
    readUint32Array(length: number, e: boolean): Uint32Array;
    
    /**
    Reads an Uint16Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Uint16Array.
    */
    readUint16Array(length: number): Uint16Array;
    
    /**
    Reads an Uint16Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Uint16Array.
    */
    readUint16Array(length: number, e: boolean): Uint16Array;
    
    /**
    Reads an Uint8Array of desired length from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Uint8Array.
    */
    readUint8Array(length: number): Uint8Array;
    
    /**
    Reads a Float64Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Float64Array.
    */
    readFloat64Array(length: number, e: boolean): Float64Array;
    
    /**
    Reads a Float64Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Float64Array.
    */
    readFloat64Array(length: number): Float64Array;
    
    /**
    Reads a Float32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @param e Endianness of the data to read.
    @return The read Float32Array.
    */
    readFloat32Array(length: number, e: boolean): Float32Array;
    
    /**
    Reads a Float32Array of desired length and endianness from the DataStream.
    * 
    @param length Number of elements to map.
    @return The read Float32Array.
    */
    readFloat32Array(length: number): Float32Array;
    
    /**
    Writes an Int32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeInt32Array(arr: Int32Array, e: boolean): void;
    
    /**
    Writes an Int32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeInt32Array(arr: Int32Array): void;
    
    /**
    Writes an Int16Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeInt16Array(arr: Int16Array, e: boolean): void;
    
    /**
    Writes an Int16Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeInt16Array(arr: Int16Array): void;
    
    /**
    Writes an Int8Array to the DataStream.
    * 
    @param arr The array to write.
    */
    writeInt8Array(arr: Int8Array): void;
    
    /**
    Writes an Uint32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeUint32Array(arr: Uint32Array, e: boolean): void;
    
    /**
    Writes an Uint32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeUint32Array(arr: Uint32Array): void;
    
    /**
    Writes an Uint16Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeUint16Array(arr: Uint16Array, e: boolean): void;
    
    /**
    Writes an Uint16Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeUint16Array(arr: Uint16Array): void;
    
    /**
    Writes an Uint8Array to the DataStream.
    * 
    @param arr The array to write.
    */
    writeUint8Array(arr: Uint8Array): void;
    
    /**
    Writes a Float64Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeFloat64Array(arr: Float64Array): void;
    
    /**
    Writes a Float64Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeFloat64Array(arr: Float64Array, e: boolean): void;
    
    /**
    Writes a Float32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    */
    writeFloat32Array(arr: Float32Array): void;
    
    /**
    Writes a Float32Array of specified endianness to the DataStream.
    * 
    @param arr The array to write.
    @param e Endianness of the data to write.
    */
    writeFloat32Array(arr: Float32Array, e: boolean): void;
    
    /**
    Reads a 32-bit int from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readInt32(): number;
    
    /**
    Reads a 32-bit int from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readInt32(e: boolean): number;
    
    /**
    Reads a 16-bit int from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readInt16(): number;
    
    /**
    Reads a 16-bit int from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readInt16(e: boolean): number;
    
    /**
    Reads an 8-bit int from the DataStream.
    * 
    @return The read number.
    */
    readInt8(): number;
    
    /**
    Reads a 32-bit unsigned int from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readUint32(): number;
    
    /**
    Reads a 32-bit unsigned int from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readUint32(e: boolean): number;
    
    /**
    Reads a 16-bit unsigned int from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readUint16(): number;
    
    /**
    Reads a 16-bit unsigned int from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readUint16(e: boolean): number;
    
    /**
    Reads an 8-bit unsigned intfrom the DataStream.
    * 
    @return The read number.
    */
    readUint8(): number;
    
    /**
    Reads a 32-bit float from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readFloat32(): number;
    
    /**
    Reads a 32-bit float from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readFloat32(e: boolean): number;
    
    /**
    Reads a 64-bit float from the DataStream with the desired endianness.
    * 
    @return The read number.
    */
    readFloat64(): number;
    
    /**
    Reads a 64-bit float from the DataStream with the desired endianness.
    * 
    @param e Endianness of the number.
    @return The read number.
    */
    readFloat64(e: boolean): number;

    /**
    Writes a 32-bit int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeInt32(v: number): void;
        
    /**
    Writes a 32-bit int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeInt32(v: number, e: boolean): void;
    
    /**
    Writes a 16-bit int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeInt16(v: number): void;
        
    /**
    Writes a 16-bit int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeInt16(v: number, e: boolean): void;
    
    /**
    Writes an 8-bit int to the DataStream.
    * 
    @param v Number to write.
    */
    writeInt8(v: number): void;
    
    /**
    Writes a 32-bit undigned int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeUint32(v: number): void;
        
    /**
    Writes a 32-bit undigned int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeUint32(v: number, e: boolean): void;
    
    /**
    Writes a 16-bit undigned int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeUint16(v: number): void;
        
    /**
    Writes a 16-bit undigned int to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeUint16(v: number, e: boolean): void;
    
    /**
    Writes an 8-bit undigned int to the DataStream.
    * 
    @param v Number to write.
    */
    writeUint8(v: number): void;

    /**
    Writes a 32-bit float to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeFloat32(v: number): void;
        
    /**
    Writes a 32-bit float to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeFloat32(v: number, e: boolean): void;
    
    /**
    Writes a 64-bit float to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    */
    writeFloat64(v: number): void;
        
    /**
    Writes a 64-bit float to the DataStream with the desired endianness.
    * 
    @param v Number to write.
    @param e Endianness of the number.
    */
    writeFloat64(v: number, e: boolean): void;
    
    /**
    Reads a struct of data from the DataStream. The struct is defined as
    a flat array of [name, type]-pairs. See the example below:
    * 
    ds.readStruct([
    'headerTag', 'uint32', // Uint32 in DataStream endianness.
    'headerTag2', 'uint32be', // Big-endian Uint32.
    'headerTag3', 'uint32le', // Little-endian Uint32.
    'array', ['[]', 'uint32', 16], // Uint32Array of length 16.
    'array2Length', 'uint32',
    'array2', ['[]', 'uint32', 'array2Length'] // Uint32Array of length array2Length
    ]);
    * 
    The possible values for the type are as follows:
    * 
    // Number types
    // Unsuffixed number types use DataStream endianness.
    // To explicitly specify endianness, suffix the type with
    // 'le' for little-endian or 'be' for big-endian,
    // e.g. 'int32be' for big-endian int32.
    'uint8' -- 8-bit unsigned int
    'uint16' -- 16-bit unsigned int
    'uint32' -- 32-bit unsigned int
    'int8' -- 8-bit int
    'int16' -- 16-bit int
    'int32' -- 32-bit int
    'float32' -- 32-bit float
    'float64' -- 64-bit float
    * 
    // String types
    'cstring' -- ASCII string terminated by a zero byte.
    'string:N' -- ASCII string of length N, where N is a literal integer.
    'string:variableName' -- ASCII string of length $variableName,
    where 'variableName' is a previously parsed number in the current struct.
    'string,CHARSET:N' -- String of byteLength N encoded with given CHARSET.
    'u16string:N' -- UCS-2 string of length N in DataStream endianness.
    'u16stringle:N' -- UCS-2 string of length N in little-endian.
    'u16stringbe:N' -- UCS-2 string of length N in big-endian.
    * 
    // Complex types
    [name, type, name_2, type_2, ..., name_N, type_N] -- Struct
    function(dataStream, struct) {} -- Callback function to read and return data.
    {get: function(dataStream, struct) {},
    set: function(dataStream, struct) {}}
    -- Getter/setter functions to read and return data, handy for using the same
     struct definition for reading and writing structs.
    ['[]', type, length] -- Array of given type and length. The length can be either
                        a number, a string that references a previously-read
                        field, or a callback function(struct, dataStream, type){}.
                        If length is '*', reads in as many elements as it can.
                        * 
    @param structDefinition Struct definition object.
    @return The read struct. Null if failed to read struct.
    */
    readStruct(structDefinition: any[]): Object;
    
    /**
    Writes a struct to the DataStream. Takes a structDefinition that gives the
    types and a struct object that gives the values. Refer to readStruct for the
    structure of structDefinition.
    * 
    @param structDefinition Type definition of the struct.
    @param struct The struct data object.
    */
    writeStruct(structDefinition: Object, struct: Object): void;
  
    /**
    Read UCS-2 string of desired length and endianness from the DataStream.
    * 
    @param length The length of the string to read.
    @return The read string.
    */
    readUCS2String(length: number): string;
    
    /**
    Read UCS-2 string of desired length and endianness from the DataStream.
    * 
    @param length The length of the string to read.
    @param endianness The endianness of the string data in the DataStream.
    @return The read string.
    */
    readUCS2String(length: number, endianness: boolean): string;
    
    /**
    Write a UCS-2 string of desired endianness to the DataStream. The
    lengthOverride argument lets you define the number of characters to write.
    If the string is shorter than lengthOverride, the extra space is padded with
    zeroes.
    * 
    @param str The string to write.
    */
    writeUCS2String(str: string): void;
    
    /**
    Write a UCS-2 string of desired endianness to the DataStream. The
    lengthOverride argument lets you define the number of characters to write.
    If the string is shorter than lengthOverride, the extra space is padded with
    zeroes.
    * 
    @param str The string to write.
    @param endianness The endianness to use for the written string data.
    */
    writeUCS2String(str: string, endianness: boolean): void;
    
    /**
    Write a UCS-2 string of desired endianness to the DataStream. The
    lengthOverride argument lets you define the number of characters to write.
    If the string is shorter than lengthOverride, the extra space is padded with
    zeroes.
    * 
    @param str The string to write.
    @param endianness The endianness to use for the written string data.
    @param lengthOverride The number of characters to write.
    */
    writeUCS2String(str: string, endianness: boolean, lengthOverride: number): void;
    
    /**
    Read a string of desired length and encoding from the DataStream.
    * 
    @param length The length of the string to read in bytes.
    @return The read string.
    */
    readString(length: number): string;
    
    /**
    Read a string of desired length and encoding from the DataStream.
    * 
    @param length The length of the string to read in bytes.
    @param encoding The encoding of the string data in the DataStream. Defaults to ASCII.
    @return The read string.
    */
    readString(length: number, encoding: string): string;
    
    /**
    Writes a string of desired length and encoding to the DataStream.
    * 
    @param s The string to write.
    */
    writeString(s: string): void;
    
    /**
    Writes a string of desired length and encoding to the DataStream.
    * 
    @param s The string to write.
    @param encoding The encoding for the written string data. Defaults to ASCII.
    */
    writeString(s: string, encoding: string): void;
    
    /**
    Writes a string of desired length and encoding to the DataStream.
    * 
    @param s The string to write.
    @param encoding The encoding for the written string data. Defaults to ASCII.
    @param length The number of characters to write.
    */
    writeString(s: string, encoding: string, length: number): void;
    
    /**
    Read null-terminated string of desired length from the DataStream. Truncates
    the returned string so that the null byte is not a part of it.
    * 
    @return The read string.
    */
    readCString(): string;
    
    /**
    Read null-terminated string of desired length from the DataStream. Truncates
    the returned string so that the null byte is not a part of it.
    * 
    @param length The length of the string to read.
    @return The read string.
    */
    readCString(length: number): string;
    
    /**
    Writes a null-terminated string to DataStream and zero-pads it to length
    bytes. If length is not given, writes the string followed by a zero.
    If string is longer than length, the written part of the string does not have
    a trailing zero.
    * 
    @param s The string to write.
    */
    writeCString(s: string): void;
    
    /**
    Writes a null-terminated string to DataStream and zero-pads it to length
    bytes. If length is not given, writes the string followed by a zero.
    If string is longer than length, the written part of the string does not have
    a trailing zero.
    * 
    @param s The string to write.
    @param length The number of characters to write.
    */
    writeCString(s: string, length: number): void;
    
    /**
    Reads an object of type t from the DataStream, passing struct as the thus-far
    read struct to possible callbacks that refer to it. Used by readStruct for
    reading in the values, so the type is one of the readStruct types.
    * 
    @param t Type of the object to read.
    @return Returns the object on successful read, null on unsuccessful.
    */
    readType(t: Object): Object;
    
    /**
    Reads an object of type t from the DataStream, passing struct as the thus-far
    read struct to possible callbacks that refer to it. Used by readStruct for
    reading in the values, so the type is one of the readStruct types.
    * 
    @param t Type of the object to read.
    @param struct Struct to refer to when resolving length references and for calling callbacks.
    @return Returns the object on successful read, null on unsuccessful.
    */
    readType(t: Object, struct: Object): Object;
    
    /**
    Writes object v of type t to the DataStream.
    * 
    @param t Type of data to write.
    @param v Value of data to write.
    @param struct Struct to pass to write callback functions.
    */
    writeType(t: Object, v: Object, struct: Object): void;
}
