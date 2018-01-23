declare namespace _ {
    type ConformsPredicateObject<T> = {
        [P in keyof T]?: (val: T[P]) => boolean;
    };

    interface LoDashStatic {
        /**
         * Creates a function that invokes the predicate properties of `source` with the corresponding
         * property values of a given object, returning true if all predicates return truthy, else false.
         */
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms<T>(this: LoDashImplicitWrapper<ConformsPredicateObject<T>>): LoDashImplicitWrapper<(value: T) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms<T>(this: LoDashExplicitWrapper<ConformsPredicateObject<T>>): LoDashExplicitWrapper<(value: T) => boolean>;
    }
}