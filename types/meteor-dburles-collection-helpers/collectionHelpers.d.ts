// tslint:disable-next-line no-single-declare-module
declare module 'meteor/dburles:collection-helpers' {
    export {};
    type PropertyNamesMatching<T, TPred> = {
        [K in keyof T]: T[K] extends TPred ? K : never;
    }[keyof T];
    type PropertyNamesNotMatching<T, TPred> = {
        [K in keyof T]: T[K] extends TPred ? never : K;
    }[keyof T];

    /**
     * Use to declare a non-function helper - it'll be optional when inserting values but required when adding helpers
     * Tip: Use OptionalHelper<T> to declare a helper you might or might not provide - it won't be required
     * when providing helpers, and won't be guaranteed on Full<T>
     */
    // "T extends T ? ... : never" looks tautological, but actually serves to distribute over union types
    // https://github.com/microsoft/TypeScript/issues/28791#issuecomment-443520161
    export type Helper<T> = T extends T
        ? T extends FlavorUnsupportedTypes
            ? T | HelperBrand
            : T & HelperFlavor
        : never;

    // where possible, helpers are tagged as (T & HelperFlavor)
    // this is a technique called "flavoring" - (T & HelperFlavor) is assignable both to and from T for most T,
    // but the presence of the flavor can be checked since (T & HelperFlavor) is also assignable to HelperFlavor
    // (note that HelperFlavor is a "weak type" - since all its properties are optional, you might think anything
    // would be assignable to it, but Typescript prohibits assigning any type that doesn't share at least one
    // property with it)
    // weirdly, ({} & HelperFlavor) still accepts {}!
    interface HelperFlavor {
        _meteor_dburles_collection_helpers_isHelper?: Flavor;
    }
    // for types where (T & HelperFlavor) === never, (T | HelperBrand) is used instead,
    // and the HelperBrand is stripped off in HelpersOf
    // this is less preferable, because it means:
    // - on a value of the original interface type TInterface, Helper<null> and Helper<T | null> properties will
    //   not be assignable to null or to (T | null) respectively
    // - Helpers<Helpers<T>> !== Helpers<T> when T has Helper<null> or Helper<T | null> properties
    // however, this appears to be a limitation of Typescript (with strict null checks on, null and undefined
    // simply *can't* extend anything besides themselves (and void in undefined's case), so there's no way to
    // flavor them)
    interface HelperBrand {
        _meteor_dburles_collection_helpers_isBrandUnsupportedHelper: Brand;
    }
    // types where HelperBrand will be used instead of HelperFlavor
    type FlavorUnsupportedTypes = null | undefined;

    /**
     * All methods and Helper<T>s declared on the type, made non-optional.
     * This is what's required when defining helpers for a collection.
     */
    export type Helpers<T> = FlavorAsHelpers<
        T,
        // methods will only ever get called on a Full<T> (unless you directly declare a Helpers<T>, but *why*)
        ThisType<Full<T>> & (T extends T ? HelpersOf<NonHelpers<NonData<T>>> : never)
    >;

    // used to flavor Helpers<T> so we can get back to the original T if needed
    // not to be confused with HelperFlavor
    interface HelpersFlavor<T> {
        _meteor_dburles_collection_helpers_isHelpersOf?: [Flavor, T];
    }
    // apply HelpersFlavor, but only if the resulting type wouldn't be never or weak
    type FlavorAsHelpers<TOriginal, TToFlavor> = [TToFlavor] extends [TToFlavor & HelpersFlavor<TOriginal>]
        ? TToFlavor & HelpersFlavor<TOriginal>
        : TToFlavor;
    /**
     * NonHelpers<Helpers<T>> === T
     */
    export type NonHelpers<T> = T extends HelpersFlavor<infer U> ? U : T;

    // To get all the helper properties, we union the list of function properties and the list of Helper<T> properties.
    // Make anything not marked optional required, and anything marked optional optional.
    type HelpersOf<T> = T extends T
        ? RemoveHelperBrands<
              Required<
                  Pick<
                      T,
                      Exclude<
                          PropertyNamesMatching<Required<T>, Func> | HelperNames<Required<T>>,
                          OptionalHelperNames<Required<T>>
                      >
                  >
              > &
                  Partial<Pick<T, OptionalHelperNames<Required<T>>>>
          >
        : never;

    type Func = (...args: any[]) => any;

