import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.toPairs
         */
        entries<T>(object?: Dictionary<T>): Array<[string, T]>;

        /**
         * @see _.toPairs
         */
        entries(object?: object): Array<[string, any]>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: LoDashImplicitWrapper<Dictionary<T>>): LoDashImplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): LoDashImplicitWrapper<Array<[string, any]>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        entries<T>(this: LoDashExplicitWrapper<Dictionary<T>>): LoDashExplicitWrapper<Array<[string, T]>>;

        /**
         * @see _.toPairs
         */
        entries(): LoDashExplicitWrapper<Array<[string, any]>>;
    }
}