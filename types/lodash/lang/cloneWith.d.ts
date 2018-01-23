declare namespace _ {
    type CloneWithCustomizer<TValue, TResult> = (value: TValue, key: number | string | undefined, object: any, stack: any) => TResult;

    interface LoDashStatic {
        /**
         * This method is like _.clone except that it accepts customizer which is invoked to produce the cloned value.
         * If customizer returns undefined cloning is handled by the method instead.
         *
         * @param value The value to clone.
         * @param customizer The function to customize cloning.
         * @return Returns the cloned value.
         */
        cloneWith<T, TResult extends object | string | number | boolean | null>(
            value: T,
            customizer: CloneWithCustomizer<T, TResult>
        ): TResult;

        /**
         * @see _.cloneWith
         */
        cloneWith<T, TResult>(
            value: T,
            customizer: CloneWithCustomizer<T, TResult | undefined>
        ): TResult | T;

        /**
         * @see _.cloneWith
         */
        cloneWith<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: CloneWithCustomizer<TValue, TResult>
        ): TResult;

        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(
            customizer: CloneWithCustomizer<TValue, TResult | undefined>
        ): TResult | TValue;

        /**
         * @see _.cloneWith
         */
        cloneWith(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneWith
         */
        cloneWith<TResult extends object | string | number | boolean | null>(
            customizer: CloneWithCustomizer<TValue, TResult>
        ): LoDashExplicitWrapper<TResult>;

        /**
         * @see _.cloneWith
         */
        cloneWith<TResult>(
            customizer: CloneWithCustomizer<TValue, TResult | undefined>
        ): LoDashExplicitWrapper<TResult | TValue>;

        /**
         * @see _.cloneWith
         */
        cloneWith(): this;
    }
}