    // The names of all properties of T with either a HelperBrand or a HelperFlavor (whether required or optional)
    type HelperNames<T> = T extends T
        ? {
              [K in keyof T]: Exclude<T[K], undefined> extends infer NoUndefined
                  ? [HelperBrand] extends [NoUndefined]
                      ? K
                      : [HelperBrand | OptionalHelperBrand] extends [NoUndefined]
                      ? K
                      : [Required<NoUndefined>] extends [Required<HelperFlavor>]
                      ? K
                      : [Required<NoUndefined>] extends [Required<HelperFlavor & OptionalHelperFlavor>]
                      ? K
                      : never
                  : never;
          }[keyof T]
        : never;

    // We also want to strip brands from the flavor-unsupported types - since the brands are no longer needed to
    // tell us which types are helpers, *
    type RemoveHelperBrands<T> = {
        [K in keyof T]: Exclude<RemoveHelperFlavorForVoid<T[K]>, HelperBrand | OptionalHelperBrand>;
    };

    // void is a bit of a weird case; unlike the others, it doesn't explicitly become never when flavored,
    // and (void & HelperFlavor) *is* assignable to void, but only other expressions of type (void & HelperFlavor)
    // are assignable to it
    // however, this is just enough to let us support it with a bit of special-casing - convert it back to normal
    // void when stripping helper brands, and Helpers<TInterface>.helperVoidProperty can be assigned undefined!
    // This is one way to make a helper with an optional value that can be read off a raw TInterface (although
    // Helper<T | false> would work almost as well).
    // tslint:disable-next-line void-return
    type RemoveHelperFlavorForVoid<T> = T extends void & HelperFlavor ? void : T;

    // however, we can do better
    /**
     * Use this to indicate a helper which can be omitted when providing helpers.
     * Just marking the property as optional won't make it optional when providing helpers, as that's overloaded
     * as meaning "an instance of this interface can be created from an object literal without providing its
     * helpers". If you actually want a helper that's only sometimes there, use this.
     */
    export type OptionalHelper<T> = T extends T
        ? T extends FlavorUnsupportedTypes
            ? T | HelperBrand | OptionalHelperBrand | undefined
            : (T & HelperFlavor & OptionalHelperFlavor) | undefined
        : never;
    interface OptionalHelperFlavor {
        _meteor_dburles_collection_helpers_isOptionalHelper?: Flavor;
    }
    interface OptionalHelperBrand {
        _meteor_dburles_collection_helpers_isBrandUnsupportedOptionalHelper?: Brand;
    }
    type OptionalHelperNames<T> = T extends T
        ? {
              [K in keyof T]: Exclude<T[K], undefined> extends infer NoUndefined
                  ? [HelperBrand | OptionalHelperBrand] extends [NoUndefined]
                      ? K
                      : [Required<NoUndefined>] extends [Required<HelperFlavor & OptionalHelperFlavor>]
                      ? K
                      : never
                  : never;
          }[keyof T]
        : never;

    interface DataFlavor<T> {
        _meteor_dburles_collection_helpers_isData?: [Flavor, T];
    }
    /**
     * Just the non-method/Helper properties of the type, with the methods and Helpers made optional.
     * No need to declare a Collection<Data<T>>; all Collection methods already accept a Data<T>.
     */
    export type Data<T> = DataFlavor<T> & NonHelpersOf<T> & (T extends T ? Partial<HelpersOf<T>> : never);
    /**
     * NonData<Data<T>> === T
     */
    export type NonData<T> = T extends DataFlavor<infer U> ? U : T;

    // All the members of T that aren't helpers
    type NonHelpersOf<T> = T extends T
        ? Pick<
              T,
              Exclude<
                  PropertyNamesNotMatching<Required<T>, Func>,
                  HelperNames<Required<T>> | OptionalHelperNames<Required<T>>
              >
          >
        : never;

    /**
     * The version of a type that comes out of the collection (with helpers attached).
     */
    export type Full<T> = NonData<NonHelpers<T>> & (T extends T ? HelpersOf<NonData<NonHelpers<T>>> : never);

    type Brand = "_meteor_dburles_collection_helpers_brand";
    type Flavor = "_meteor_dburles_collection_helpers_flavor";

    /**
     * Collection.helpers<AllowPartial>() allows declaring only some of a collection's helpers,
     * rather than enforcing that they be declared all at once.
     * Only use this if you know what you're doing - it's assumed that all of a collection's helpers
     * will be provided before any items are retrieved from it.
     */
    export type AllowPartial = "_meteor_dburles_collection_helpers_allowPartial";
    /**
     * Some subset of a collection's helpers - only used by Collection.helpers<allowPartial>()
     */
    export type PartialHelpers<T> = ThisType<NonData<NonHelpers<T>>> & Partial<Helpers<T>>;
}
