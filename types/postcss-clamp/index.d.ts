import { PluginCreator } from "postcss";

declare namespace postcssClamp {
    interface Options {
        /**
         * Whether values with the same unit should be precalculated.
         * @example
         * ```css
         * .foo {
         *   width: clamp(10em, 4px, 10px);
         * }
         * ```
         *
         * Becomes
         *
         * ```css
         * .foo {
         *     width: max(10em, 14px);
         * }
         * ```
         * @see {@link <https://github.com/polemius/postcss-clamp#precalculate>}
         */
        precalculate?: boolean | undefined;
        /** @default false */
        preserve?: boolean | undefined;
    }
}

declare var postcssClamp: PluginCreator<postcssClamp.Options>;

export = postcssClamp;
