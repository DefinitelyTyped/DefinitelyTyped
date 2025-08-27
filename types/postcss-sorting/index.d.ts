import { PluginCreator } from "postcss";

declare namespace sorting {
    /**
     * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/order/README.md#order>}
     */
    type OrderString =
        | "custom-properties"
        | "dollar-variables"
        | "at-variables"
        | "declarations"
        | "rules"
        | "at-rules";

    /**
     * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/order/README.md#extended-rule-objects>}
     */
    interface ExtendedRule {
        type: "rule";
        /**
         * Selector pattern. Strings will be converted to {@link RegExp}
         * (make sure to escape)
         * @example
         * // Matches simple pseudo-classes, such as &hover and &first-child
         * { type: "rule", selector: /^&:[\w-]+$/ }
         * @example
         * // Matches pseudo-elements, such as &::before and &::placeholder
         * { type: "rule", selector: /^&::[\w-]+$/ }
         */
        selector?: string | RegExp | undefined;
    }

    /**
     * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/order/README.md#extended-at-rule-objects>}
     */
    interface ExtendedAtRule {
        type: "at-rule";
        name?: string | undefined;
        /** Strings will be converted to {@link RegExp} */
        parameter?: string | RegExp | undefined;
        /**
         * i.e. `true` for `@include icon { color: red; }`
         * but `false` for `@include icon;`
         */
        hasBlock?: boolean | undefined;
    }

    interface Options {
        /**
         * Specify the order of content within declaration blocks.
         * **Unlisted elements will be placed after all listed elements.**
         * So if you specify an array and do not include declarations,
         * that means that all declarations will be placed after any other element
         * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/order/README.md>}
         */
        order?: ReadonlyArray<OrderString | ExtendedRule | ExtendedAtRule> | undefined;
        /**
         * Specify the order of properties within declaration blocks.
         *
         * This rule ignore prefixes to determine properties order,
         * so `-moz-transform`, for example, is treated as `transform`.
         * Shorthand properties will always precede their longhand forms
         * (e.g. `border-style` will always be before `border-bottom-style`).
         * Prefixed properties will always precede the unprefixed version
         * e. g. `-moz-transform `will be always before `transform`).
         *
         * Recommended to use this rule only on source files.
         * Some “non-standard” prefixes could be treated wrong,
         * such as different flexbox implementations:
         * `-ms-flex-align: center; align-items: center;` with alphabetical order
         * will be sorted as `align-items: center; -ms-flex-align: center;`
         * because alphabetically flex-align is after align-item.
         *
         * This rule ignores variables (`$sass`, `@less`, `--custom-property`)
         * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/properties-order/README.md#properties-order>}
         */
        "properties-order"?: "alphabetical" | readonly string[] | undefined;
        /**
         * Specify position for properties not specified in {@link properties-order}.
         * This option only works if you've defined your own _array_ of properties in {@link properties-order}.
         *
         * | Value              | Behaviour                                                                                                                          |
         * | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
         * | bottom             | Unspecified properties will be placed _after_ any specified properties                                                             |
         * | top                | Unspecified properties will be placed _before_ any specified properties                                                            |
         * | bottomAlphabetical | Unspecified properties will be placed after any specified properties, and the unspecified properties will be in alphabetical order |
         *
         * @default "bottom"
         * @see {@link <https://github.com/hudochenkov/postcss-sorting/blob/master/lib/properties-order/unspecified-properties-position.md#unspecified-properties-position>}
         */
        "unspecified-properties-position"?: "top" | "bottom" | "bottomAlphabetical" | undefined;
        /**
         * Throw config validation errors instead of showing and ignoring them
         * @default false
         */
        "throw-validate-errors"?: boolean | undefined;
    }
}

declare const sorting: PluginCreator<sorting.Options>;

export = sorting;
