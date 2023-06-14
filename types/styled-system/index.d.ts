// Type definitions for styled-system 5.1
// Project: https://github.com/jxnblk/styled-system#readme
// Definitions by: Ben McCormick <https://github.com/phobon>
//                 Justin Bennett <https://github.com/zephraph>
//                 Christopher Pappas <https://github.com/damassi>
//                 Eloy Durán <https://github.com/alloy>
//                 Matthieu Vachon <https://github.com/maoueh>
//                 Joachim Schuler <https://github.com/jschuler>
//                 Adam Misiorny <https://github.com/adam187>
//                 Sara F-P <https://github.com/gretzky>
//                 Chris LoPresto <https://github.com/chrislopresto>
//                 Pedro Duarte <https://github.com/peduarte>
//                 Dhalton Huber <https://github.com/Dhalton>
//                 Elliot Bonneville <https://github.com/elliotbonneville>
//                 Jack Caldwell <https://github.com/jackcaldwell>
//                 Eliseu Monar dos Santos <https://github.com/eliseumds>
//                 Craig Michael Thompson <https://github.com/craga89>
//                 Nicholas Hehr <https://github.com/HipsterBrown>
//                 Dhruv Jain <https://github.com/maddhruv>
//                 Jeffrey Cherewaty <https://github.com/cherewaty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as CSS from 'csstype';

export function get(obj: any, ...paths: Array<string | number>): any;

export type ObjectOrArray<T, K extends keyof any = keyof any> = T[] | Record<K, T | Record<K, T> | T[]>;

export type Scale = ObjectOrArray<number | string>;

export type TLengthStyledSystem = string | 0 | number;

export interface Theme<TLength = TLengthStyledSystem> {
    breakpoints?: ObjectOrArray<number | string | symbol> | undefined;
    mediaQueries?: { [size: string]: string } | undefined;
    space?: ObjectOrArray<CSS.Property.Margin<number | string>> | undefined;
    fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>> | undefined;
    colors?: ObjectOrArray<CSS.Property.Color> | undefined;
    fonts?: ObjectOrArray<CSS.Property.FontFamily> | undefined;
    fontWeights?: ObjectOrArray<CSS.Property.FontWeight> | undefined;
    lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>> | undefined;
    letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>> | undefined;
    sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>> | undefined;
    borders?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
    borderStyles?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
    borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>> | undefined;
    radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>> | undefined;
    shadows?: ObjectOrArray<CSS.Property.BoxShadow> | undefined;
    zIndices?: ObjectOrArray<CSS.Property.ZIndex> | undefined;
    buttons?: ObjectOrArray<CSS.StandardProperties> | undefined;
    colorStyles?: ObjectOrArray<CSS.StandardProperties> | undefined;
    textStyles?: ObjectOrArray<CSS.StandardProperties> | undefined;
}

export type RequiredTheme = Required<Theme>;

export type ResponsiveValue<
    T,
    ThemeType extends Theme = RequiredTheme,
    > = T | null | Array<T | null> | { [key in ThemeValue<'breakpoints', ThemeType> & string | number]?: T };

export type ThemeValue<K extends keyof ThemeType, ThemeType, TVal = any> =
    ThemeType[K] extends TVal[] ? number :
    ThemeType[K] extends Record<infer E, TVal> ? E :
    ThemeType[K] extends ObjectOrArray<infer F> ? F : never;

export interface SpaceProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'space', ThemeType>> {
    /** Margin on top, left, bottom and right */
    m?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on top, left, bottom and right */
    margin?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on top */
    mt?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on top */
    marginTop?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on right */
    mr?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on right */
    marginRight?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on bottom */
    mb?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on bottom */
    marginBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on left */
    ml?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on left */
    marginLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on left and right */
    mx?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on left and right */
    marginX?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on top and bottom */
    my?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Margin on top and bottom */
    marginY?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top, left, bottom and right */
    p?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top, left, bottom and right */
    padding?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top */
    pt?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top */
    paddingTop?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on right */
    pr?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on right */
    paddingRight?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on bottom */
    pb?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on bottom */
    paddingBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on left */
    pl?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on left */
    paddingLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on left and right */
    px?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on left and right */
    paddingX?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top and bottom */
    py?: ResponsiveValue<TVal, ThemeType> | undefined;
    /** Padding on top and bottom */
    paddingY?: ResponsiveValue<TVal, ThemeType> | undefined;
}

