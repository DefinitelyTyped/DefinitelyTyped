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
    inline?: boolean;

    /**
     * For `flex-direction: row`. Defaults to `true`.
     */
    row?: boolean;

    /**
     * For `flex-direction: column`.
     */
    column?: boolean;

    /**
     * For reverse direction (eg. `flex-direction: column-reverse` or `row-reverse`).
     */
    reverse?: boolean;

    /**
     * For `flex-wrap: wrap`. Defaults to `true`.
     */
    wrap?: boolean;

    /**
     * A number/string from 0 to 24 for the `flex` css property. `false` for `'none'`.
     */
    flex?: number | string | boolean;

    /**
     * A value for the `align-items` css property. Defaults to `'center'`.
     */
    alignItems?: string;

    /**
     * A value for the `justify-content` css property.
     */
    justifyContent?: string;

    /**
     * A value for the `align-content` css property.
     */
    alignContent?: string;

    /**
     * Customize the display to be `'flex'` or `'inline-flex'`.
     * Defaults to `'flex'`.
     */
    display?: string;
}

export interface FlexProps extends React.Props<Flex>, CommonFlexProps {
}

export class Flex extends React.Component<FlexProps> {
}

export interface ItemProps extends React.Props<Flex>, CommonFlexProps {
    /**
     * A number/string from 0 to 24 for `flex-grow`. Most of the times, using `flex` is just enough.
     */
    flexGrow?: number | string | boolean;

    /**
     * A value for the `flex-shrink` css property. From `0` to `24`.
     */
    flexShrink?: number | string;

    /**
     * A value for the flex-basis css property. Valid values are: `0` (and `'none'`, which is the same),
     * `'auto'`, `'content'`, `'fit-content'`, `'min-content'`, `'max-content'`, `'fit'`.
     */
    flexBasis?: number | "none" | "auto" | "content" | "fit-content" | "min-content" | "max-content" | "fit";
}

export class Item extends React.Component<ItemProps> {
}

