// Type definitions for styled-system 2.3
// Project: https://github.com/jxnblk/styled-system#readme
// Definitions by: Marshall Bowers <https://github.com/maxdeviant>
//                 Ben McCormick <https://github.com/phobon>
//                 Justin Bennett <https://github.com/zephraph>
//                 Christopher Pappas <https://github.com/damassi>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/**
 * Core
 */

export type GlobalStyleValues = "inherit" | "initial" | "unset";

export interface BaseTheme {
    breakpoints?: number[];
    space?: number[];
    fontSizes?: number[];
    colors?: {
        [name: string]: string;
    };
}

/**
 * Space
 */

export type ResponsiveValue<T> = T | Array<T | null>;

export type SpaceValue = number | string;
export type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

export interface SpaceProps {
    m?: ResponsiveSpaceValue;
    mt?: ResponsiveSpaceValue;
    mr?: ResponsiveSpaceValue;
    mb?: ResponsiveSpaceValue;
    ml?: ResponsiveSpaceValue;
    mx?: ResponsiveSpaceValue;
    my?: ResponsiveSpaceValue;
    p?: ResponsiveSpaceValue;
    pt?: ResponsiveSpaceValue;
    pr?: ResponsiveSpaceValue;
    pb?: ResponsiveSpaceValue;
    pl?: ResponsiveSpaceValue;
    px?: ResponsiveSpaceValue;
    py?: ResponsiveSpaceValue;
}

export function space(...args: any[]): any;

/**
 * Width
 */

export type WidthValue = number | string;
export type ResponsiveWidthValue = ResponsiveValue<WidthValue>;

export interface WidthProps {
    width?: ResponsiveWidthValue;
}

export interface MinWidthProps {
    minWidth?: ResponsiveWidthValue;
}

export interface MaxWidthProps {
    maxWidth?: ResponsiveWidthValue;
}

export function width(...args: any[]): any;
export function minWidth(...args: any[]): any;
export function maxWidth(...args: any[]): any;

/**
 * Height
 */

export type HeightValue = number | string;
export type ResponsiveHeightValue = ResponsiveValue<HeightValue>;

export interface HeightProps {
    height?: ResponsiveHeightValue;
}

export interface MinHeightProps {
    minHeight?: ResponsiveHeightValue;
}

export interface MaxHeightProps {
    maxHeight?: ResponsiveHeightValue;
}

export function height(...args: any[]): any;
export function minHeight(...args: any[]): any;
export function maxHeight(...args: any[]): any;

/**
 * Font Size
 */

export type FontSizeValue = number | string;
export type ResponsiveFontSizeValue = ResponsiveValue<FontSizeValue>;

export interface FontSizeProps {
    fontSize?: ResponsiveFontSizeValue;
}

export function fontSize(...args: any[]): any;

/**
 * Color
 */
export type ColorValue = string;
export type ResponsiveColorValue = ResponsiveValue<ColorValue>;

export interface ColorProps {
    color?: ResponsiveColorValue;
}

export function color(...args: any[]): any;

/**
 * Typography
 */
export interface FontFamilyProps {
    fontFamily?: string;
}
export function fontFamily(...args: any[]): any;

export type TextAlignValue =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "start"
    | "end"
    | "match-parent";
export type ResponsiveTextAlignValue = ResponsiveValue<TextAlignValue>;

export interface TextAlignProps {
    textAlign?: ResponsiveTextAlignValue;
}

export function textAlign(...args: any[]): any;

export type LineHeightValue = number | string;
export type ResponsiveLineHeightValue = ResponsiveValue<LineHeightValue>;
export interface LineHeightProps {
    lineHeight?: ResponsiveLineHeightValue;
}
export function lineHeight(...args: any[]): any;

export type FontWeightValue =
    | GlobalStyleValues
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | number;

export interface FontWeightProps {
    fontWeight?: FontWeightValue;
}

export function fontWeight(...args: any[]): any;

export type LetterSpacingValue = number | string;
export type ResponsiveLetterSpacingValue = ResponsiveValue<LetterSpacingValue>;
export interface LetterSpacingProps {
    letterSpacing?: ResponsiveLetterSpacingValue;
}
export function letterSpacing(...args: any[]): any;

/**
 * Layout
 */

