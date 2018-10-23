import { ResponsiveValue, ResponsiveSpaceValue, SpaceValue } from './space';

export * from './space';

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

export interface TextColorProps {
    color?: ResponsiveColorValue;
}

export function textColor(...args: any[]): any;

export interface BgColorProps {
    bg?: ResponsiveColorValue;
}

export function bgColor(...args: any[]): any;

export interface ColorProps extends TextColorProps, BgColorProps {}

export function color(...args: any[]): any;

/**
 * Typography
 */
export type TypographyValue = string;
export type ResponsiveTypographyValue = ResponsiveValue<TypographyValue>;

export interface FontFamilyProps {
    fontFamily?: ResponsiveTypographyValue;
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
export type ResponsiveFontWeightValue = ResponsiveValue<FontWeightValue>;

export interface FontWeightProps {
    fontWeight?: ResponsiveFontWeightValue;
}

export function fontWeight(...args: any[]): any;

export type FontStyleValue = string;
export type ResponsiveFontStyleValue = ResponsiveValue<FontStyleValue>;
export interface FontStyleProps {
    fontStyle?: ResponsiveFontStyleValue;
}
export function fontStyle(...args: any[]): any;

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
    | "none"
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

export interface MaxWidthProps {
    maxWidth?: ResponsiveSpaceValue;
}

export function maxWidth(...args: any[]): any;

export interface MinWidthProps {
    minWidth?: ResponsiveSpaceValue;
}

export function minWidth(...args: any[]): any;

export interface WidthProps {
    width?: ResponsiveSpaceValue;
}

export function width(...args: any[]): any;

export interface MaxHeightProps {
    maxHeight?: ResponsiveSpaceValue;
}

export function maxHeight(...args: any[]): any;

export interface MinHeightProps {
    minHeight?: ResponsiveSpaceValue;
}

export function minHeight(...args: any[]): any;

export interface HeightProps {
    height?: ResponsiveSpaceValue;
}

export function height(...args: any[]): any;

export interface SizeWidthProps {
    size?: ResponsiveSpaceValue;
}

export function sizeWidth(...args: any[]): any;

export interface SizeHeightProps {
    size?: ResponsiveSpaceValue;
}

export function sizeHeight(...args: any[]): any;

export interface SizeProps extends SizeHeightProps, SizeWidthProps {}

export function size(...args: any[]): any;

export type RatioValue = SpaceValue;
export type ResponsiveRatioValue = ResponsiveValue<RatioValue>;

export interface RatioProps {
    ratio?: ResponsiveRatioValue;
}

export function ratio(...args: any[]): any;

export type VerticleAlignValue =
    | "baseline"
    | "sub"
    | "super"
    | "text-top"
    | "text-bottom"
    | "middle"
    | "top"
    | "bottom"
    | string
    | number;
export type ResponsiveVerticleAlignValue = ResponsiveValue<VerticleAlignValue>;

export interface VerticleAlignProps {
    verticalAlign?: ResponsiveVerticleAlignValue;
}

export function verticleAlign(...args: any[]): any;

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
    alignItems?: ResponsiveAlignItemsValue;
}

export function alignItems(...args: any[]): any;

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
    alignContent?: ResponsiveAlignContentValue;
}

export function alignContent(...args: any[]): any;

export type JustifyItemsValue = string;
export type ResponsiveJustifyItemsValue = ResponsiveValue<JustifyItemsValue>;

export interface JustifyItemsProps {
    justifyItems?: ResponsiveJustifyItemsValue;
}

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
    justifyContent?: ResponsiveJustifyContentValue;
}

export function justifyContent(...args: any[]): any;

export type FlexWrapValue = true | "nowrap" | "wrap" | "wrap-reverse";
export type ResponsiveFlexWrapValue = ResponsiveValue<FlexWrapValue>;

export interface FlexWrapProps {
    flexWrap?: ResponsiveFlexWrapValue;
}

export function flexWrap(...args: any[]): any;

export type FlexBasisValue =
    | GlobalStyleValues
    | "auto"
    | "fill"
    | "max-content"
    | "min-content"
    | "fit-content"
    | "content";
export type ResponsiveFlexBasisValue = ResponsiveValue<FlexBasisValue>;

export interface FlexBasisProps {
    // TODO: The FlexBasisValue currently really only exists for documentation
    //       purposes, because flex-basis also accepts `Nem` and `Npx` strings.
    //       Not sure there’s a way to still have the union values show up as
    //       auto-completion results.
    flexBasis?: ResponsiveFlexBasisValue | string;
}

export function flexBasis(...args: any[]): any;

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

/**
 * Grid Layout
 */

export type GridGapValue = number | string;
export type ResponsiveGridGapValue = ResponsiveValue<GridGapValue>;

export interface GridGapProps {
    gridGap?: ResponsiveGridGapValue;
}

export function gridGap(...args: any[]): any;

export interface GridColumnGapProps {
    gridColumnGap?: ResponsiveGridGapValue;
}

export function gridColumnGap(...args: any[]): any;

export interface GridRowGapProps {
    gridRowGap?: ResponsiveGridGapValue;
}

export function gridRowGap(...args: any[]): any;

export type GridCellValue = string;
export type ResponsiveGridCellValue = ResponsiveValue<GridCellValue>;

export interface GridColumnProps {
    gridColumn?: ResponsiveGridCellValue;
}

export function gridColumn(...args: any[]): any;

export interface GridRowProps {
    gridRow?: ResponsiveGridCellValue;
}

export function gridRow(...args: any[]): any;

export type GridAutoValue = string;
export type ResponsiveGridAutoValue = ResponsiveValue<GridAutoValue>;