// Preserved to support v4 shim:
// https://github.com/styled-system/styled-system/blob/master/packages/styled-system/src/index.js#L108
export interface LowLevelStyleFunctionArguments<N, S> {
    prop: string;
    cssProperty?: string | undefined;
    alias?: string | undefined;
    key?: string | undefined;
    transformValue?: ((n: N, scale?: S) => any) | undefined;
    scale?: S | undefined;
    // new v5 api
    properties?: string[] | undefined;
}

export function style<N = string | number, S = Scale>(
    // eslint-disable-next-line no-unnecessary-generics
    args: LowLevelStyleFunctionArguments<N, S>,
): styleFn;

export interface styleFn {
    (...args: any[]): any;

    config?: object | undefined;
    propNames?: string[] | undefined;
    cache?: object | undefined;
}

export interface ConfigFunction {
    (value: any, scale: Scale | undefined, props: any): any;
    /** A string referencing a key in the `theme` object. */
    scale?: string;
    /** A fallback scale object for when there isn't one defined in the `theme` object. */
    defaults?: Scale;
}

export interface ConfigStyle {
    /** The CSS property to use in the returned style object (overridden by `properties` if present). */
    property?: keyof CSS.Properties | undefined;
    /**
     * An array of multiple properties (e.g. `['marginLeft', 'marginRight']`) to which this style's value will be
     * assigned (overrides `property` when present).
     */
    properties?: Array<keyof CSS.Properties> | undefined;
    /** A string referencing a key in the `theme` object. */
    scale?: string | undefined;
    /** A fallback scale object for when there isn't one defined in the `theme` object. */
    defaultScale?: Scale | undefined;
    /** A function to transform the raw value based on the scale. */
    transform?: ((value: any, scale?: Scale) => any) | undefined;
}

export interface Config {
    /** Property name exposed for use in components */
    [customStyleName: string]: ConfigStyle | ConfigFunction | boolean;
}

export function compose(...parsers: styleFn[]): styleFn;

export function system(styleDefinitions: Config): styleFn;

export function createParser(config: ConfigStyle): styleFn;

export function createStyleFunction(args: ConfigStyle): styleFn;

export interface VariantArgs<
    TStyle = object,
    K extends string = string,
    TPropName = string,
    > {
    key?: string | undefined;
    /** Component prop, defaults to "variant" */
    prop?: TPropName | undefined;
    /** theme key for variant definitions */
    scale?: string | undefined;
    /** inline theme aware variants definitions  */
    variants?: {
        [key in K]: TStyle;
    } | undefined;
}

export function variant<
    TStyle = object,
    K extends string = string,
    TPropName = string,
    >(
        // eslint-disable-next-line no-unnecessary-generics
        props: VariantArgs<TStyle, K, TPropName>
    ): (...args: any[]) => any;
/**
 * Converts shorthand or longhand margin and padding props to margin and padding CSS declarations
 *
 * - Numbers from 0-4 (or the length of theme.space) are converted to values on the spacing scale.
 * - Negative values can be used for negative margins.
 * - Numbers greater than the length of the theme.space array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */

export const space: styleFn;

export interface MarginProps<ThemeType extends Theme = RequiredTheme>
    extends Pick<SpaceProps<ThemeType>,
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
    | 'marginY'
    | 'mx'
    | 'marginX'> {
}

export interface MarginTopProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'mt' | 'marginTop'> {
}

export interface MarginBottomProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'mb' | 'marginBottom'> {
}

export interface MarginLeftProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'ml' | 'marginLeft'> {
}

export interface MarginRightProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'mr' | 'marginRight'> {
}

export const margin: styleFn;
export const marginTop: styleFn;
export const marginBottom: styleFn;
export const marginLeft: styleFn;
export const marginRight: styleFn;

export interface PaddingProps<ThemeType extends Theme = RequiredTheme>
    extends Pick<SpaceProps<ThemeType>,
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
    | 'paddingY'
    | 'px'
    | 'paddingX'> {
}

export interface PaddingTopProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'pt' | 'paddingTop'> {
}

export interface PaddingBottomProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'pb' | 'paddingBottom'> {
}

export interface PaddingLeftProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'pl' | 'paddingLeft'> {
}

export interface PaddingRightProps<ThemeType extends Theme = RequiredTheme> extends Pick<SpaceProps<ThemeType>, 'pr' | 'paddingRight'> {
}

