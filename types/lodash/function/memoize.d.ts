import * as _ from "../index";
declare module "../index" {
    interface MemoizedFunction {
        cache: MapCache;
    }

    interface LoDashStatic {
        /**
         * Creates a function that memoizes the result of func. If resolver is provided it determines the cache key for
         * storing the result based on the arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is coerced to a string and used as the cache key. The func is invoked with
         * the this binding of the memoized function.
         *
         * @param func The function to have its output memoized.
         * @param resolver The function to resolve the cache key.
         * @return Returns the new memoizing function.
         */
        memoize: {
            <T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): LoDashImplicitWrapper<TValue & MemoizedFunction>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.memoize
         */
        memoize(resolver?: (...args: any[]) => any): LoDashExplicitWrapper<TValue & MemoizedFunction>;
    }
}