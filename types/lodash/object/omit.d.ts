import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * The opposite of `_.pick`; this method creates an object composed of the
         * own and inherited enumerable properties of `object` that are not omitted.
         *
         * @category Object
         * @param object The source object.
         * @param [paths] The property names to omit, specified
         *  individually or in arrays..
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.omit(object, ['a', 'c']);
         * // => { 'b': '2' }
         */
        omit<T>(
            object: Dictionary<T>,
            ...paths: PropertyPath[]
        ): Dictionary<T>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            object: T | null | undefined,
            ...paths: PropertyPath[]
        ): PartialObject<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.omit
         */
        omit<T>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            ...paths: PropertyPath[]
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...paths: PropertyPath[]
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.omit
         */
        omit<T>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            ...paths: PropertyPath[]
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         * @see _.omit
         */
        omit<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...paths: PropertyPath[]
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }
}