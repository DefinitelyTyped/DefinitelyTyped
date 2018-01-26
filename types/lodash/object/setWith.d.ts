import * as _ from "../index";
declare module "../index" {
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;

    interface LoDashStatic {
        /**
         * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
         * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
         * invoked with three arguments: (nsValue, key, nsObject).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @parem customizer The function to customize assigned values.
         * @return Returns object.
         */
        setWith<T extends object>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): T;

        setWith<T extends object, TResult>(
            object: T,
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<T>
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): this;

        /**
         * @see _.setWith
         */
        setWith<TResult>(
            path: PropertyPath,
            value: any,
            customizer?: SetWithCustomizer<TValue>
        ): LoDashExplicitWrapper<TResult>;
    }
}