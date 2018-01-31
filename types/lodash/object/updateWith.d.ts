import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like `_.update` except that it accepts `customizer` which is
         * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
         * path creation is handled by the method instead. The `customizer` is invoked
         * with three arguments: (nsValue, key, nsObject).
         *
         * **Note:** This method mutates `object`.
         *
         * @since 4.6.0
         * @category Object
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @param [customizer] The function to customize assigned values.
         * @returns Returns `object`.
         * @example
         *
         * var object = {};
         *
         * _.updateWith(object, '[0][1]', _.constant('a'), Object);
         * // => { '0': { '1': 'a' } }
         */
        updateWith<T extends object>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): T;

        /**
         * @see _.updateWith
         */
        updateWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.updateWith
         */
        updateWith(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.updateWith
         */
        updateWith<TResult>(
            path: PropertyPath,
            updater: (oldValue: any) => any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashExplicitWrapper<TResult>;
    }
}