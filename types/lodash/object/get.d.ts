import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject,
            path: TKey | [TKey]
        ): TObject[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            object: TObject | null | undefined,
            path: TKey | [TKey]
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            object: TObject | null | undefined,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): TObject[TKey] | TDefault;

        /**
         * @see _.get
         */
        get<T>(
            object: NumericDictionary<T>,
            path: number
        ): T;

        /**
         * @see _.get
         */
        get<T>(
            object: NumericDictionary<T> | null | undefined,
            path: number
        ): T | undefined;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            object: NumericDictionary<T> | null | undefined,
            path: number,
            defaultValue: TDefault
        ): T | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            object: null | undefined,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            object: null | undefined,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get(
            object: any,
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): TValue[TKey];

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashImplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): TObject[TKey] | undefined;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashImplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): TObject[TKey] | TDefault;

        /**
         * @see _.get
         */
        get<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T>>,
            path: number
        ): T;

        /**
         * @see _.get
         */
        get<T>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            path: number
        ): T | undefined;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): T | TDefault;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: LoDashImplicitWrapper<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): TDefault;

        /**
         * @see _.get
         */
        get(
            this: LoDashImplicitWrapper<null | undefined>,
            path: PropertyPath
        ): undefined;

        /**
         * @see _.get
         */
        get<TResult>(
            path: PropertyPath,
            defaultValue?: any
        ): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.get
         */
        get<TKey extends keyof TValue>(
            path: TKey | [TKey]
        ): LoDashExplicitWrapper<TValue[TKey]>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(
            this: LoDashExplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
        ): LoDashExplicitWrapper<TObject[TKey] | undefined>;

        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(
            this: LoDashExplicitWrapper<TObject | null | undefined>,
            path: TKey | [TKey],
            defaultValue: TDefault
        ): LoDashExplicitWrapper<TObject[TKey] | TDefault>;

        /**
         * @see _.get
         */
        get<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T>>,
            path: number
        ): LoDashExplicitWrapper<T>;

        /**
         * @see _.get
         */
        get<T>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            path: number
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.get
         */
        get<T, TDefault>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            path: number,
            defaultValue: TDefault
        ): LoDashExplicitWrapper<T | undefined>;

        /**
         * @see _.get
         */
        get<TDefault>(
            this: LoDashExplicitWrapper<null | undefined>,
            path: PropertyPath,
            defaultValue: TDefault
        ): LoDashExplicitWrapper<TDefault>;

        /**
         * @see _.get
         */
        get(
            this: LoDashExplicitWrapper<null | undefined>,
            path: PropertyPath
        ): LoDashExplicitWrapper<undefined>;

        /**
         * @see _.get
         */
        get(
            path: PropertyPath,
            defaultValue?: any
        ): LoDashExplicitWrapper<any>;
    }
}