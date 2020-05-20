// Type definitions for bit-array v0.2.2
// Project: https://github.com/bramstein/bit-array
// Definitions by: Mudkip <https://github.com/mudkipme>
// Definitions: https://github.com/mudkipme/DefinitelyTyped

declare module "bit-array" {

    class BitArray {
        /**
         * Creates a new empty BitArray with the given length or initialises the BitArray with the given hex representation.
         */
        constructor(size: number, hex?: string);

        /**
         * Returns the total number of bits in this BitArray.
         */
        size(): number;

        /**
         * Sets the bit at index to a value (boolean.)
         */
        set(index: number, value: boolean): BitArray;

        /**
         * Toggles the bit at index. If the bit is on, it is turned off. Likewise, if the bit is off it is turned on.
         */
        toggle(index: number): BitArray;

        /**
         * Returns the value of the bit at index (boolean.)
         */
        get(index: number): boolean;

        /**
         * Resets the BitArray so that it is empty and can be re-used.
         */
        reset(): BitArray;

        /**
         * Returns a copy of this BitArray.
         */
        copy(): BitArray;

        /**
         * Returns true if this BitArray equals another. Two BitArrays are considered
         * equal if both have the same length and bit pattern.
         */
        equals(x: BitArray): boolean;

        /**
         * Returns the JSON representation of this BitArray.
         */
        toJSON(): string;

        /**
         * Returns a string representation of the BitArray with bits
         * in mathemetical order.
         */
        toBinaryString(): string;

        /**
         * Returns a hexadecimal string representation of the BitArray
         * with bits in logical order.
         */
        toHexString(): string;

        /**
         * Returns a string representation of the BitArray with bits
         * in logical order.
         */
        toString(): string;

        /**
         * Convert the BitArray to an Array of boolean values (slow).
         */
        toArray(): boolean[];

        /**
         * Returns the total number of bits set to one in this BitArray.
         */
        count(): number;

        /**
         * Inverts this BitArray.
         */
        not(): BitArray;

        /**
         * Bitwise OR on the values of this BitArray using BitArray x.
         */
        or(x: BitArray): BitArray;

        /**
         * Bitwise AND on the values of this BitArray using BitArray x.
         */
        and(x: BitArray): BitArray;

        /**
         * Bitwise XOR on the values of this BitArray using BitArray x.
         */
        xor(x: BitArray): BitArray;
    }

    export = BitArray;
}
