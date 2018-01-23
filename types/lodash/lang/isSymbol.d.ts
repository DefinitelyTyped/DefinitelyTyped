declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        isSymbol(value: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isSymbol
         */
        isSymbol(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isSymbol
         */
        isSymbol(): LoDashExplicitWrapper<boolean>;
    }
}