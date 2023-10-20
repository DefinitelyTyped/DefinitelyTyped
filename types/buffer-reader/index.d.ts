/// <reference types="node"/>

export = BufferReader;

declare class BufferReader {
    /**
     * Create a new reader, if no buffer provided, a empty buffer will be used.
     */
    constructor(buffer?: Buffer);
    /**
     * Append new buffer to the end of current reader.
     * @param buffer buffer to append
     */
    append(buffer: Buffer): void;
    /**
     * Return current position of the reader.
     */
    tell(): number;
    /**
     * Set new position of the reader, if the pos is invalid, an exception will be raised.
     * @param position new position
     */
    seek(position: number): void;
    /**
     * Move the position of reader by offset, offset can be negative; it can be used to skip some bytes.
     * @param offset offset to move by
     */
    move(offset: number): void;
    /**
     * Get all the remaining bytes as a Buffer.
     */
    restAll(): Buffer;
    /**
     * Read a buffer with specified length.
     * @param length specified length
     */
    nextBuffer(length: number): Buffer;
    /**
     * Read next length of bytes as String, encoding default is 'utf8'.
     * @param length length of the string to read
     * @param encoding encoding of the string
     */
    nextString(length: number, encoding?: string): string;
    /**
     * Read next bytes till the end of buffer as null-terminated string, encoding default is 'utf8'.
     * @param encoding encoding of the string
     */
    nextStringZero(encoding?: string): string;
    /**
     * Read next bytes as Int8, the value is just as the same format Buffer in nodejs doc.
     */
    nextInt8(): number;
    /**
     * Read next bytes as UInt8, the value is just as the same format Buffer in nodejs doc.
     */
    nextUInt8(): number;
    /**
     * Read next bytes as Int16LE, the value is just as the same format Buffer in nodejs doc.
     */
    nextInt16LE(): number;
    /**
     * Read next bytes as UInt16LE, the value is just as the same format Buffer in nodejs doc.
     */
    nextUInt16LE(): number;
    /**
     * Read next bytes as Int16BE, the value is just as the same format Buffer in nodejs doc.
     */
    nextInt16BE(): number;
    /**
     * Read next bytes as UInt16BE, the value is just as the same format Buffer in nodejs doc.
     */
    nextUInt16BE(): number;
    /**
     * Read next bytes as Int32LE, the value is just as the same format Buffer in nodejs doc.
     */
    nextInt32LE(): number;
    /**
     * Read next bytes as UInt32LE, the value is just as the same format Buffer in nodejs doc.
     */
    nextUInt32LE(): number;
    /**
     * Read next bytes as Int32BE, the value is just as the same format Buffer in nodejs doc.
     */
    nextInt32BE(): number;
    /**
     * Read next bytes as UInt32BE, the value is just as the same format Buffer in nodejs doc.
     */
    nextUInt32BE(): number;
    /**
     * Read next bytes as FloatLE, the value is just as the same format Buffer in nodejs doc.
     */
    nextFloatLE(): number;
    /**
     * Read next bytes as FloatBE, the value is just as the same format Buffer in nodejs doc.
     */
    nextFloatBE(): number;
    /**
     * Read next bytes as Double32LE, the value is just as the same format Buffer in nodejs doc.
     */
    nextDouble32LE(): number;
    /**
     * Read next bytes as Double32BE, the value is just as the same format Buffer in nodejs doc.
     */
    nextDouble32BE(): number;
}
