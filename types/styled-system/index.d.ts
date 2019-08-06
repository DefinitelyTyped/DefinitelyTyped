// Type definitions for styled-system 5.0
// Project: https://github.com/jxnblk/styled-system#readme
// Definitions by: Marshall Bowers <https://github.com/maxdeviant>
//                 Ben McCormick <https://github.com/phobon>
//                 Justin Bennett <https://github.com/zephraph>
//                 Christopher Pappas <https://github.com/damassi>
//                 Eloy Durán <https://github.com/alloy>
//                 Matthieu Vachon <https://github.com/maoueh>
//                 Adam Lavin <https://github.com/lavoaster>
//                 Joachim Schuler <https://github.com/jschuler>
//                 Adam Misiorny <https://github.com/adam187>
//                 Sara F-P <https://github.com/gretzky>
//                 Chris LoPresto <https://github.com/chrislopresto>
//                 Pedro Duarte <https://github.com/peduarte>
//                 Dhalton Huber <https://github.com/Dhalton>
//                 Elliot Bonneville <https://github.com/elliotbonneville>
//                 Jack Caldwell <https://github.com/jackcaldwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as CSS from 'csstype';

export function get(obj: any, ...paths: Array<string | number>): any;

export type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };

export type Scale = ObjectOrArray<number | string>;

export type TLengthStyledSystem = string | 0 | number;

export type ResponsiveValue<T> = T | Array<T | null> | { [key: string]: T };

// Preserved to support v4 shim:
// https://github.com/styled-system/styled-system/blob/master/packages/styled-system/src/index.js#L108
export interface LowLevelStyleFunctionArguments<N, S> {
    prop: string;
    cssProperty?: string;
    alias?: string;
    key?: string;
    transformValue?: (n: N, scale?: S) => any;
    scale?: S;
    // new v5 api
    properties?: string[];
}

export function style<N = string | number, S = Scale>(
    // tslint:disable-next-line no-unnecessary-generics
    args: LowLevelStyleFunctionArguments<N, S>
): {
    [cssProp: string]: string;
};

export interface styleFn {
    (...args: any[]): any;
    config?: object;
    propNames?: string[];
    cache?: object;
}

export interface ConfigStyle {
    /** The CSS property to use in the returned style object (overridden by `properties` if present). */
    property?: keyof CSS.Properties;
    /**
     * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
     * assigned (overrides `property` when present).
     */
    properties?: Array<keyof CSS.Properties>;
    /** A string referencing a key in the `theme` object. */
    scale?: string;
    /** A fallback scale object for when there isn't one defined in the `theme` object. */
    defaultScale?: Scale;
    /** A function to transform the raw value based on the scale. */
    transform?: (value: any, scale?: Scale) => any;
}

export interface Config {
    /** Property name exposed for use in components */
    [customStyleName: string]: ConfigStyle | boolean;
}

export function compose(...parsers: styleFn[]): styleFn;
export function system(styleDefinitions: Config): styleFn;
export function createParser(config: ConfigStyle): styleFn;
export function createStyleFunction(args: ConfigStyle): styleFn;

export interface VariantArgs {
    key?: string;
    /** Component prop, defaults to "variant" */
    prop?: string;
    /** theme key for variant definitions */
    scale?: string;
}

export function variant(props: VariantArgs): (...args: any[]) => any;

/**
 * Converts shorthand or longhand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface SpaceProps<TLength = TLengthStyledSystem> {
    /** Margin on top, left, bottom and right */
    m?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin on top, left, bottom and right */
    margin?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin on top */
    mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    /** Margin on top */
    marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
    /** Margin on right */
    mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    /** Margin on right */
    marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
    /** Margin on bottom */
    mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    /** Margin on bottom */
    marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
    /** Margin on left */
    ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    /** Margin on left */
    marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
    /** Margin on left and right */
    mx?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin on left and right */
    marginX?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin on top and bottom */
    my?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Margin on top and bottom */
    marginY?: ResponsiveValue<CSS.MarginProperty<TLength>>;
    /** Padding on top, left, bottom and right */
    p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on top, left, bottom and right */
    padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on top */
    pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    /** Padding on top */
    paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
    /** Padding on right */
    pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    /** Padding on right */
    paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
    /** Padding on bottom */
    pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    /** Padding on bottom */
    paddingBottom?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
    /** Padding on left */
    pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    /** Padding on left */
    paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
    /** Padding on left and right */
    px?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on left and right */
    paddingX?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on top and bottom */
    py?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    /** Padding on top and bottom */
    paddingY?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
}

