// Type definitions for styled-system 3.3
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
//                 Kevin Tran <https://github.com/ktranada>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as CSS from "csstype";

export const defaultBreakpoints: string[];
export function is(n: any): boolean;
export function num(n: any): boolean;
export function px(n: any): string;

export function get(obj: any, ...paths: Array<string | number>): any;

export function themeGet(keys: string, fallback?: string): any;
export function cloneFunc(fn: (...args: any[]) => any): (...args: any[]) => any;

export function merge(a: any, b: any): any;

export function compose(
    ...funcs: Array<(...args: any[]) => any>
): (...args: any[]) => any;

export function createMediaQuery(n: number | string): string;

export interface LowLevelStylefunctionArguments {
    prop: string;
    cssProperty?: string;
    key?: string;
    getter?: () => any;
    transformValue?: (n: string | number) => any;
    scale?: Array<string | number>;
}

export function style(
    args: LowLevelStylefunctionArguments
): { [cssProp: string]: string };

export type TLengthStyledSystem = string | 0 | number;
export interface BreakpointAliasStyledSystem<T> {
    [key: string]: T;
}
export type ResponsiveValue<T, B = BreakpointAliasStyledSystem<TLengthStyledSystem>> = T | Array<T | null> | B;

/**
 * Converts shorthand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */

export interface SpaceProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /** Margin on top, left, bottom and right */
    m?: ResponsiveValue<CSS.MarginProperty<TLength>, TBreakpointAlias>;
    /** Margin for the top */
    mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>, TBreakpointAlias>;
    /** Margin for the right */
    mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>, TBreakpointAlias>;
    /** Margin for the bottom */
    mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>, TBreakpointAlias>;
    /** Margin for the left */
    ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>, TBreakpointAlias>;
    /** Margin for the left and right */
    mx?: ResponsiveValue<CSS.PaddingProperty<TLength>, TBreakpointAlias>;
    /** Margin for the top and bottom */
    my?: ResponsiveValue<CSS.PaddingProperty<TLength>, TBreakpointAlias>;
    /** Padding on top, left, bottom and right */
    p?: ResponsiveValue<CSS.PaddingProperty<TLength>, TBreakpointAlias>;
    /** Padding for the top */
    pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>, TBreakpointAlias>;
    /** Padding for the right */
    pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>, TBreakpointAlias>;
    /** Padding for the bottom */
    pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>, TBreakpointAlias>;
    /** Padding for the left */
    pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>, TBreakpointAlias>;
    /** Padding for the left and right */
    px?: ResponsiveValue<CSS.PaddingProperty<TLength>, TBreakpointAlias>;
    /** Padding for the top and bottom */
    py?: ResponsiveValue<CSS.PaddingProperty<TLength>, TBreakpointAlias>;
}

export function space(...args: any[]): any;

export interface VariantArgs {
    key?: string;
    // Defaults to "variant"
    prop?: string;
}

export function variant(props: VariantArgs): (...args: any[]) => any;

export type ObjectOrArray<T> = T[] | { [K: string]: T };

export interface BaseTheme {
    breakpoints?: string[] | number[] | object;
    colors?: ObjectOrArray<CSS.ColorProperty>;
    fontSizes?: number[];
    space?: number[];
}

export interface Theme extends BaseTheme {
    borders?: ObjectOrArray<CSS.BorderProperty<{}>>;
    buttons?: ObjectOrArray<CSS.StandardProperties>;
    colorStyles?: ObjectOrArray<CSS.StandardProperties>;
    fontWeights?: ObjectOrArray<CSS.FontWeightProperty>;
    fonts?: ObjectOrArray<CSS.FontFamilyProperty>;
    heights?: ObjectOrArray<CSS.HeightProperty<{}>>;
    letterSpacings?: ObjectOrArray<CSS.LetterSpacingProperty<{}>>;
    lineHeights?: ObjectOrArray<CSS.LineHeightProperty<{}>>;
    maxHeights?: ObjectOrArray<CSS.HeightProperty<{}>>;
    maxWidths?: ObjectOrArray<CSS.WidthProperty<{}>>;
    minHeights?: ObjectOrArray<CSS.HeightProperty<{}>>;
    minWidths?: ObjectOrArray<CSS.WidthProperty<{}>>;
    opacity?: ObjectOrArray<CSS.GlobalsNumber>;
    radii?: ObjectOrArray<CSS.BorderRadiusProperty<{}>>;
    shadows?: ObjectOrArray<CSS.BoxShadowProperty>;
    textStyles?: ObjectOrArray<CSS.StandardProperties>;
}

