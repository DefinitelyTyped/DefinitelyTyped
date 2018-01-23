declare namespace _ {
    interface LoDashStatic {
        /**
         * Checks if value is classified as a RegExp object.
         * @param value The value to check.
         *
         * @return Returns true if value is correctly classified, else false.
         */
        isRegExp(value?: any): value is RegExp;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isRegExp
         */
        isRegExp(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isRegExp
         */
        isRegExp(): LoDashExplicitWrapper<boolean>;
    }
}