/// <reference path="LiteralUnion.d.ts" />
declare namespace Internal {
    namespace System {
        /**
         * Represents either a key of `T` or a `string`.
         */
        export type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;
    }
}