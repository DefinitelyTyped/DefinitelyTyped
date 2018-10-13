declare namespace adone.math {
    /**
     * Represents a set of bits
     */
    class BitSet {
        /**
         * Creates a new bitset of n bits
         */
        constructor(n: number);

        /**
         * Creates a new bitset from a dehydrated bitset
         */
        constructor(key: string);

        /**
         * Checks whether a bit at a specific index is set
         */
        get(idx: number): boolean;

        /**
         * Sets a single bit.
         * Returns true if set was successfull
         */
        set(idx: number): boolean;

        /**
         * Sets a range of bits.
         * Returns true if set was successfull
         */
        setRange(from: number, to: number): boolean;

        /**
         * Unsets a single bit.
         * Returns true if unset was successfull
         */
        unset(idx: number): boolean;

        /**
         * Unsets a range of bits.
         * Returns true if unset was successfull
         */
        unsetRange(from: number, to: number): boolean;

        /**
         * Toggles a single bit
         */
        toggle(idx: number): boolean;

        /**
         * Toggles a range of bits
         */
        toggleRange(from: number, to: number): boolean;

        /**
         * Clears the entire bitset
         */
        clear(): boolean;

        /**
         * Clones the set
         */
        clone(): BitSet;

        /**
         * Turns the bitset into a comma separated string that skips leading & trailing 0 words.
         * Ends with the number of leading 0s and MAX_BIT.
         * Useful if you need the bitset to be an object key (eg dynamic programming).
         * Can rehydrate by passing the result into the constructor
         */
        dehydrate(): string;

        /**
         * Performs a bitwise AND on 2 bitsets or 1 bitset and 1 index.
         * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
         */
        and(value: number | BitSet): BitSet;

        /**
         * Performs a bitwise OR on 2 bitsets or 1 bitset and 1 index.
         * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
         */
        or(value: number | BitSet): BitSet;

        /**
         * Performs a bitwise XOR on 2 bitsets or 1 bitset and 1 index.
         * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
         */
        xor(value: number | BitSet): BitSet;

        /**
         * Runs a custom function on every set bit.
         * Faster than iterating over the entire bitset with a get().
         * If the callback returns `false` it stops iterating.
         */
        forEach(callback: ((idx: number) => void | boolean)): void;

        /**
         * Performs a circular shift bitset by an offset
         *
         * @param n number of positions that the bitset that will be shifted to the right. Using a negative number will result in a left shift.
         */
        circularShift(n: number): BitSet;

        /**
         * Gets the cardinality (count of set bits) for the entire bitset
         */
        getCardinality(): number;

        /**
         * Gets the indices of all set bits
         */
        getIndices(): number[];

        /**
         * Checks if one bitset is subset of another.
         */
        isSubsetOf(other: BitSet): boolean;

        /**
         * Quickly determines if a bitset is empty
         */
        isEmpty(): boolean;

        /**
         * Quickly determines if both bitsets are equal (faster than checking if the XOR of the two is === 0).
         * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
         */
        isEqual(other: BitSet): boolean;

        /**
         * Gets a string representation of the entire bitset, including leading 0s
         */
        toString(): string;

        /**
         * Finds first set bit (useful for processing queues, breadth-first tree searches, etc.).
         * Returns -1 if not found
         *
         * @param startWord the word to start with (only used internally by nextSetBit)
         */
        ffs(startWord?: number): number;

        /**
         * Finds first zero (unset bit).
         * Returns -1 if not found
         *
         * @param startWord the word to start with (only used internally by nextUnsetBit)
         */
        ffz(startWord?: number): number;

        /**
         * Finds last set bit.
         * Returns -1 if not found
         *
         * @param startWord the word to start with (only used internally by previousSetBit)
         */
        fls(startWord?: number): number;

        /**
         * Finds last zero (unset bit).
         * Returns -1 if not found
         *
         * @param startWord the word to start with (only used internally by previousUnsetBit)
         */
        flz(startWord?: number): number;

        /**
         * Finds first set bit, starting at a given index.
         * Return -1 if not found
         *
         * @param idx the starting index for the next set bit
         */
        nextSetBit(idx: number): number;

        /**
         * Finds first unset bit, starting at a given index.
         * Return -1 if not found
         *
         * @param idx the starting index for the next unset bit
         */
        nextUnsetBit(idx: number): number;

        /**
         * Finds last set bit, up to a given index.
         * Returns -1 if not found
         *
         * @param idx the starting index for the next unset bit (going in reverse)
         */
        previousSetBit(idx: number): number;

        /**
         * Finds last unset bit, up to a given index.
         * Returns -1 if not found
         */
        previousUnsetBit(idx: number): number;

        /**
         * Converts the bitset to a math.Long number
         */
        toLong(): Long;

        /**
         * Reads an unsigned integer of the given bits from the given offset
         *
         * @param bits number of bits, 1 by default
         * @param offset offset, 0 by default
         */
        readUInt(bits?: number, offset?: number): number;

        /**
         * Writes the given unsigned integer
         *
         * @param val integer
         * @param bits number of bits to write, 1 by default
         * @param offset write offset, 0 by default
         */
        writeUInt(val: number, bits?: number, offset?: number): void;

        /**
         * Creates a new BitSet from the given math.Long number
         */
        static fromLong(l: Long): BitSet;
    }
}