export const padding: styleFn;
export const paddingTop: styleFn;
export const paddingBottom: styleFn;
export const paddingLeft: styleFn;
export const paddingRight: styleFn;

/**
 * Color
 */

export interface TextColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
     */
    color?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const textColor: styleFn;

export interface BackgroundColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
    bg?: ResponsiveValue<TVal, ThemeType> | undefined;
    backgroundColor?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const backgroundColor: styleFn;

export interface ColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> extends
    TextColorProps<ThemeType, TVal>,
    BackgroundColorProps<ThemeType, TVal>,
    OpacityProps {
}

export const color: styleFn;

/**
 * Typography
 */

export function getPx(n: any, scale: any): string;

export interface FontSizeProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'fontSizes', ThemeType>> {
    /**
     * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
     *
     * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
     * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
     * - String values are passed as raw CSS values.
     * - And array values are converted into responsive values.
     *
     */
    fontSize?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const fontSize: styleFn;

export interface FontFamilyProps<ThemeType extends Theme = RequiredTheme> {
    fontFamily?: ResponsiveValue<CSS.Property.FontFamily, ThemeType> | undefined;
}

export const fontFamily: styleFn;

export interface FontWeightProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'fontWeights', ThemeType>> {
    /**
     * The font-weight CSS property specifies the weight (or boldness) of the font.
     *
     * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     */
    fontWeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const fontWeight: styleFn;

export interface LineHeightProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'lineHeights', ThemeType>> {
    /**
     * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
     * it specifies the minimum height of line boxes within the element.
     *
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
    lineHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const lineHeight: styleFn;

export interface TextAlignProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign?: ResponsiveValue<CSS.Property.TextAlign, ThemeType> | undefined;
}

export const textAlign: styleFn;

export interface FontStyleProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The font-style CSS property specifies whether a font should be styled with a normal, italic,
     * or oblique face from its font-family.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: ResponsiveValue<CSS.Property.FontStyle, ThemeType> | undefined;
}

export const fontStyle: styleFn;

export interface LetterSpacingProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'letterSpacings', ThemeType>> {
    /**
     * The letter-spacing CSS property sets the spacing behavior between text characters.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
    letterSpacing?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const letterSpacing: styleFn;

/**
 * A convenience style group containing props related to typography such as fontFamily, fontSize, fontWeight, etc.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface TypographyProps<ThemeType extends Theme = RequiredTheme>
    extends FontFamilyProps<ThemeType>,
    FontSizeProps<ThemeType>,
    FontWeightProps<ThemeType>,
    LineHeightProps<ThemeType>,
    LetterSpacingProps<ThemeType>,
    FontStyleProps<ThemeType>,
    TextAlignProps<ThemeType> {
}

export const typography: styleFn;

/**
 * Layout
 */

export interface DisplayProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The display CSS property defines the display type of an element, which consists of the two basic qualities
     * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
     * and the inner display type defining how the children of the box are laid out.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    display?: ResponsiveValue<CSS.Property.Display, ThemeType> | undefined;
}

export const display: styleFn;

export interface WidthProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Width<TLengthStyledSystem>> {
    /**
     *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
     *
     *   - Numbers from 0-1 are converted to percentage widths.
     *   - Numbers greater than 1 are converted to pixel values.
     *   - String values are passed as raw CSS values.
     *   - And arrays are converted to responsive width styles.
     */
    width?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const width: styleFn;

export interface MaxWidthProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.MaxWidth<TLengthStyledSystem>> {
    /**
     * The max-width CSS property sets the maximum width of an element.
     * It prevents the used value of the width property from becoming larger than the value specified by max-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const maxWidth: styleFn;

export interface MinWidthProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.MinWidth<TLengthStyledSystem>> {
    /**
     * The min-width CSS property sets the minimum width of an element.
     * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const minWidth: styleFn;

export interface HeightProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Height<TLengthStyledSystem>> {
    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the
     * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    height?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const height: styleFn;

export interface MaxHeightProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.MaxHeight<TLengthStyledSystem>> {
    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
     * property from becoming larger than the value specified for max-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const maxHeight: styleFn;

export interface MinHeightProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.MinHeight<TLengthStyledSystem>> {
    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
     * property from becoming smaller than the value specified for min-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    minHeight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const minHeight: styleFn;

export interface SizeProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Height<TLengthStyledSystem>> {
    size?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const size: styleFn;

export interface VerticalAlignProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.VerticalAlign<TLengthStyledSystem>> {
    /**
     * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const verticalAlign: styleFn;

/**
 * Flexbox
 */
export interface AlignItemsProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
     * property sets the alignment of an item within its containing block.
     *
     * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
     * of items on the Block Axis within their grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
     */
    alignItems?: ResponsiveValue<CSS.Property.AlignItems, ThemeType> | undefined;
}

export const alignItems: styleFn;

export interface AlignContentProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The CSS align-content property sets how the browser distributes space between and around content items
     * along the cross-axis of a flexbox container, and the main-axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
     */
    alignContent?: ResponsiveValue<CSS.Property.AlignContent, ThemeType> | undefined;
}

export const alignContent: styleFn;

export interface JustifyItemsProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
     * a default way of justifying each box along the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
     */
    justifyItems?: ResponsiveValue<CSS.Property.JustifyItems, ThemeType> | undefined;
}

export const justifyItems: styleFn;

export interface JustifyContentProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items
     * along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent?: ResponsiveValue<CSS.Property.JustifyContent, ThemeType> | undefined;
}

