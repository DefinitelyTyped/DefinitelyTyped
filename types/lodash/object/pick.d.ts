import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an object composed of the picked `object` properties.
         *
         * @category Object
         * @param object The source object.
         * @param [props] The property names to pick, specified
         *  individually or in arrays.
         * @returns Returns the new object.
         * @example
         *
         * var object = { 'a': 1, 'b': '2', 'c': 3 };
         *
         * _.pick(object, ['a', 'c']);
         * // => { 'a': 1, 'c': 3 }
         */
        pick<T extends object, U extends keyof T>(
            object: T,
             ...props: Array<Many<U>>
        ): Pick<T, U>;

        /**
         * @see _.pick
         */
        pick<T>(
            object: T | null | undefined,
            ...props: PropertyPath[]
        ): PartialDeep<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: LoDashImplicitWrapper<T>,
            ...props: Array<Many<U>>
        ): LoDashImplicitWrapper<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashImplicitWrapper<PartialObject<T>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(
            this: LoDashExplicitWrapper<T>,
            ...props: Array<Many<U>>
        ): LoDashExplicitWrapper<Pick<T, U>>;

        /**
         * @see _.pick
         */
        pick<T extends object>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            ...props: PropertyPath[]
        ): LoDashExplicitWrapper<PartialObject<T>>;
    }
}