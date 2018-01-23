declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an array of elements split into groups the length of size. If collection can’t be split evenly, the
         * final chunk will be the remaining elements.
         *
         * @param array The array to process.
         * @param size The length of each chunk.
         * @return Returns the new array containing chunks.
         */
        chunk<T>(
            array: List<T> | null | undefined,
            size?: number
        ): T[][];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashImplicitWrapper<T[][]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.chunk
         */
        chunk<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            size?: number,
        ): LoDashExplicitWrapper<T[][]>;
    }
}