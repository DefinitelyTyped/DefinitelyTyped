// Type definitions for non-npm package proposal-relative-indexing-method 0.1
// Project: https://github.com/tc39/proposal-relative-indexing-method
//          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
//          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
// Definitions by: Dmitry Semigradsky <https://github.com/Semigradsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface String {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): string | undefined;
}

interface Array<T> {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): T | undefined;
}

interface Int8Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Uint8Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Uint8ClampedArray {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Int16Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Uint16Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Int32Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Uint32Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Float32Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface Float64Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface BigInt64Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}

interface BigUint64Array {
    /**
     * Takes an integer value and returns the item at that index,
     * allowing for positive and negative integers.
     * Negative integers count back from the last item in the array.
     */
    at(index: number): number | undefined;
}
