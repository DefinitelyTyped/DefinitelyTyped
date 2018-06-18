// Type definitions for styled-system 2.3
// Project: https://github.com/jxnblk/styled-system#readme
// Definitions by: Marshall Bowers <https://github.com/maxdeviant>
//                 Ben McCormick   <https://github.com/phobon>
//                 Justin Bennett  <https://github.com/zephraph>
//                 Christopher Pappas <https://github.com/damassi>
//                 Eloy Durán      <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.1

/**
 * Core
 */

type GlobalStyleValues = "inherit" | "initial" | "unset";

interface BaseTheme {
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

type ResponsiveValue<T> = T | Array<T | null>;

type SpaceValue = number | string;
type ResponsiveSpaceValue = ResponsiveValue<SpaceValue>;

interface SpaceProps {
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

declare function space(...args: any[]): any;

/**
 * Width
 */

type WidthValue = number | string;
type ResponsiveWidthValue = ResponsiveValue<WidthValue>;

interface WidthProps {
    width?: ResponsiveWidthValue;
}

interface MinWidthProps {
    minWidth?: ResponsiveWidthValue;
}

interface MaxWidthProps {
    maxWidth?: ResponsiveWidthValue;
}

declare function width(...args: any[]): any;
declare function minWidth(...args: any[]): any;
declare function maxWidth(...args: any[]): any;

/**
 * Height
 */

type HeightValue = number | string;
type ResponsiveHeightValue = ResponsiveValue<HeightValue>;

interface HeightProps {
    height?: ResponsiveHeightValue;
}

interface MinHeightProps {
    minHeight?: ResponsiveHeightValue;
}

interface MaxHeightProps {
    maxHeight?: ResponsiveHeightValue;
}

declare function height(...args: any[]): any;
declare function minHeight(...args: any[]): any;
declare function maxHeight(...args: any[]): any;

/**
 * Font Size
 */

type FontSizeValue = number | string;
type ResponsiveFontSizeValue = ResponsiveValue<FontSizeValue>;

interface FontSizeProps {
    fontSize?: ResponsiveFontSizeValue;
}

declare function fontSize(...args: any[]): any;

/**
 * Color
 */
type ColorValue = string;
type ResponsiveColorValue = ResponsiveValue<ColorValue>;

declare function color(...args: any[]): any;

/**
 * Typography
 */
interface FontFamilyProps {
    fontFamily?: string;
}
declare function fontFamily(...args: any[]): any;

type TextAlignValue =
    | "left"
    | "right"
    | "center"
    | "justify"
    | "justify-all"
    | "start"
    | "end"
    | "match-parent";
type ResponsiveTextAlignValue = ResponsiveValue<TextAlignValue>;

interface TextAlignProps {
    align?: ResponsiveTextAlignValue;
}

declare function textAlign(...args: any[]): any;

type LineHeightValue = number | string;
type ResponsiveLineHeightValue = ResponsiveValue<LineHeightValue>;
interface LineHeightProps {
    lineHeight?: ResponsiveLineHeightValue;
}
declare function lineHeight(...args: any[]): any;

type FontWeightValue =
    | GlobalStyleValues
    | "normal"
    | "bold"
    | "lighter"
    | "bolder"
    | number;

interface FontWeightProps {
    fontWeight?: FontWeightValue;
}

declare function fontWeight(...args: any[]): any;

type LetterSpacingValue = number | string;
type ResponsiveLetterSpacingValue = ResponsiveValue<LetterSpacingValue>;
interface LetterSpacingProps {
    letterSpacing?: ResponsiveLetterSpacingValue;
}
declare function letterSpacing(...args: any[]): any;

/**
 * Layout
 */

type DisplayValue =
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block";

interface DisplayProps {
    display?: DisplayValue;
}

declare function display(...args: any[]): any;

interface SizeProps {
    size?: ResponsiveWidthValue | ResponsiveHeightValue;
}

declare function size(...args: any[]): any;

type RatioValue = SpaceValue;

interface RatioProps {
    ratio?: RatioValue;
}

declare function ratio(...args: any[]): any;

/**
 * Flexbox
 */

type AlignItemsValue =
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
type ResponsiveAlignItemsValue = ResponsiveValue<AlignItemsValue>;

interface AlignItemsProps {
    align?: ResponsiveAlignItemsValue;
    alignItems?: ResponsiveAlignItemsValue;
}

declare function alignItems(...args: any[]): any;

type JustifyContentValue =
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
type ResponsiveJustifyContentValue = ResponsiveValue<JustifyContentValue>;

interface JustifyContentProps {
    justify?: ResponsiveJustifyContentValue;
    justifyContent?: ResponsiveJustifyContentValue;
}

declare function justifyContent(...args: any[]): any;

type FlexWrapValue = true | "nowrap" | "wrap" | "wrap-reverse";

interface FlexWrapProps {
    wrap?: FlexWrapValue;
}

declare function flexWrap(...args: any[]): any;

type FlexDirectionValue =
    | GlobalStyleValues
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse";

type ResponsiveFlexDirectionValue = ResponsiveValue<FlexDirectionValue>;

interface FlexDirectionProps {
    flexDirection?: ResponsiveFlexDirectionValue;
}

declare function flexDirection(...args: any[]): any;

type FlexValue = number | string;
type ResponsiveFlexValue = ResponsiveValue<FlexValue>;

interface FlexProps {
    flex?: ResponsiveFlexValue;
}

declare function flex(...args: any[]): any;

type AlignContentValue =
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
type ResponsiveAlignContentValue = ResponsiveValue<AlignContentValue>;

interface AlignContentProps {
    alignContent?: ResponsiveAlignItemsValue;
}

declare function alignContent(...args: any[]): any;

type JustifySelfValue =
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

type ResponsiveJustifySelfValue = ResponsiveValue<JustifySelfValue>;

interface JustifySelfProps {
    justifySelf?: ResponsiveJustifySelfValue;
}

declare function justifySelf(...args: any[]): any;

type AlignSelfValue =
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
type ResponsiveAlignSelfValue = ResponsiveValue<AlignSelfValue>;

interface AlignSelfProps {
    alignSelf?: ResponsiveAlignSelfValue;
}

declare function alignSelf(...args: any[]): any;

type OrderValue = GlobalStyleValues | number;
type ResponsiveOrderValue = ResponsiveValue<OrderValue>;

interface OrderProps {
    order?: ResponsiveOrderValue;
}

declare function order(...args: any[]): any;

type FlexBasisValue =
    | GlobalStyleValues
    | "auto"
    | "fill"
    | "max-content"
    | "min-content"
    | "fit-content"
    | "content";

interface FlexBasisProps {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: FlexBasisValue | string;
}

declare function flexBasis(...args: any[]): any;

/**
 * Grid Layout
 */

// TODO: Add grid values

/**
 * Background
 */

type BackgroundValue = string;
interface BackgroundProps {
    background?: BackgroundValue;
}

declare function background(...args: any[]): any;

type BackgroundImageValue = string;
interface BackgroundImageProps {
    /**
     * Value will be wrapped in url()
     */
    backgroundImage?: BackgroundImageValue;
}

declare function backgroundImage(...args: any[]): any;

type BackgroundSizeValue = string;
interface BackgroundSizeProps {
    backgroundImage?: BackgroundSizeValue;
}

declare function backgroundSize(...args: any[]): any;

type BackgroundPositionValue = string;
interface BackgroundPositionProps {
    backgroundImage?: BackgroundPositionValue;
}

declare function backgroundPosition(...args: any[]): any;

type BackgroundRepeatValue = string;
interface BackgroundRepeatProps {
    backgroundImage?: BackgroundRepeatValue;
}

declare function backgroundRepeat(...args: any[]): any;

/**
 * Misc
 */

type BorderRadiusValue = string | number;
interface BorderRadiusProps {
    borderRadius?: BorderRadiusValue;
}
declare function borderRadius(...args: any[]): any;

type BorderColorValue = string;
interface BorderColorProps {
    borderColor?: BorderColorValue;
}
declare function borderColor(...args: any[]): any;

type BorderValue = string | number;
type ResponsiveBorderValue = ResponsiveValue<BorderValue>;
interface BorderProps {
    border?: ResponsiveBorderValue;
    borderTop?: ResponsiveBorderValue;
    borderRight?: ResponsiveBorderValue;
    borderBottom?: ResponsiveBorderValue;
    borderLeft?: ResponsiveBorderValue;
}
declare function borders(...args: any[]): any;

type BoxShadowValue = string;
interface BoxShadowProps {
    boxShadow?: BoxShadowValue;
}
declare function boxShadow(...arg: any[]): any;

/**
 * Position
 */

type PositionValue = "static" | "relative" | "absolute" | "sticky" | "fixed";
type ResponsivePositionValue = ResponsiveValue<PositionValue>;
interface PositionProps {
    position?: ResponsivePositionValue;
}
declare function position(...args: any[]): any;

type TopValue = string | number;
type ResponsiveTopValue = ResponsiveValue<TopValue>;
interface TopProps {
    top?: ResponsiveTopValue;
}
declare function top(...args: any[]): any;

type RightValue = string | number;
type ResponsiveRightValue = ResponsiveValue<RightValue>;
interface RightProps {
    right?: ResponsiveRightValue;
}
declare function right(...args: any[]): any;

type BottomValue = string | number;
type ResponsiveBottomValue = ResponsiveValue<BottomValue>;
interface BottomProps {
    bottom?: ResponsiveBottomValue;
}
declare function bottom(...args: any[]): any;

type LeftValue = string | number;
type ResponsiveLeftValue = ResponsiveValue<LeftValue>;
interface LeftProps {
    left?: ResponsiveLeftValue;
}
declare function left(...args: any[]): any;

/**
 * Pseudo-classes
 */

interface PseudoStyleValue {
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
    boxShadow?: number;
}
type HoverValue = PseudoStyleValue;
interface HoverProps {
    hover?: HoverValue;
}
declare function hover(...args: any[]): any;

type FocusValue = PseudoStyleValue;
interface FocusProps {
    focus?: FocusValue;
}
declare function focus(...args: any[]): any;

type ActiveValue = PseudoStyleValue;
interface ActiveProps {
    active?: ActiveValue;
}
declare function active(...args: any[]): any;

type DisabledValue = PseudoStyleValue;
interface DisabledProps {
    disabledStyle?: DisabledValue;
}
declare function disabled(...args: any[]): any;

/**
 * Utilities
 */

declare function theme(keys: string): any;
declare function themeGet(keys: string): any;

declare function cleanElement(component: any): any;

declare function removeProps(props: any): any;

/**
 * Low-level style declare functions
 */

interface LowLevelStylefunctionArguments {
    prop: string;
    cssProperty?: string;
    key?: string;
    numberToPx?: boolean;
    alias?: string;
}

declare function style(args: LowLevelStylefunctionArguments): any;

declare function responsiveStyle(args: LowLevelStylefunctionArguments): any;

declare function pseudoStyle(args: LowLevelStylefunctionArguments): any;