export interface GridAutoFlowProps {
    gridAutoFlow?: ResponsiveGridAutoValue;
}

export function gridAutoFlow(...args: any[]): any;

export interface GridAutoColumnsProps {
    gridAutoColumns?: ResponsiveGridAutoValue;
}

export function gridAutoColumns(...args: any[]): any;

export interface GridAutoRowsProps {
    gridAutoRows?: ResponsiveGridAutoValue;
}

export function gridAutoRows(...args: any[]): any;

export type GridTemplateValue = string;
export type ResponsiveGridTemplateValue = ResponsiveValue<GridTemplateValue>;

export interface GridTemplatesColumnsProps {
    gridTemplateColumns?: ResponsiveGridTemplateValue;
}

export function gridTemplateColumns(...args: any[]): any;

export interface GridTemplatesRowsProps {
    gridTemplateRows?: ResponsiveGridTemplateValue;
}

export function gridTemplateRows(...args: any[]): any;

export interface GridTemplatesAreasProps {
    gridTemplateAreas?: ResponsiveGridTemplateValue;
}

export function gridTemplateAreas(...args: any[]): any;

export interface GridAreaProps {
    gridArea?: ResponsiveGridTemplateValue;
}

export function gridArea(...args: any[]): any;

/**
 * Borders
 */

export type BorderValue = string | number;
export type ResponsiveBorderValue = ResponsiveValue<BorderValue>;

export interface BorderProps {
    border?: ResponsiveBorderValue;
}

export function border(...args: any[]): any;

export interface BorderTopProps {
    borderTop?: ResponsiveBorderValue;
}

export function borderTop(...args: any[]): any;

export interface BorderRightProps {
    borderRight?: ResponsiveBorderValue;
}

export function borderRight(...args: any[]): any;

export interface BorderBottomProps {
    borderBottom?: ResponsiveBorderValue;
}

export function borderBottom(...args: any[]): any;

export interface BorderLeftProps {
    borderLeft?: ResponsiveBorderValue;
}

export function borderLeft(...args: any[]): any;

export interface BordersProps extends BorderTopProps, BorderRightProps, BorderBottomProps, BorderLeftProps {}

export function borders(...args: any[]): any;

export type BorderColorValue = string;
export type ResponsiveBorderColorValue = ResponsiveValue<BorderColorValue>;

export interface BorderColorProps {
    borderColor?: ResponsiveBorderColorValue;
}

export function borderColor(...args: any[]): any;

export type BorderRadiusValue = string | number;
export type ResponsiveBorderRadiusValue = ResponsiveValue<BorderRadiusValue>;

export interface BorderRadiusProps {
    borderRadius?: ResponsiveBorderRadiusValue;
}

export function borderRadius(...args: any[]): any;

export type BoxShadowValue = string | number;
export type ResponsiveBoxShadowValue = ResponsiveValue<BoxShadowValue>;

export interface BoxShadowProps {
    boxShadow?: ResponsiveBoxShadowValue;
}

export function boxShadow(...arg: any[]): any;

export type OpacityValue = string | number;
export type ResponsiveOpacityValue = ResponsiveValue<OpacityValue>;

export interface OpacityProps {
    opacity?: ResponsiveOpacityValue;
}

export function opacity(...arg: any[]): any;

export type OverflowValue = string | number;
export type ResponsiveOverflowValue = ResponsiveValue<OverflowValue>;

export interface OverflowProps {
    overflow?: ResponsiveOverflowValue;
}

export function overflow(...arg: any[]): any;
/**
 * Background
 */

export type BackgroundValue = string;
export type ResponsiveBackgroundValue = ResponsiveValue<BackgroundValue>;

export interface BackgroundProps {
    background?: ResponsiveBackgroundValue;
}

export function background(...args: any[]): any;

export type BackgroundImageValue = string;
export type ResponsiveBackgroundImageValue = ResponsiveValue<BackgroundImageValue>;

export interface BackgroundImageProps {
    backgroundImage?: ResponsiveBackgroundImageValue;
}

export function backgroundImage(...args: any[]): any;

export type BackgroundSizeValue = string;
export type ResponsiveBackgroundSizeValue = ResponsiveValue<BackgroundSizeValue>;

export interface BackgroundSizeProps {
    backgroundSize?: ResponsiveBackgroundSizeValue;
}

export function backgroundSize(...args: any[]): any;

export type BackgroundPositionValue = string;
export type ResponsiveBackgroundPositionValue = ResponsiveValue<BackgroundPositionValue>;

export interface BackgroundPositionProps {
    backgroundPosition?: ResponsiveBackgroundPositionValue;
}

export function backgroundPosition(...args: any[]): any;

export type BackgroundRepeatValue = string;
export type ResponsiveBackgroundRepeatValue = ResponsiveValue<BackgroundRepeatValue>;

export interface BackgroundRepeatProps {
    backgroundRepeat?: ResponsiveBackgroundRepeatValue;
}

export function backgroundRepeat(...args: any[]): any;

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
export type ResponsiveZIndexValue = ResponsiveValue<ZIndexValue>;

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

export type Variant = string;
export type ResponsiveVariant = ResponsiveValue<Variant>;

export interface TextStyleProps {
    textStyle?: ResponsiveVariant;
}

export function textStyle(...args: any[]): any;

export interface ColorStyleProps {
    colors?: ResponsiveVariant;
}

export function colorStyle(...args: any[]): any;

export interface ButtonStyleProps {
    variant?: ResponsiveVariant;
}

export function buttonStyle(...args: any[]): any;
