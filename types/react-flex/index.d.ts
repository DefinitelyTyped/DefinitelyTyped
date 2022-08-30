// Type definitions for react-flex v2.2.7
// Project: https://github.com/zippyui/react-flex
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface CommonFlexProps {
    /**
     * For custom style
     */
    style?: any;

    /**
     * For `display: inline-flex`.
     */
    inline?: boolean | undefined;

    /**
     * For `flex-direction: row`. Defaults to `true`.
     */
    row?: boolean | undefined;

    /**
     * For `flex-direction: column`.
     */
    column?: boolean | undefined;

    /**
     * For reverse direction (eg. `flex-direction: column-reverse` or `row-reverse`).
     */
    reverse?: boolean | undefined;

    /**
     * For `flex-wrap: wrap`. Defaults to `true`.
     */
    wrap?: boolean | undefined;

    /**
     * A number/string from 0 to 24 for the `flex` css property. `false` for `'none'`.
     */
    flex?: number | string | boolean | undefined;

    /**
     * A value for the `align-items` css property. Defaults to `'center'`.
     */
    alignItems?: string | undefined;

    /**
     * A value for the `justify-content` css property.
     */
    justifyContent?: string | undefined;

    /**
     * A value for the `align-content` css property.
     */
    alignContent?: string | undefined;

    /**
     * Customize the display to be `'flex'` or `'inline-flex'`.
     * Defaults to `'flex'`.
     */
    display?: string | undefined;
}

export interface FlexProps extends CommonFlexProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<Flex> | undefined;
}

export class Flex extends React.Component<FlexProps> {
}

export interface ItemProps extends CommonFlexProps {
    children?: React.ReactNode;
    ref?: React.LegacyRef<Flex> | undefined;
    /**
     * A number/string from 0 to 24 for `flex-grow`. Most of the times, using `flex` is just enough.
     */
    flexGrow?: number | string | boolean | undefined;

    /**
     * A value for the `flex-shrink` css property. From `0` to `24`.
     */
    flexShrink?: number | string | undefined;

    /**
     * A value for the flex-basis css property. Valid values are: `0` (and `'none'`, which is the same),
     * `'auto'`, `'content'`, `'fit-content'`, `'min-content'`, `'max-content'`, `'fit'`.
     */
    flexBasis?: number | "none" | "auto" | "content" | "fit-content" | "min-content" | "max-content" | "fit" | undefined;
}

export class Item extends React.Component<ItemProps> {
}

