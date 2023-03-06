/**
 * Integer pool which returns consistently increasing integers while integers
 * are in use, and previously-used integers when possible.
 */
export class IntegerPool {
    /**
     * The next integer to return if no more integers remain.
     */
    next_int: number;

    /**
     * Returns the next available integer in the pool. If possible, a previously
     * used integer will be returned.
     *
     * @return The next available integer.
     */
    next(): number;

    /**
     * Frees the given integer, allowing it to be reused.
     *
     * @param integer The integer to free.
     */
    free(integer: number): void;
}