export const space: styleFn;

export interface MarginProps
    extends Pick<
        SpaceProps,
        | 'm'
        | 'margin'
        | 'mt'
        | 'marginTop'
        | 'mb'
        | 'marginBottom'
        | 'ml'
        | 'marginLeft'
        | 'mr'
        | 'marginRight'
        | 'my'
        | 'mx'
    > {}
export interface MarginTopProps extends Pick<SpaceProps, 'mt' | 'marginTop'> {}
export interface MarginBottomProps extends Pick<SpaceProps, 'mb' | 'marginBottom'> {}
export interface MarginLeftProps extends Pick<SpaceProps, 'ml' | 'marginLeft'> {}
export interface MarginRightProps extends Pick<SpaceProps, 'mr' | 'marginRight'> {}

export const margin: styleFn;
export const marginTop: styleFn;
export const marginBottom: styleFn;
export const marginLeft: styleFn;
export const marginRight: styleFn;

export interface PaddingProps
    extends Pick<
        SpaceProps,
        | 'p'
        | 'padding'
        | 'pt'
        | 'paddingTop'
        | 'pb'
        | 'paddingBottom'
        | 'pl'
        | 'paddingLeft'
        | 'pr'
        | 'paddingRight'
        | 'py'
        | 'px'
    > {}
export interface PaddingTopProps extends Pick<SpaceProps, 'pt' | 'paddingTop'> {}
export interface PaddingBottomProps extends Pick<SpaceProps, 'pb' | 'paddingBottom'> {}
export interface PaddingLeftProps extends Pick<SpaceProps, 'pl' | 'paddingLeft'> {}
export interface PaddingRightProps extends Pick<SpaceProps, 'pr' | 'paddingRight'> {}

export const padding: styleFn;
export const paddingTop: styleFn;
export const paddingBottom: styleFn;
export const paddingLeft: styleFn;
export const paddingRight: styleFn;

export interface Theme {
    breakpoints?: string[] | number[] | object;
    mediaQueries?: { [size: string]: string };
    space?: ObjectOrArray<number | string>;
    fontSizes?: ObjectOrArray<CSS.FontSizeProperty<number>>;
    colors?: ObjectOrArray<CSS.ColorProperty>;
    fonts?: ObjectOrArray<CSS.FontFamilyProperty>;
    fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
    lineHeights?: ObjectOrArray<CSS.LineHeightProperty<{}>>;
    letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<{}>>;
    sizes?: ObjectOrArray<CSS.HeightProperty<{}> | CSS.WidthProperty<{}>>;
    borders?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderStyles?: ObjectOrArray<CSS.BorderProperty<{}>>;
    borderWidths?: ObjectOrArray<CSS.BorderWidthProperty<{}>>;
    radii?: ObjectOrArray<CSS.BorderRadiusProperty<{}>>;
    shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
    zIndices?: ObjectOrArray<CSS.ZIndexProperty>;
    buttons?: ObjectOrArray<CSS.StandardProperties>;
    colorStyles?: ObjectOrArray<CSS.StandardProperties>;
    textStyles?: ObjectOrArray<CSS.StandardProperties>;
}

/**
 * Color
 */

export interface TextColorProps {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     */
    color?: ResponsiveValue<CSS.ColorProperty>;
}

export const textColor: styleFn;

export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
    bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
    backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
}

export const backgroundColor: styleFn;

