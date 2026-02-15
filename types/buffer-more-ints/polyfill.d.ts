/// <reference types="node" />

declare global {
    interface BufferConstructor {
        /**
         * Checks if a value can be represented as a contiguous integer.
         */
        isContiguousInt(val: number): boolean;

        /**
         * Throws a TypeError if the value cannot be represented as a contiguous integer.
         */
        assertContiguousInt(val: number): void;
    }

    interface Buffer {
        // 24-bit integers
        readUInt24BE(offset: number): number;
        writeUInt24BE(val: number, offset: number): void;
        readUInt24LE(offset: number): number;
        writeUInt24LE(val: number, offset: number): void;
        readInt24BE(offset: number): number;
        writeInt24BE(val: number, offset: number): void;
        readInt24LE(offset: number): number;
        writeInt24LE(val: number, offset: number): void;

        // 40-bit integers
        readUInt40BE(offset: number): number;
        writeUInt40BE(val: number, offset: number): void;
        readUInt40LE(offset: number): number;
        writeUInt40LE(val: number, offset: number): void;
        readInt40BE(offset: number): number;
        writeInt40BE(val: number, offset: number): void;
        readInt40LE(offset: number): number;
        writeInt40LE(val: number, offset: number): void;

        // 48-bit integers
        readUInt48BE(offset: number): number;
        writeUInt48BE(val: number, offset: number): void;
        readUInt48LE(offset: number): number;
        writeUInt48LE(val: number, offset: number): void;
        readInt48BE(offset: number): number;
        writeInt48BE(val: number, offset: number): void;
        readInt48LE(offset: number): number;
        writeInt48LE(val: number, offset: number): void;

        // 56-bit integers
        readUInt56BE(offset: number): number;
        writeUInt56BE(val: number, offset: number): void;
        readUInt56LE(offset: number): number;
        writeUInt56LE(val: number, offset: number): void;
        readInt56BE(offset: number): number;
        writeInt56BE(val: number, offset: number): void;
        readInt56LE(offset: number): number;
        writeInt56LE(val: number, offset: number): void;

        // 64-bit integers
        readUInt64BE(offset: number): number;
        writeUInt64BE(val: number, offset: number): void;
        readUInt64LE(offset: number): number;
        writeUInt64LE(val: number, offset: number): void;
        readInt64BE(offset: number): number;
        writeInt64BE(val: number, offset: number): void;
        readInt64LE(offset: number): number;
        writeInt64LE(val: number, offset: number): void;

        // Generic read/write methods with length parameter
        readUIntBE(len: number, offset: number): number;
        writeUIntBE(len: number, val: number, offset: number): void;
        readUIntLE(len: number, offset: number): number;
        writeUIntLE(len: number, val: number, offset: number): void;
        readIntBE(len: number, offset: number): number;
        writeIntBE(len: number, val: number, offset: number): void;
        readIntLE(len: number, offset: number): number;
        writeIntLE(len: number, val: number, offset: number): void;
    }
}

export {};