export const justifyContent: styleFn;

export interface FlexWrapProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
     * If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
     */
    flexWrap?: ResponsiveValue<CSS.Property.FlexWrap, ThemeType> | undefined;
}

export const flexWrap: styleFn;

export interface FlexBasisProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.FlexBasis<TLengthStyledSystem>> {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const flexBasis: styleFn;

export interface FlexDirectionProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
     * axis and the direction (normal or reversed).
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
     */
    flexDirection?: ResponsiveValue<CSS.Property.FlexDirection, ThemeType> | undefined;
}

export const flexDirection: styleFn;

export interface FlexProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Flex<TLengthStyledSystem>> {
    /**
     * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
     * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
     */
    flex?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const flex: styleFn;

export interface JustifySelfProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The CSS justify-self property set the way a box is justified inside its alignment container along
     * the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
     */
    justifySelf?: ResponsiveValue<CSS.Property.JustifySelf, ThemeType> | undefined;
}

export const justifySelf: styleFn;

export interface AlignSelfProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
     *
     * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
     * aligns the item inside the grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
     */
    alignSelf?: ResponsiveValue<CSS.Property.AlignSelf, ThemeType> | undefined;
}

export const alignSelf: styleFn;

export interface OrderProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
     * are sorted by ascending order value and then by their source code order.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
     */
    order?: ResponsiveValue<CSS.Property.Order, ThemeType> | undefined;
}

export const order: styleFn;

export interface FlexGrowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the
     * remaining space in the flex container should be assigned to the item (the flex grow factor).
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)
     */
    flexGrow?: ResponsiveValue<CSS.Property.FlexGrow, ThemeType> | undefined;
}

export const flexGrow: styleFn;

export interface FlexShrinkProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger
     * than the flex container, items shrink to fit according to flex-shrink.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)
     */
    flexShrink?: ResponsiveValue<CSS.Property.FlexShrink, ThemeType> | undefined;
}

export const flexShrink: styleFn;

/**
 * A convenience style group containing props related to flexbox.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface FlexboxProps<ThemeType extends Theme = RequiredTheme>
    extends AlignItemsProps<ThemeType>,
    AlignContentProps<ThemeType>,
    JustifyItemsProps<ThemeType>,
    JustifyContentProps<ThemeType>,
    FlexWrapProps<ThemeType>,
    FlexDirectionProps<ThemeType>,
    FlexProps<ThemeType>,
    FlexGrowProps<ThemeType>,
    FlexShrinkProps<ThemeType>,
    FlexBasisProps<ThemeType>,
    JustifySelfProps<ThemeType>,
    AlignSelfProps<ThemeType>,
    OrderProps<ThemeType> {
}

export const flexbox: styleFn;

/**
 * Grid Layout
 */