export interface ColorProps extends TextColorProps, BackgroundColorProps, OpacityProps {}

export const color: styleFn;

/**
 * Typography
 */

export function getPx(n: any, scale: any): string;

export interface FontSizeProps<TLength = TLengthStyledSystem> {
    /**
     * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
     *
     * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
     * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
     * - String values are passed as raw CSS values.
     * - And array values are converted into responsive values.
     *
     */
    fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
}

export const fontSize: styleFn;

export interface FontFamilyProps {
    fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>;
}
export const fontFamily: styleFn;

export interface FontWeightProps {
    /**
     * The font-weight CSS property specifies the weight (or boldness) of the font.
     *
     * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     */
    fontWeight?: ResponsiveValue<CSS.FontWeightProperty>;
}

export const fontWeight: styleFn;

export interface LineHeightProps<TLength = TLengthStyledSystem> {
    /**
     * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
     * it specifies the minimum height of line boxes within the element.
     *
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
}
export const lineHeight: styleFn;

export interface TextAlignProps {
    /**
     * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign?: ResponsiveValue<CSS.TextAlignProperty>;
}

export const textAlign: styleFn;

export interface FontStyleProps {
    /**
     * The font-style CSS property specifies whether a font should be styled with a normal, italic,
     * or oblique face from its font-family.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: ResponsiveValue<CSS.FontStyleProperty>;
}
export const fontStyle: styleFn;

export interface LetterSpacingProps<TLength = TLengthStyledSystem> {
    /**
     * The letter-spacing CSS property sets the spacing behavior between text characters.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>>;
}
export const letterSpacing: styleFn;

/**
 * A convenience style group containing props related to typography such as fontFamily, fontSize, fontWeight, etc.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface TypographyProps
    extends FontFamilyProps,
        FontSizeProps,
        FontWeightProps,
        LineHeightProps,
        LetterSpacingProps,
        FontStyleProps,
        TextAlignProps {}

export const typography: styleFn;

/**
 * Layout
 */

export interface DisplayProps {
    /**
     * The display CSS property defines the display type of an element, which consists of the two basic qualities
     * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
     * and the inner display type defining how the children of the box are laid out.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    display?: ResponsiveValue<CSS.DisplayProperty>;
}

export const display: styleFn;

export interface WidthProps<TLength = TLengthStyledSystem> {
    /**
     *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
     *
     *   - Numbers from 0-1 are converted to percentage widths.
     *   - Numbers greater than 1 are converted to pixel values.
     *   - String values are passed as raw CSS values.
     *   - And arrays are converted to responsive width styles.
     */
    width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
}

export const width: styleFn;

export interface MaxWidthProps<TLength = TLengthStyledSystem> {
    /**
     * The max-width CSS property sets the maximum width of an element.
     * It prevents the used value of the width property from becoming larger than the value specified by max-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
}

export const maxWidth: styleFn;

export interface MinWidthProps<TLength = TLengthStyledSystem> {
    /**
     * The min-width CSS property sets the minimum width of an element.
     * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
}

export const minWidth: styleFn;

export interface HeightProps<TLength = TLengthStyledSystem> {
    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the
     * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
}

export const height: styleFn;

export interface MaxHeightProps<TLength = TLengthStyledSystem> {
    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
     * property from becoming larger than the value specified for max-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
}

export const maxHeight: styleFn;

export interface MinHeightProps<TLength = TLengthStyledSystem> {
    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
     * property from becoming smaller than the value specified for min-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
}

export const minHeight: styleFn;

export interface SizeProps<TLength = TLengthStyledSystem> {
    size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
}

export const size: styleFn;

export interface VerticalAlignProps<TLength = TLengthStyledSystem> {
    /**
     * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>>;
}

export const verticalAlign: styleFn;

/**
 * Flexbox
 */
export interface AlignItemsProps {
    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
     * property sets the alignment of an item within its containing block.
     *
     * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
     * of items on the Block Axis within their grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
     */
    alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
}

export const alignItems: styleFn;

export interface AlignContentProps {
    /**
     * The CSS align-content property sets how the browser distributes space between and around content items
     * along the cross-axis of a flexbox container, and the main-axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
     */
    alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
}

export const alignContent: styleFn;

export interface JustifyItemsProps {
    /**
     * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
     * a default way of justifying each box along the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
     */
    justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
}

export const justifyItems: styleFn;

export interface JustifyContentProps {
    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items
     * along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
}

export const justifyContent: styleFn;

export interface FlexWrapProps {
    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
     * If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>;
}

export const flexWrap: styleFn;

export interface FlexBasisProps<TLength = TLengthStyledSystem> {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
}

export const flexBasis: styleFn;

export interface FlexDirectionProps {
    /**
     * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
     * axis and the direction (normal or reversed).
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
     */
    flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
}

export const flexDirection: styleFn;

export interface FlexProps<TLength = TLengthStyledSystem> {
    /**
     * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
     * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
     */
    flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
}

export const flex: styleFn;

export interface JustifySelfProps {
    /**
     * The CSS justify-self property set the way a box is justified inside its alignment container along
     * the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
     */
    justifySelf?: ResponsiveValue<CSS.JustifySelfProperty>;
}

export const justifySelf: styleFn;

export interface AlignSelfProps {
    /**
     * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
     *
     * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
     * aligns the item inside the grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
     */
    alignSelf?: ResponsiveValue<CSS.AlignSelfProperty>;
}

export const alignSelf: styleFn;

export interface OrderProps {
    /**
     * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
     * are sorted by ascending order value and then by their source code order.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
     */
    order?: ResponsiveValue<CSS.GlobalsNumber>;
}

export const order: styleFn;

export interface FlexGrowProps {
    flexGrow?: ResponsiveValue<CSS.GlobalsNumber>;
}

export interface FlexShrinkProps {
    flexShrink?: ResponsiveValue<CSS.GlobalsNumber>;
}

/**
 * A convenience style group containing props related to flexbox.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface FlexboxProps
    extends AlignItemsProps,
        AlignContentProps,
        JustifyItemsProps,
        JustifyContentProps,
        FlexWrapProps,
        FlexDirectionProps,
        FlexProps,
        FlexGrowProps,
        FlexShrinkProps,
        FlexBasisProps,
        JustifySelfProps,
        AlignSelfProps,
        OrderProps {}

export const flexbox: styleFn;

/**
 * Grid Layout
 */

export interface GridGapProps<TLength = TLengthStyledSystem> {
    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
     * and column-gap.
     *
     * @deprecated use gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
     */
    gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>>;
}

export const gridGap: styleFn;

export interface GridColumnGapProps<TLength = TLengthStyledSystem> {
    /**
     * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
     *
     * @deprecated use column-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: ResponsiveValue<CSS.GridColumnGapProperty<TLength>>;
}

export const gridColumnGap: styleFn;

export interface GridRowGapProps<TLength = TLengthStyledSystem> {
    /**
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     *
     * @deprecated use row-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: ResponsiveValue<CSS.GridRowGapProperty<TLength>>;
}

export const gridRowGap: styleFn;

export interface GridColumnProps {
    /**
     * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
     * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
     * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: ResponsiveValue<CSS.GridColumnProperty>;
}

export const gridColumn: styleFn;

export interface GridRowProps {
    /**
     * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
     * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
     * placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: ResponsiveValue<CSS.GridRowProperty>;
}

export const gridRow: styleFn;

export interface GridAutoFlowProps {
    /**
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
     * how auto-placed items get flowed into the grid.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty>;
}

export const gridAutoFlow: styleFn;

export interface GridAutoColumnsProps<TLength = TLengthStyledSystem> {
    /**
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: ResponsiveValue<CSS.GridAutoColumnsProperty<TLength>>;
}

export const gridAutoColumns: styleFn;

export interface GridAutoRowsProps<TLength = TLengthStyledSystem> {
    /**
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>>;
}

export const gridAutoRows: styleFn;

export interface GridTemplateColumnsProps<TLength = TLengthStyledSystem> {
    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: ResponsiveValue<CSS.GridTemplateColumnsProperty<TLength>>;
}

export const gridTemplateColumns: styleFn;

export interface GridTemplateRowsProps<TLength = TLengthStyledSystem> {
    /**
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
     */
    gridTemplateRows?: ResponsiveValue<CSS.GridTemplateRowsProperty<TLength>>;
}

export const gridTemplateRows: styleFn;

export interface GridTemplateAreasProps {
    /**
     * The grid-template-areas CSS property specifies named grid areas.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty>;
}

export const gridTemplateAreas: styleFn;

export interface GridAreaProps {
    /**
     * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
     * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
     * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: ResponsiveValue<CSS.GridAreaProperty>;
}

export const gridArea: styleFn;

/**
 * A convenience style group containing props related to grid.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface GridProps
    extends GridGapProps,
        GridColumnGapProps,
        GridRowGapProps,
        GridColumnProps,
        GridRowProps,
        GridAutoFlowProps,
        GridAutoColumnsProps,
        GridAutoRowsProps,
        GridTemplateColumnsProps,
        GridTemplateRowsProps,
        GridTemplateAreasProps,
        GridAreaProps {}

export const grid: styleFn;

/**
 * A convenience style group containing props related to layout such as width, height, and display.
 *
 * - For length props, Numbers from 0-4 (or the length of theme.sizes) are converted to values on the spacing scale.
 * - For length props, Numbers greater than the length of the theme.sizes array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface LayoutProps
    extends WidthProps,
        HeightProps,
        MinWidthProps,
        MinHeightProps,
        MaxWidthProps,
        MaxHeightProps,
        DisplayProps,
        VerticalAlignProps,
        SizeProps {}

export const layout: styleFn;

/**
 * Borders
 */

export interface BorderWidthProps<TLength = TLengthStyledSystem> {
    /**
     * The border-width shorthand CSS property sets the width of all sides of an element's border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
     */
    borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
}

export const borderWidth: styleFn;

export interface BorderStyleProps {
    /**
     * The border-style shorthand CSS property sets the style of all sides of an element's border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
     */
    borderStyle?: ResponsiveValue<CSS.BorderStyleProperty>;
}

export const borderStyle: styleFn;

export interface BorderColorProps {
    /**
     * The border-color shorthand CSS property sets the color of all sides of an element's border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
     */
    borderColor?: ResponsiveValue<CSS.BorderColorProperty>;
}

export const borderColor: styleFn;

export interface BorderTopProps<TLength = TLengthStyledSystem> {
    /**
     * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
     * and border-top-color. These properties describe an element's top border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
     */
    borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>;
}

export const borderTop: styleFn;

export interface BorderRightProps<TLength = TLengthStyledSystem> {
    /**
     * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
     * and border-right-color. These properties set an element's right border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
     */
    borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>;
}

export const borderRight: styleFn;

export interface BorderBottomProps<TLength = TLengthStyledSystem> {
    /**
     * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
     * border-bottom-width, border-bottom-style and border-bottom-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
     */
    borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>;
}

export const borderBottom: styleFn;

export interface BorderLeftProps<TLength = TLengthStyledSystem> {
    /**
     * The border-left CSS property is a shorthand that sets the values of border-left-width,
     * border-left-style, and border-left-color. These properties describe an element's left border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>;
}

export const borderLeft: styleFn;

export interface BorderRadiusProps<TLength = TLengthStyledSystem> {
    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
     * radius to make circular corners, or two radii to make elliptical corners.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
}

export const borderRadius: styleFn;

export interface BordersProps
    extends BorderProps,
        BorderTopProps,
        BorderRightProps,
        BorderBottomProps,
        BorderLeftProps,
        BorderWidthProps,
        BorderColorProps,
        BorderStyleProps,
        BorderRadiusProps {}

export const borders: styleFn;

export interface BorderProps<TLength = TLengthStyledSystem>
    extends BorderWidthProps,
        BorderStyleProps,
        BorderColorProps,
        BorderRadiusProps,
        BorderTopProps,
        BorderRightProps,
        BorderBottomProps,
        BorderLeftProps {
    /**
     * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
     * and border-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
     */
    border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
    borderX?: ResponsiveValue<CSS.BorderProperty<TLength>>;
    borderY?: ResponsiveValue<CSS.BorderProperty<TLength>>;
}

export const border: styleFn;

export interface BoxShadowProps {
    /**
     * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
     * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number>;
}

export const boxShadow: styleFn;

export interface TextShadowProps {
    /**
     * The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied
     * to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from
     * the element, blur radius, and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
     */
    textShadow?: ResponsiveValue<CSS.TextShadowProperty | number>;
}

export const textShadow: styleFn;

export interface ShadowProps extends BoxShadowProps, TextShadowProps {}

export const shadow: styleFn;

export interface OpacityProps {
    /**
     * The opacity CSS property sets the transparency of an element or the degree to which content
     * behind an element is visible.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
     */
    opacity?: ResponsiveValue<CSS.GlobalsNumber>;
}

export const opacity: styleFn;

export interface OverflowProps {
    /**
     * The overflow CSS property sets what to do when an element's content is too big to fit in its block
     * formatting context. It is a shorthand for overflow-x and overflow-y.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
     */
    overflow?: ResponsiveValue<CSS.OverflowProperty>;
}

export const overflow: styleFn;
/**
 * Background
 */

export interface BackgroundImageProps {
    /**
     * The background-image CSS property sets one or more background images on an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty>;
}

export const backgroundImage: styleFn;

export interface BackgroundSizeProps<TLength = TLengthStyledSystem> {
    /**
     * The background-size CSS property sets the size of the element's background image. The
     * image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    backgroundSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>>;
}

export const backgroundSize: styleFn;

export interface BackgroundPositionProps<TLength = TLengthStyledSystem> {
    /**
     * The background-position CSS property sets the initial position for each background image. The
     * position is relative to the position layer set by background-origin.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
     */
    backgroundPosition?: ResponsiveValue<CSS.BackgroundPositionProperty<TLength>>;
}

export const backgroundPosition: styleFn;

export interface BackgroundRepeatProps {
    /**
     * The background-repeat CSS property sets how background images are repeated. A background
     * image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
    backgroundRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty>;
}

export const backgroundRepeat: styleFn;

export interface BackgroundProps<TLength = TLengthStyledSystem>
    extends BackgroundImageProps,
        BackgroundSizeProps,
        BackgroundPositionProps,
        BackgroundRepeatProps {
    /**
     * The background shorthand CSS property sets all background style properties at once,
     * such as color, image, origin and size, repeat method, and others.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    background?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
}

export const background: styleFn;

/**
 * Position
 */

export interface ZIndexProps {
    /**
     * The z-index CSS property sets the z-order of a positioned element and its descendants or
     * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
     */
    zIndex?: ResponsiveValue<CSS.ZIndexProperty>;
}

export const zIndex: styleFn;

export interface TopProps<TLength = TLengthStyledSystem> {
    /**
     * The top CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    top?: ResponsiveValue<CSS.TopProperty<TLength>>;
}

export const top: styleFn;

export interface RightProps<TLength = TLengthStyledSystem> {
    /**
     * The right CSS property participates in specifying the horizontal position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
     */
    right?: ResponsiveValue<CSS.RightProperty<TLength>>;
}

export const right: styleFn;

export interface BottomProps<TLength = TLengthStyledSystem> {
    /**
     * The bottom CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    bottom?: ResponsiveValue<CSS.BottomProperty<TLength>>;
}

export const bottom: styleFn;

export interface LeftProps<TLength = TLengthStyledSystem> {
    /**
     * The left CSS property participates in specifying the horizontal position
     * of a positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
     */
    left?: ResponsiveValue<CSS.LeftProperty<TLength>>;
}

export const left: styleFn;

export interface PositionProps extends ZIndexProps, TopProps, RightProps, BottomProps, LeftProps {
    /**
     * The position CSS property specifies how an element is positioned in a document.
     * The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    position?: ResponsiveValue<CSS.PositionProperty>;
}

export const position: styleFn;

export interface ButtonStyleProps {
    variant?: ResponsiveValue<string>;
}

export const buttonStyle: styleFn;

export interface TextStyleProps {
    textStyle?: ResponsiveValue<string>;
}

export const textStyle: styleFn;

export interface ColorStyleProps {
    colors?: ResponsiveValue<string>;
}

export const colorStyle: styleFn;

export interface StylesProps {
    space: typeof space;
    margin: typeof margin;
    marginTop: typeof marginTop;
    marginBottom: typeof marginBottom;
    marginLeft: typeof marginLeft;
    marginRight: typeof marginRight;
    padding: typeof padding;
    paddingTop: typeof paddingTop;
    paddingBottom: typeof paddingBottom;
    paddingLeft: typeof paddingLeft;
    paddingRight: typeof paddingRight;
    width: typeof width;
    fontSize: typeof fontSize;
    textColor: typeof textColor;
    backgroundColor: typeof backgroundColor;
    color: typeof color;
    fontFamily: typeof fontFamily;
    textAlign: typeof textAlign;
    lineHeight: typeof lineHeight;
    fontWeight: typeof fontWeight;
    fontStyle: typeof fontStyle;
    letterSpacing: typeof letterSpacing;
    display: typeof display;
    maxWidth: typeof maxWidth;
    minWidth: typeof minWidth;
    height: typeof height;
    maxHeight: typeof maxHeight;
    minHeight: typeof minHeight;
    size: typeof size;
    verticalAlign: typeof verticalAlign;
    alignItems: typeof alignItems;
    alignContent: typeof alignContent;
    justifyItems: typeof justifyItems;
    justifyContent: typeof justifyContent;
    flexWrap: typeof flexWrap;
    flexBasis: typeof flexBasis;
    flexDirection: typeof flexDirection;
    flex: typeof flex;
    justifySelf: typeof justifySelf;
    alignSelf: typeof alignSelf;
    order: typeof order;
    gridGap: typeof gridGap;
    gridColumnGap: typeof gridColumnGap;
    gridRowGap: typeof gridRowGap;
    gridColumn: typeof gridColumn;
    gridRow: typeof gridRow;
    gridAutoFlow: typeof gridAutoFlow;
    gridAutoColumns: typeof gridAutoColumns;
    gridAutoRows: typeof gridAutoRows;
    gridTemplateColumns: typeof gridTemplateColumns;
    gridTemplateRows: typeof gridTemplateRows;
    gridTemplateAreas: typeof gridTemplateAreas;
    gridArea: typeof gridArea;
    border: typeof border;
    borderTop: typeof borderTop;
    borderRight: typeof borderRight;
    borderBottom: typeof borderBottom;
    borderLeft: typeof borderLeft;
    borders: typeof borders;
    borderColor: typeof borderColor;
    borderRadius: typeof borderRadius;
    boxShadow: typeof boxShadow;
    opacity: typeof opacity;
    overflow: typeof overflow;
    background: typeof background;
    backgroundImage: typeof backgroundImage;
    backgroundPosition: typeof backgroundPosition;
    backgroundRepeat: typeof backgroundRepeat;
    backgroundSize: typeof backgroundSize;
    position: typeof position;
    zIndex: typeof zIndex;
    top: typeof top;
    right: typeof right;
    bottom: typeof bottom;
    left: typeof left;
    textStyle: typeof textStyle;
    colorStyle: typeof colorStyle;
    buttonStyle: typeof buttonStyle;
}

export const styles: StylesProps;