/**
 * Font Size
 */

export interface FontSizeProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
     *
     * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
     * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
     * - String values are passed as raw CSS values.
     * - And array values are converted into responsive values.
     *
     */
    fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>, TBreakpointAlias>;
}

export function fontSize(...args: any[]): any;

/**
 * Color
 */

export interface TextColorProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     */
    color?: ResponsiveValue<CSS.ColorProperty, TBreakpointAlias>;
}

export function textColor(...args: any[]): any;

export interface BgColorProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
    bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>, TBreakpointAlias>;
}

export function bgColor(...args: any[]): any;

export interface ColorProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>>
    extends TextColorProps<TBreakpointAlias>, BgColorProps<TLength, TBreakpointAlias> {}

export function color(...args: any[]): any;

/**
 * Typography
 */
export interface FontFamilyProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    fontFamily?: ResponsiveValue<CSS.FontFamilyProperty, TBreakpointAlias>;
}
export function fontFamily(...args: any[]): any;

export interface TextAlignProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign?: ResponsiveValue<CSS.TextAlignProperty, TBreakpointAlias>;
}

export function textAlign(...args: any[]): any;

export interface LineHeightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
     * it specifies the minimum height of line boxes within the element.
     *
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>, TBreakpointAlias>;
}
export function lineHeight(...args: any[]): any;

export interface FontWeightProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The font-weight CSS property specifies the weight (or boldness) of the font.
     *
     * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     */
    fontWeight?: ResponsiveValue<CSS.FontWeightProperty, TBreakpointAlias>;
}

export function fontWeight(...args: any[]): any;

export interface FontStyleProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The font-style CSS property specifies whether a font should be styled with a normal, italic,
     * or oblique face from its font-family.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: ResponsiveValue<CSS.FontStyleProperty, TBreakpointAlias>;
}
export function fontStyle(...args: any[]): any;

export interface LetterSpacingProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The letter-spacing CSS property sets the spacing behavior between text characters.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>, TBreakpointAlias>;
}
export function letterSpacing(...args: any[]): any;

/**
 * Layout
 */

export interface DisplayProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The display CSS property defines the display type of an element, which consists of the two basic qualities
     * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
     * and the inner display type defining how the children of the box are laid out.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    display?: ResponsiveValue<CSS.DisplayProperty, TBreakpointAlias>;
}

export function display(...args: any[]): any;

export interface MaxWidthProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The max-width CSS property sets the maximum width of an element.
     * It prevents the used value of the width property from becoming larger than the value specified by max-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>, TBreakpointAlias>;
}

export function maxWidth(...args: any[]): any;

export interface MinWidthProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The min-width CSS property sets the minimum width of an element.
     * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>, TBreakpointAlias>;
}

export function minWidth(...args: any[]): any;

export interface WidthProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
     *
     *   - Numbers from 0-1 are converted to percentage widths.
     *   - Numbers greater than 1 are converted to pixel values.
     *   - String values are passed as raw CSS values.
     *   - And arrays are converted to responsive width styles.
     */
    width?: ResponsiveValue<CSS.WidthProperty<TLength>, TBreakpointAlias>;
}

export function width(...args: any[]): any;

export interface MaxHeightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
     * property from becoming larger than the value specified for max-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>, TBreakpointAlias>;
}

export function maxHeight(...args: any[]): any;

export interface MinHeightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
     * property from becoming smaller than the value specified for min-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>, TBreakpointAlias>;
}

export function minHeight(...args: any[]): any;

export interface HeightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the
     * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    height?: ResponsiveValue<CSS.HeightProperty<TLength>, TBreakpointAlias>;
}

export function height(...args: any[]): any;

// TODO: Document, I couldn't find any info on these two properties...

