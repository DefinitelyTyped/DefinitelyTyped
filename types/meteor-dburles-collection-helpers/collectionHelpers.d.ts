// tslint:disable-next-line no-single-declare-module
declare module 'meteor/dburles:collection-helpers' {
    export {};
    type PropertyNamesMatching<T, TPred> = {
        [K in keyof T]: T[K] extends TPred ? K : never;
    }[keyof T];
    type PropertyNamesNotMatching<T, TPred> = {
        [K in keyof T]: T[K] extends TPred ? never : K;
    }[keyof T];

    // "T extends T ? ... : never" looks tautological, but actually serves to distribute over union types
    // https://github.com/microsoft/TypeScript/issues/28791#issuecomment-443520161
    type NonHelpers<T> = T extends T ? { [K in keyof T]: T[K] & ConflictsWithHelper<T[K]> }[keyof T] : never;

    type HelpersOf<T> = T extends T ? Pick<T, PropertyNamesMatching<Required<T>, Func> | PropertyNamesNotMatching<T, NonHelpers<T>>> : never;
    type NonHelpersOf<T> = T extends T ? Pick<
        T,
        PropertyNamesNotMatching<Required<T>, Func> & PropertyNamesMatching<T, NonHelpers<T>>
    > : never;

    type Func = (...args: any[]) => any;

    type SetThisArg<TThis, T> = T extends T ? {
        [K in keyof T]: T[K] extends (...args: infer TArgs) => infer TRet
            ? (this: TThis, ...args: TArgs) => TRet
            : T[K];
    } : never;

    interface HelperBrand {
        _meteor_dburles_collection_helpers_isHelper: true;
    }
    type ConflictsWithHelper<T> = T & { _meteor_dburles_collection_helpers_isHelper?: false };
    interface DataBrand<T> {
        _meteor_dburles_collection_helpers_isData?: [true, T];
    }
    export type NonData<T> = T extends DataBrand<infer U> ? U : T;
    /**
     * Use to declare a non-function helper - it'll be optional when inserting values but required when adding helpers
     */
    export type Helper<T> = T | (T & HelperBrand);
    /**
     * All methods and Helper<T>s declared on the type, made non-optional.
     * This is what's required when defining helpers for a collection.
     */
    export type Helpers<T> = SetThisArg<Full<T>, T extends T ? Required<HelpersOf<NonData<T>>> : never>;
    /**
     * Just the non-method/Helper properties of the type, with the methods and Helpers made optional.
     * No need to declare a Collection<Data<T>>; all Collection methods already accept a Data<T>.
     */
    export type Data<T> = DataBrand<T> & NonHelpersOf<T> & (T extends T ? Partial<HelpersOf<T>> : never);
    /**
     * The version of a type that comes out of the collection (with helpers attached).
     */
    export type Full<T> = NonData<T> & (T extends T ? Required<HelpersOf<NonData<T>>> : never);
}