export type DisplayValue =
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block";
export type ResponsiveDisplayValue = ResponsiveValue<DisplayValue>;
export interface DisplayProps {
    display?: ResponsiveDisplayValue;
}

export function display(...args: any[]): any;

export interface SizeProps {
    size?: ResponsiveWidthValue | ResponsiveHeightValue;
}

export function size(...args: any[]): any;

export type RatioValue = SpaceValue;

export interface RatioProps {
    ratio?: RatioValue;
}

export function ratio(...args: any[]): any;

/**
 * Flexbox
 */

export type AlignItemsValue =
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";
export type ResponsiveAlignItemsValue = ResponsiveValue<AlignItemsValue>;

export interface AlignItemsProps {
    align?: ResponsiveAlignItemsValue;
    alignItems?: ResponsiveAlignItemsValue;
}

export function alignItems(...args: any[]): any;

export type JustifyContentValue =
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
export type ResponsiveJustifyContentValue = ResponsiveValue<
    JustifyContentValue
>;

export interface JustifyContentProps {
    justify?: ResponsiveJustifyContentValue;
    justifyContent?: ResponsiveJustifyContentValue;
}

export function justifyContent(...args: any[]): any;

export type FlexWrapValue = true | "nowrap" | "wrap" | "wrap-reverse";

export interface FlexWrapProps {
    wrap?: FlexWrapValue;
    flexWrap?: FlexWrapValue;
}

export function flexWrap(...args: any[]): any;

export type FlexDirectionValue =
    | GlobalStyleValues
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";

export type ResponsiveFlexDirectionValue = ResponsiveValue<FlexDirectionValue>;

export interface FlexDirectionProps {
    flexDirection?: ResponsiveFlexDirectionValue;
}

export function flexDirection(...args: any[]): any;

export type FlexValue = number | string;
export type ResponsiveFlexValue = ResponsiveValue<FlexValue>;

export interface FlexProps {
    flex?: ResponsiveFlexValue;
}

export function flex(...args: any[]): any;

export type AlignContentValue =
    | GlobalStyleValues
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "normal"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "safe center"
    | "unsafe center";
export type ResponsiveAlignContentValue = ResponsiveValue<AlignContentValue>;

export interface AlignContentProps {
    alignContent?: ResponsiveAlignItemsValue;
}

export function alignContent(...args: any[]): any;

export type JustifySelfValue =
    | GlobalStyleValues
    | "auto"
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "safe center"
    | "unsafe center";

export type ResponsiveJustifySelfValue = ResponsiveValue<JustifySelfValue>;

export interface JustifySelfProps {
    justifySelf?: ResponsiveJustifySelfValue;
}

export function justifySelf(...args: any[]): any;

export type AlignSelfValue =
    | "auto"
    | "normal"
    | "center"
    | "start"
    | "end"
    | "self-start"
    | "self-end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    | "baseline"
    | "first baseline"
    | "last baseline"
    | "stretch"
    | "safe center"
    | "unsafe center";
export type ResponsiveAlignSelfValue = ResponsiveValue<AlignSelfValue>;

export interface AlignSelfProps {
    alignSelf?: ResponsiveAlignSelfValue;
}

export function alignSelf(...args: any[]): any;

export type OrderValue = GlobalStyleValues | number;
export type ResponsiveOrderValue = ResponsiveValue<OrderValue>;

export interface OrderProps {
    order?: ResponsiveOrderValue;
}

export function order(...args: any[]): any;

export type FlexBasisValue =
    | GlobalStyleValues
    | "auto"
    | "fill"
    | "max-content"
    | "min-content"
    | "fit-content"
    | "content";

export interface FlexBasisProps {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: FlexBasisValue | string;
}

export function flexBasis(...args: any[]): any;

/**
 * Grid Layout
 */

// TODO: Add grid values

/**
 * Background
 */

export type BackgroundValue = string;
export interface BackgroundProps {
    background?: BackgroundValue;
    bg?: BackgroundValue;
}

export function background(...args: any[]): any;

export type BackgroundImageValue = string;
export interface BackgroundImageProps {
    /**
     * Value will be wrapped in url()
     */
    backgroundImage?: BackgroundImageValue;
}

export function backgroundImage(...args: any[]): any;

export type BackgroundSizeValue = string;
export interface BackgroundSizeProps {
    backgroundSize?: BackgroundSizeValue;
}

export function backgroundSize(...args: any[]): any;