export interface SizeWidthProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    size?: ResponsiveValue<CSS.WidthProperty<TLength>, TBreakpointAlias>;
}

export function sizeWidth(...args: any[]): any;

export interface SizeHeightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    size?: ResponsiveValue<CSS.HeightProperty<TLength>, TBreakpointAlias>;
}

export function sizeHeight(...args: any[]): any;

export interface SizeProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>>
    extends SizeHeightProps<TLength, TBreakpointAlias>, SizeWidthProps<TLength, TBreakpointAlias> {}

export function size(...args: any[]): any;

export interface RatioPaddingProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    ratio?: ResponsiveValue<number, TBreakpointAlias>;
}

export function ratioPadding(...args: any[]): any;

export interface RatioProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The ration is height: 0 & paddingBottom
     */
    ratio?: ResponsiveValue<number, TBreakpointAlias>;
}

export function ratio(...args: any[]): any;

export interface VerticalAlignProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>, TBreakpointAlias>;
}

export function verticalAlign(...args: any[]): any;

/**
 * Flexbox
 */

export interface AlignItemsProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
     * property sets the alignment of an item within its containing block.
     *
     * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
     * of items on the Block Axis within their grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
     */
    alignItems?: ResponsiveValue<CSS.AlignItemsProperty, TBreakpointAlias>;
}

export function alignItems(...args: any[]): any;

export interface AlignContentProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The CSS align-content property sets how the browser distributes space between and around content items
     * along the cross-axis of a flexbox container, and the main-axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
     */
    alignContent?: ResponsiveValue<CSS.AlignContentProperty, TBreakpointAlias>;
}

export function alignContent(...args: any[]): any;

export interface JustifyItemsProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
     * a default way of justifying each box along the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
     */
    justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty, TBreakpointAlias>;
}

export function justifyItems(...args: any[]): any;

export interface JustifyContentProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items
     * along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent?: ResponsiveValue<CSS.JustifyContentProperty, TBreakpointAlias>;
}

export function justifyContent(...args: any[]): any;

export interface FlexWrapProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
     * If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: ResponsiveValue<CSS.FlexWrapProperty, TBreakpointAlias>;
}

export function flexWrap(...args: any[]): any;

export interface FlexBasisProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>, TBreakpointAlias>;
}

export function flexBasis(...args: any[]): any;

export interface FlexDirectionProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
     * axis and the direction (normal or reversed).
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
     */
    flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty, TBreakpointAlias>;
}

export function flexDirection(...args: any[]): any;

export interface FlexProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
     * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
     */
    flex?: ResponsiveValue<CSS.FlexProperty<TLength>, TBreakpointAlias>;
}

export function flex(...args: any[]): any;

export interface JustifySelfProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The CSS justify-self property set the way a box is justified inside its alignment container along
     * the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
     */
    justifySelf?: ResponsiveValue<CSS.JustifySelfProperty, TBreakpointAlias>;
}

export function justifySelf(...args: any[]): any;

export interface AlignSelfProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
     *
     * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
     * aligns the item inside the grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
     */
    alignSelf?: ResponsiveValue<CSS.AlignSelfProperty, TBreakpointAlias>;
}

export function alignSelf(...args: any[]): any;

export interface OrderProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
     * are sorted by ascending order value and then by their source code order.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
     */
    order?: ResponsiveValue<CSS.GlobalsNumber, TBreakpointAlias>;
}

export function order(...args: any[]): any;

/**
 * Grid Layout
 */

export interface GridGapProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
     * and column-gap.
     *
     * @deprecated use gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
     */
    gridGap?: ResponsiveValue<CSS.GridGapProperty<TLength>, TBreakpointAlias>;
}

export function gridGap(...args: any[]): any;

export interface GridColumnGapProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
     *
     * @deprecated use column-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: ResponsiveValue<CSS.GridColumnGapProperty<TLength>, TBreakpointAlias>;
}

export function gridColumnGap(...args: any[]): any;

export interface GridRowGapProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     *
     * @deprecated use row-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: ResponsiveValue<CSS.GridRowGapProperty<TLength>, TBreakpointAlias>;
}

export function gridRowGap(...args: any[]): any;