export interface GridGapProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridGap<TLengthStyledSystem>> {
    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
     * and column-gap.
     *
     * @deprecated use gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
     */
    gridGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridGap: styleFn;

export interface GridColumnGapProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridColumnGap<TLengthStyledSystem>> {
    /**
     * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
     *
     * @deprecated use column-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridColumnGap: styleFn;

export interface GridRowGapProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridRowGap<TLengthStyledSystem>> {
    /**
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     *
     * @deprecated use row-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridRowGap: styleFn;

export interface GridColumnProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
     * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
     * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: ResponsiveValue<CSS.Property.GridColumn, ThemeType> | undefined;
}

export const gridColumn: styleFn;

export interface GridRowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
     * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
     * placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: ResponsiveValue<CSS.Property.GridRow, ThemeType> | undefined;
}

export const gridRow: styleFn;

export interface GridAutoFlowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
     * how auto-placed items get flowed into the grid.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow, ThemeType> | undefined;
}

export const gridAutoFlow: styleFn;

export interface GridAutoColumnsProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridAutoColumns<TLengthStyledSystem>> {
    /**
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridAutoColumns: styleFn;

export interface GridAutoRowsProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridAutoRows<TLengthStyledSystem>> {
    /**
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridAutoRows: styleFn;

export interface GridTemplateColumnsProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridTemplateColumns<TLengthStyledSystem>> {
    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridTemplateColumns: styleFn;

export interface GridTemplateRowsProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.GridTemplateRows<TLengthStyledSystem>> {
    /**
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
     */
    gridTemplateRows?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const gridTemplateRows: styleFn;

export interface GridTemplateAreasProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The grid-template-areas CSS property specifies named grid areas.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas, ThemeType> | undefined;
}

export const gridTemplateAreas: styleFn;

export interface GridAreaProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
     * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
     * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: ResponsiveValue<CSS.Property.GridArea, ThemeType> | undefined;
}

export const gridArea: styleFn;

/**
 * A convenience style group containing props related to grid.
 *
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface GridProps<ThemeType extends Theme = RequiredTheme>
    extends GridGapProps<ThemeType>,
    GridColumnGapProps<ThemeType>,
    GridRowGapProps<ThemeType>,
    GridColumnProps<ThemeType>,
    GridRowProps<ThemeType>,
    GridAutoFlowProps<ThemeType>,
    GridAutoColumnsProps<ThemeType>,
    GridAutoRowsProps<ThemeType>,
    GridTemplateColumnsProps<ThemeType>,
    GridTemplateRowsProps<ThemeType>,
    GridTemplateAreasProps<ThemeType>,
    GridAreaProps<ThemeType> {
}

export const grid: styleFn;

/**
 * A convenience style group containing props related to layout such as width, height, and display.
 *
 * - For length props, Numbers from 0-4 (or the length of theme.sizes) are converted to values on the spacing scale.
 * - For length props, Numbers greater than the length of the theme.sizes array are converted to raw pixel values.
 * - String values are passed as raw CSS values.
 * - Array values are converted into responsive values.
 */
export interface LayoutProps<ThemeType extends Theme = RequiredTheme>
    extends WidthProps<ThemeType>,
    HeightProps<ThemeType>,
    MinWidthProps<ThemeType>,
    MinHeightProps<ThemeType>,
    MaxWidthProps<ThemeType>,
    MaxHeightProps<ThemeType>,
    DisplayProps<ThemeType>,
    VerticalAlignProps<ThemeType>,
    SizeProps<ThemeType>,
    OverflowProps<ThemeType> {
}

export const layout: styleFn;

/**
 * Borders
 */

export interface BorderWidthProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'borderWidths', ThemeType>> {
    /**
     * The border-width shorthand CSS property sets the width of all sides of an element's border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width)
     */
    borderWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-top-width CSS property sets the width of the top border of an element.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width)
     */
    borderTopWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-bottom-width CSS property sets the width of the bottom border of an element.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width)
     */
    borderBottomWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-left-width CSS property sets the width of the left border of an element.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width)
     */
    borderLeftWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-right-width CSS property sets the width of the right border of an element.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width)
     */
    borderRightWidth?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderWidth: styleFn;

export interface BorderStyleProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The border-style shorthand CSS property sets the style of all sides of an element's border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)
     */
    borderStyle?: ResponsiveValue<CSS.Property.BorderStyle, ThemeType> | undefined;
    /**
     * The border-top-style CSS property sets the line style of an element's top border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style)
     */
    borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle, ThemeType> | undefined;
    /**
     * The border-bottom-style CSS property sets the line style of an element's bottom border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style)
     */
    borderBottomStyle?: ResponsiveValue<CSS.Property.BorderBottomStyle, ThemeType> | undefined;
    /**
     * The border-left-style CSS property sets the line style of an element's left border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style)
     */
    borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle, ThemeType> | undefined;
    /**
     * The border-right-style CSS property sets the line style of an element's right border.
     *
     * [MDN * reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style)
     */
    borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle, ThemeType> | undefined;
}

