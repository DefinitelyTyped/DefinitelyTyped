declare namespace _ {
    interface LoDashStatic {
       /**
       * Recursively flatten array up to depth times.
       *
       * @param array The array to recursively flatten.
       * @param number The maximum recursion depth.
       * @return Returns the new flattened array.
       */
       flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, depth?: number): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
       /**
        * @see _.flattenDeep
        */
       flattenDepth<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
       /**
        * @see _.flattenDeep
        */
       flattenDepth<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>, depth?: number): LoDashExplicitWrapper<T[]>;
    }
}