export interface GridColumnProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
     * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
     * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: ResponsiveValue<CSS.GridColumnProperty, TBreakpointAlias>;
}

export function gridColumn(...args: any[]): any;

export interface GridRowProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
     * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
     * placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: ResponsiveValue<CSS.GridRowProperty, TBreakpointAlias>;
}

export function gridRow(...args: any[]): any;

export interface GridAutoFlowProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
     * how auto-placed items get flowed into the grid.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: ResponsiveValue<CSS.GridAutoFlowProperty, TBreakpointAlias>;
}

export function gridAutoFlow(...args: any[]): any;

export interface GridAutoColumnsProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: ResponsiveValue<CSS.GridAutoColumnsProperty<TLength>, TBreakpointAlias>;
}

export function gridAutoColumns(...args: any[]): any;

export interface GridAutoRowsProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: ResponsiveValue<CSS.GridAutoRowsProperty<TLength>, TBreakpointAlias>;
}

export function gridAutoRows(...args: any[]): any;

export interface GridTemplatesColumnsProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: ResponsiveValue<
        CSS.GridTemplateColumnsProperty<TLength>,
        TBreakpointAlias
    >;
}

export function gridTemplateColumns(...args: any[]): any;

export interface GridTemplatesRowsProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
     */
    gridTemplateRows?: ResponsiveValue<CSS.GridTemplateRowsProperty<TLength>, TBreakpointAlias>;
}

export function gridTemplateRows(...args: any[]): any;

export interface GridTemplatesAreasProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-template-areas CSS property specifies named grid areas.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: ResponsiveValue<CSS.GridTemplateAreasProperty, TBreakpointAlias>;
}

export function gridTemplateAreas(...args: any[]): any;

export interface GridAreaProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
     * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
     * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: ResponsiveValue<CSS.GridAreaProperty, TBreakpointAlias>;
}

export function gridArea(...args: any[]): any;

/**
 * Borders
 */

export interface BorderProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
     * and border-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
     */
    border?: ResponsiveValue<CSS.BorderProperty<TLength>, TBreakpointAlias>;
}

export function border(...args: any[]): any;

export interface BorderTopProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
     * and border-top-color. These properties describe an element's top border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
     */
    borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>, TBreakpointAlias>;
}

export function borderTop(...args: any[]): any;

export interface BorderRightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
     * and border-right-color. These properties set an element's right border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
     */
    borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>, TBreakpointAlias>;
}

export function borderRight(...args: any[]): any;

export interface BorderBottomProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
     * border-bottom-width, border-bottom-style and border-bottom-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
     */
    borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>, TBreakpointAlias>;
}

export function borderBottom(...args: any[]): any;

export interface BorderLeftProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-left CSS property is a shorthand that sets the values of border-left-width,
     * border-left-style, and border-left-color. These properties describe an element's left border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>, TBreakpointAlias>;
}

export function borderLeft(...args: any[]): any;

export interface BordersProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>>
    extends BorderTopProps<TLength, TBreakpointAlias>,
        BorderRightProps<TLength, TBreakpointAlias>,
        BorderBottomProps<TLength, TBreakpointAlias>,
        BorderLeftProps<TLength, TBreakpointAlias> {}

export function borders(...args: any[]): any;

export interface BorderColorProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-color shorthand CSS property sets the color of all sides of an element's border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
     */
    borderColor?: ResponsiveValue<CSS.BorderColorProperty, TBreakpointAlias>;
}

export function borderColor(...args: any[]): any;

export interface BorderRadiusProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
     * radius to make circular corners, or two radii to make elliptical corners.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>, TBreakpointAlias>;
}

export function borderRadius(...args: any[]): any;

export interface BoxShadowProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects
     * separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread
     * radii, and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number, TBreakpointAlias>;
}

export function boxShadow(...arg: any[]): any;

export interface OpacityProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The opacity CSS property sets the transparency of an element or the degree to which content
     * behind an element is visible.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
     */
    opacity?: ResponsiveValue<CSS.GlobalsNumber, TBreakpointAlias>;
}

export function opacity(...arg: any[]): any;