export const borderStyle: styleFn;

export interface BorderColorProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'colors', ThemeType>> {
    /**
     * The border-color shorthand CSS property sets the color of all sides of an element's border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
     */
    borderColor?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-top-color CSS property sets the color of an element's top border. It can also be set with the shorthand CSS properties border-color or border-top.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color)
     */
    borderTopColor?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-bottom-color CSS property sets the color of an element's bottom border. It can also be set with the shorthand CSS properties border-color or border-bottom.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color)
     */
    borderBottomColor?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-left-color CSS property sets the color of an element's left border. It can also be set with the shorthand CSS properties border-color or border-left.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color)
     */
    borderLeftColor?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-right-color CSS property sets the color of an element's right border. It can also be set with the shorthand CSS properties border-color or border-right.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color)
     */
    borderRightColor?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderColor: styleFn;

export interface BorderTopProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BorderTop<TLengthStyledSystem>> {
    /**
     * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
     * and border-top-color. These properties describe an element's top border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
     */
    borderTop?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderTop: styleFn;

export interface BorderRightProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BorderRight<TLengthStyledSystem>> {
    /**
     * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
     * and border-right-color. These properties set an element's right border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
     */
    borderRight?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderRight: styleFn;

export interface BorderBottomProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BorderBottom<TLengthStyledSystem>> {
    /**
     * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
     * border-bottom-width, border-bottom-style and border-bottom-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
     */
    borderBottom?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderBottom: styleFn;

export interface BorderLeftProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BorderLeft<TLengthStyledSystem>> {
    /**
     * The border-left CSS property is a shorthand that sets the values of border-left-width,
     * border-left-style, and border-left-color. These properties describe an element's left border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderLeft?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderLeft: styleFn;

export interface BorderRadiusProps<ThemeType extends Theme = RequiredTheme, TVal = ThemeValue<'radii', ThemeType>> {
    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
     * radius to make circular corners, or two radii to make elliptical corners.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    borderRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-top-left-radius CSS property rounds the top-left corner of an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius)
     */
    borderTopLeftRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-top-right-radius CSS property rounds the top-right corner of an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius)
     */
    borderTopRightRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius)
     */
    borderBottomLeftRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
    /**
     * The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius)
     */
    borderBottomRightRadius?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const borderRadius: styleFn;

export interface BordersProps<ThemeType extends Theme = RequiredTheme>
    extends BorderProps<ThemeType>,
    BorderTopProps<ThemeType>,
    BorderRightProps<ThemeType>,
    BorderBottomProps<ThemeType>,
    BorderLeftProps<ThemeType>,
    BorderWidthProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderRadiusProps<ThemeType> {
}

export const borders: styleFn;

export interface BorderProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Border<TLengthStyledSystem>>
    extends BorderWidthProps<ThemeType>,
    BorderStyleProps<ThemeType>,
    BorderColorProps<ThemeType>,
    BorderRadiusProps<ThemeType>,
    BorderTopProps<ThemeType>,
    BorderRightProps<ThemeType>,
    BorderBottomProps<ThemeType>,
    BorderLeftProps<ThemeType> {
    /**
     * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
     * and border-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
     */
    border?: ResponsiveValue<TVal, ThemeType> | undefined;
    borderX?: ResponsiveValue<TVal, ThemeType> | undefined;
    borderY?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const border: styleFn;

export interface BoxShadowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated
     * by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | number, ThemeType> | undefined;
}

export const boxShadow: styleFn;

export interface TextShadowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The `text-shadow` CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied
     * to the text and any of its `decorations`. Each shadow is described by some combination of X and Y offsets from
     * the element, blur radius, and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
     */
    textShadow?: ResponsiveValue<CSS.Property.TextShadow | number, ThemeType> | undefined;
}

export const textShadow: styleFn;

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> extends BoxShadowProps<ThemeType>, TextShadowProps<ThemeType> {
}

export const shadow: styleFn;

export interface OpacityProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The opacity CSS property sets the transparency of an element or the degree to which content
     * behind an element is visible.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
     */
    opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType> | undefined;
}

export const opacity: styleFn;

export interface OverflowProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The overflow CSS property sets what to do when an element's content is too big to fit in its block
     * formatting context. It is a shorthand for overflow-x and overflow-y.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
     */
    overflow?: ResponsiveValue<CSS.Property.Overflow, ThemeType> | undefined;
    /**
     * The overflow-x CSS property sets what shows when content overflows a block-level element's left
     * and right edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x)
     */
    overflowX?: ResponsiveValue<CSS.Property.OverflowX, ThemeType> | undefined;
    /**
     * The overflow-y CSS property sets what shows when content overflows a block-level element's top
     * and bottom edges. This may be nothing, a scroll bar, or the overflow content.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y)
     */
    overflowY?: ResponsiveValue<CSS.Property.OverflowY, ThemeType> | undefined;
}

