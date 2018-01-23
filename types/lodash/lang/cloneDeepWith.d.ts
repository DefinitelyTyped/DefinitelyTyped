declare namespace _ {
    type CloneDeepWithCustomizer<TObject> = (value: any, key: number | string | undefined, object: TObject | undefined, stack: any) => any;

    interface LoDashStatic {
        /**
         * This method is like _.cloneWith except that it recursively clones value.
         *
         * @param value The value to recursively clone.
         * @param customizer The function to customize cloning.
         * @return Returns the deep cloned value.
         */
        cloneDeepWith<T>(
            value: T,
            customizer: CloneDeepWithCustomizer<T>
        ): any;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith<T>(value: T): T;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(
            customizer: CloneDeepWithCustomizer<TValue>
        ): any;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): TValue;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(
            customizer: CloneDeepWithCustomizer<TValue>
        ): LoDashExplicitWrapper<any>;

        /**
         * @see _.cloneDeepWith
         */
        cloneDeepWith(): this;
    }
}