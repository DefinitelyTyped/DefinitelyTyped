declare module Internal {
    namespace System {
        /**
         * Represents a union which preserves autocompletion.
         */
        type LiteralUnion<T extends I, I = string> = T | (I & {});
    }
}