export const overflow: styleFn;
export const overflowX: styleFn;
export const overflowY: styleFn;

/**
 * Background
 */

export interface BackgroundImageProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The background-image CSS property sets one or more background images on an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage, ThemeType> | undefined;
}

export const backgroundImage: styleFn;

export interface BackgroundSizeProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BackgroundSize<TLengthStyledSystem>> {
    /**
     * The background-size CSS property sets the size of the element's background image. The
     * image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    backgroundSize?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const backgroundSize: styleFn;

export interface BackgroundPositionProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.BackgroundPosition<TLengthStyledSystem>> {
    /**
     * The background-position CSS property sets the initial position for each background image. The
     * position is relative to the position layer set by background-origin.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
     */
    backgroundPosition?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const backgroundPosition: styleFn;

export interface BackgroundRepeatProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The background-repeat CSS property sets how background images are repeated. A background
     * image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
    backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat, ThemeType> | undefined;
}

export const backgroundRepeat: styleFn;

export interface BackgroundProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Background<TLengthStyledSystem>>
    extends BackgroundImageProps<ThemeType>,
    BackgroundSizeProps<ThemeType>,
    BackgroundPositionProps<ThemeType>,
    BackgroundRepeatProps<ThemeType> {
    /**
     * The background shorthand CSS property sets all background style properties at once,
     * such as color, image, origin and size, repeat method, and others.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    background?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const background: styleFn;

/**
 * Position
 */

export interface ZIndexProps<ThemeType extends Theme = RequiredTheme> {
    /**
     * The z-index CSS property sets the z-order of a positioned element and its descendants or
     * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
     */
    zIndex?: ResponsiveValue<CSS.Property.ZIndex, ThemeType> | undefined;
}

export const zIndex: styleFn;

export interface TopProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Top<TLengthStyledSystem>> {
    /**
     * The top CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    top?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const top: styleFn;

export interface RightProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Right<TLengthStyledSystem>> {
    /**
     * The right CSS property participates in specifying the horizontal position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
     */
    right?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const right: styleFn;

export interface BottomProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Bottom<TLengthStyledSystem>> {
    /**
     * The bottom CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    bottom?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const bottom: styleFn;

export interface LeftProps<ThemeType extends Theme = RequiredTheme, TVal = CSS.Property.Left<TLengthStyledSystem>> {
    /**
     * The left CSS property participates in specifying the horizontal position
     * of a positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
     */
    left?: ResponsiveValue<TVal, ThemeType> | undefined;
}

export const left: styleFn;

export interface PositionProps<ThemeType extends Theme = RequiredTheme> extends
    ZIndexProps<ThemeType>,
    TopProps<ThemeType>,
    RightProps<ThemeType>,
    BottomProps<ThemeType>,
    LeftProps<ThemeType> {
    /**
     * The position CSS property specifies how an element is positioned in a document.
     * The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    position?: ResponsiveValue<CSS.Property.Position, ThemeType> | undefined;
}

export const position: styleFn;

export interface ButtonStyleProps<ThemeType extends Theme = RequiredTheme> {
    variant?: ResponsiveValue<string, ThemeType> | undefined;
}

export const buttonStyle: styleFn;

export interface TextStyleProps<ThemeType extends Theme = RequiredTheme> {
    textStyle?: ResponsiveValue<string, ThemeType> | undefined;
}

export const textStyle: styleFn;

export interface ColorStyleProps<ThemeType extends Theme = RequiredTheme> {
    colors?: ResponsiveValue<string, ThemeType> | undefined;
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