export type BackgroundPositionValue = string;
export interface BackgroundPositionProps {
    backgroundPosition?: BackgroundPositionValue;
}

export function backgroundPosition(...args: any[]): any;

export type BackgroundRepeatValue = string;
export interface BackgroundRepeatProps {
    backgroundRepeat?: BackgroundRepeatValue;
}

export function backgroundRepeat(...args: any[]): any;

/**
 * Misc
 */

export type BorderRadiusValue = string | number;
export interface BorderRadiusProps {
    borderRadius?: BorderRadiusValue;
}
export function borderRadius(...args: any[]): any;

export type BorderColorValue = string;
export interface BorderColorProps {
    borderColor?: BorderColorValue;
}
export function borderColor(...args: any[]): any;

export type BorderValue = string | number;
export type ResponsiveBorderValue = ResponsiveValue<BorderValue>;

export interface BorderProps {
    border?: ResponsiveBorderValue;
}
export function border(...args: any[]): any;
export interface BordersProps {
    border?: ResponsiveBorderValue;
    borderTop?: ResponsiveBorderValue;
    borderRight?: ResponsiveBorderValue;
    borderBottom?: ResponsiveBorderValue;
    borderLeft?: ResponsiveBorderValue;
}
export function borders(...args: any[]): any;

export type BoxShadowValue = string | number;
export interface BoxShadowProps {
    boxShadow?: BoxShadowValue;
}
export function boxShadow(...arg: any[]): any;

/**
 * Position
 */

export type PositionValue =
    | "static"
    | "relative"
    | "absolute"
    | "sticky"
    | "fixed";
export type ResponsivePositionValue = ResponsiveValue<PositionValue>;
export interface PositionProps {
    position?: ResponsivePositionValue;
}
export function position(...args: any[]): any;

export type ZIndexValue = GlobalStyleValues | "auto" | number;

export interface ZIndexProps {
    zIndex?: ZIndexValue;
}
export function zIndex(...args: any[]): any;

export type TopValue = string | number;
export type ResponsiveTopValue = ResponsiveValue<TopValue>;
export interface TopProps {
    top?: ResponsiveTopValue;
}
export function top(...args: any[]): any;

export type RightValue = string | number;
export type ResponsiveRightValue = ResponsiveValue<RightValue>;
export interface RightProps {
    right?: ResponsiveRightValue;
}
export function right(...args: any[]): any;

export type BottomValue = string | number;
export type ResponsiveBottomValue = ResponsiveValue<BottomValue>;
export interface BottomProps {
    bottom?: ResponsiveBottomValue;
}
export function bottom(...args: any[]): any;

export type LeftValue = string | number;
export type ResponsiveLeftValue = ResponsiveValue<LeftValue>;
export interface LeftProps {
    left?: ResponsiveLeftValue;
}
export function left(...args: any[]): any;

/**
 * Pseudo-classes
 */

export interface PseudoStyleValue {
    color?: ColorValue;
    backgroundColor?: ColorValue;
    borderColor?: BorderColorValue;
    boxShadow?: BoxShadowValue;
    textDecoration?: string;
}
export type HoverValue = PseudoStyleValue;
export interface HoverProps {
    hover?: HoverValue;
}
export function hover(...args: any[]): any;

export type FocusValue = PseudoStyleValue;
export interface FocusProps {
    focus?: FocusValue;
}
export function focus(...args: any[]): any;

export type ActiveValue = PseudoStyleValue;
export interface ActiveProps {
    active?: ActiveValue;
}
export function active(...args: any[]): any;

export type DisabledValue = PseudoStyleValue;
export interface DisabledProps {
    disabledStyle?: DisabledValue;
}
export function disabled(...args: any[]): any;

/**
 * Utilities
 */

export function theme(keys: string): any;
export function themeGet(keys: string, fallback?: string): any;

export function cleanElement(component: any): any;

export function removeProps(props: any): any;

/**
 * Low-level style export functions
 */

export interface LowLevelStylefunctionArguments {
    prop: string;
    cssProperty?: string;
    key?: string;
    numberToPx?: boolean;
    alias?: string;
    getter?: () => any;
}

export function style(args: LowLevelStylefunctionArguments): any;

export function responsiveStyle(args: LowLevelStylefunctionArguments): any;

export function pseudoStyle(args: LowLevelStylefunctionArguments): any;