export interface OverflowProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The overflow CSS property sets what to do when an element's content is too big to fit in its block
     * formatting context. It is a shorthand for overflow-x and overflow-y.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
     */
    overflow?: ResponsiveValue<CSS.OverflowProperty, TBreakpointAlias>;
}

export function overflow(...arg: any[]): any;
/**
 * Background
 */

export interface BackgroundProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The background shorthand CSS property sets all background style properties at once,
     * such as color, image, origin and size, repeat method, and others.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    background?: ResponsiveValue<CSS.BackgroundProperty<TLength>, TBreakpointAlias>;
}

export function background(...args: any[]): any;

export interface BackgroundImageProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The background-image CSS property sets one or more background images on an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    backgroundImage?: ResponsiveValue<CSS.BackgroundImageProperty, TBreakpointAlias>;
}

export function backgroundImage(...args: any[]): any;

export interface BackgroundSizeProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The background-size CSS property sets the size of the element's background image. The
     * image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    backgroundSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>, TBreakpointAlias>;
}

export function backgroundSize(...args: any[]): any;

export interface BackgroundPositionProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The background-position CSS property sets the initial position for each background image. The
     * position is relative to the position layer set by background-origin.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
     */
    backgroundPosition?: ResponsiveValue<
        CSS.BackgroundPositionProperty<TLength>,
        TBreakpointAlias
    >;
}

export function backgroundPosition(...args: any[]): any;

export interface BackgroundRepeatProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The background-repeat CSS property sets how background images are repeated. A background
     * image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
    backgroundRepeat?: ResponsiveValue<CSS.BackgroundRepeatProperty, TBreakpointAlias>;
}

export function backgroundRepeat(...args: any[]): any;

/**
 * Position
 */

export interface PositionProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The position CSS property specifies how an element is positioned in a document.
     * The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    position?: ResponsiveValue<CSS.PositionProperty, TBreakpointAlias>;
}

export function position(...args: any[]): any;

export interface ZIndexProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The z-index CSS property sets the z-order of a positioned element and its descendants or
     * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
     */
    zIndex?: ResponsiveValue<CSS.ZIndexProperty, TBreakpointAlias>;
}

export function zIndex(...args: any[]): any;

export interface TopProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The top CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    top?: ResponsiveValue<CSS.TopProperty<TLength>, TBreakpointAlias>;
}

export function top(...args: any[]): any;

export interface RightProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The right CSS property participates in specifying the horizontal position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
     */
    right?: ResponsiveValue<CSS.RightProperty<TLength>, TBreakpointAlias>;
}

export function right(...args: any[]): any;

export interface BottomProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The bottom CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    bottom?: ResponsiveValue<CSS.BottomProperty<TLength>, TBreakpointAlias>;
}

export function bottom(...args: any[]): any;

export interface LeftProps<TLength = TLengthStyledSystem, TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    /**
     * The left CSS property participates in specifying the horizontal position
     * of a positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
     */
    left?: ResponsiveValue<CSS.LeftProperty<TLength>, TBreakpointAlias>;
}

export function left(...args: any[]): any;

export interface TextStyleProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    textStyle?: ResponsiveValue<string, TBreakpointAlias>;
}

export function textStyle(...args: any[]): any;

export interface ColorStyleProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    colors?: ResponsiveValue<string, TBreakpointAlias>;
}

export function colorStyle(...args: any[]): any;

export interface ButtonStyleProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    variant?: ResponsiveValue<string, TBreakpointAlias>;
}

export function buttonStyle(...args: any[]): any;

export interface MixedProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    key?: any;
    // Defaults to "variant"
    prop?: string;
}

export function mixed(...args: any[]): any;

export interface StylesProps<TBreakpointAlias = BreakpointAliasStyledSystem<TLengthStyledSystem>> {
    space: typeof space;
    width: typeof width;
    fontSize: typeof fontSize;
    textColor: typeof textColor;
    bgColor: typeof bgColor;
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
    sizeWidth: typeof sizeWidth;
    sizeHeight: typeof sizeHeight;
    size: typeof size;
    ratioPadding: typeof ratioPadding;
    ratio: typeof ratio;
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
