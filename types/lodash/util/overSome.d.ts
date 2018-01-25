import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.overSome
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashImplicitWrapper<(...args: T[]) => boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.overSome
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): LoDashExplicitWrapper<(...args: T[]) => boolean>;
    }
}