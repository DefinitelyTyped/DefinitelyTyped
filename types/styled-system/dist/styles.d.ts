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
    /**
     * The fontSize utility parses a component's `fontSize` prop and converts it into a CSS font-size declaration.
     *
     * - Numbers from 0-8 (or `theme.fontSizes.length`) are converted to values on the [font size scale](#default-theme).
     * - Numbers greater than `theme.fontSizes.length` are converted to raw pixel values.
     * - String values are passed as raw CSS values.
     * - And array values are converted into responsive values.
     *
     */
    fontSize?: ResponsiveFontSizeValue;
}

export function fontSize(...args: any[]): any;

/**
 * Color
 */
export type ColorValue = string;
export type ResponsiveColorValue = ResponsiveValue<ColorValue>;

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
    color?: ResponsiveColorValue;
}

export function textColor(...args: any[]): any;

export interface BgColorProps {
    /**
     * The color utility parses a component's `color` and `bg` props and converts them into CSS declarations.
     * By default the raw value of the prop is returned.
     *
     * Color palettes can be configured with the ThemeProvider to use keys as prop values, with support for dot notation.
     * Array values are converted into responsive values.
     *
     * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)
     */
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
    /**
     * The text-align CSS property specifies the horizontal alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
     */
    textAlign?: ResponsiveTextAlignValue;
}

export function textAlign(...args: any[]): any;

export type LineHeightValue = number | string;
export type ResponsiveLineHeightValue = ResponsiveValue<LineHeightValue>;
export interface LineHeightProps {
    /**
     * The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements,
     * it specifies the minimum height of line boxes within the element.
     *
     * On non-replaced inline elements, it specifies the height that is used to calculate line box height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
     */
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
    /**
     * The font-weight CSS property specifies the weight (or boldness) of the font.
     *
     * The font weights available to you will depend on the font-family you are using. Some fonts are only available in normal and bold.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
     */
    fontWeight?: ResponsiveFontWeightValue;
}

export function fontWeight(...args: any[]): any;

export type FontStyleValue = string;
export type ResponsiveFontStyleValue = ResponsiveValue<FontStyleValue>;
export interface FontStyleProps {
    /**
     * The font-style CSS property specifies whether a font should be styled with a normal, italic,
     * or oblique face from its font-family.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
     */
    fontStyle?: ResponsiveFontStyleValue;
}
export function fontStyle(...args: any[]): any;

export type LetterSpacingValue = number | string;
export type ResponsiveLetterSpacingValue = ResponsiveValue<LetterSpacingValue>;
export interface LetterSpacingProps {
    /**
     * The letter-spacing CSS property sets the spacing behavior between text characters.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
     */
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
    /**
     * The display CSS property defines the display type of an element, which consists of the two basic qualities
     * of how an element generates boxes — the outer display type defining how the box participates in flow layout,
     * and the inner display type defining how the children of the box are laid out.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    display?: ResponsiveDisplayValue;
}

export function display(...args: any[]): any;

export interface MaxWidthProps {
    /**
     * The max-width CSS property sets the maximum width of an element.
     * It prevents the used value of the width property from becoming larger than the value specified by max-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)
     */
    maxWidth?: ResponsiveSpaceValue;
}

export function maxWidth(...args: any[]): any;

export interface MinWidthProps {
    /**
     * The min-width CSS property sets the minimum width of an element.
     * It prevents the used value of the width property from becoming smaller than the value specified for min-width.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width)
     */
    minWidth?: ResponsiveSpaceValue;
}

export function minWidth(...args: any[]): any;

export interface WidthProps {
    /**
     *   The width utility parses a component's `width` prop and converts it into a CSS width declaration.
     *
     *   - Numbers from 0-1 are converted to percentage widths.
     *   - Numbers greater than 1 are converted to pixel values.
     *   - String values are passed as raw CSS values.
     *   - And arrays are converted to responsive width styles.
     */
    width?: ResponsiveSpaceValue;
}

export function width(...args: any[]): any;

export interface MaxHeightProps {
    /**
     * The max-height CSS property sets the maximum height of an element. It prevents the used value of the height
     * property from becoming larger than the value specified for max-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height)
     */
    maxHeight?: ResponsiveSpaceValue;
}

export function maxHeight(...args: any[]): any;

export interface MinHeightProps {
    /**
     * The min-height CSS property sets the minimum height of an element. It prevents the used value of the height
     * property from becoming smaller than the value specified for min-height.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
     */
    minHeight?: ResponsiveSpaceValue;
}

export function minHeight(...args: any[]): any;

export interface HeightProps {
    /**
     * The height CSS property specifies the height of an element. By default, the property defines the height of the
     * content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
     */
    height?: ResponsiveSpaceValue;
}

export function height(...args: any[]): any;

// TODO: Document, I couldn't find any info on these two properties...

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
    /**
     * The ration is height: 0 & paddingBottom
     */
    ratio?: ResponsiveRatioValue;
}

export function ratio(...args: any[]): any;

export type VerticalAlignValue =
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
export type ResponsiveVerticalAlignValue = ResponsiveValue<VerticalAlignValue>;

export interface VerticalAlignProps {
    /**
     * The vertical-align CSS property specifies sets vertical alignment of an inline or table-cell box.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)
     */
    verticalAlign?: ResponsiveVerticalAlignValue;
}

export function verticalAlign(...args: any[]): any;

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
    /**
     * The CSS align-items property sets the align-self value on all direct children as a group. The align-self
     * property sets the alignment of an item within its containing block.
     *
     * In Flexbox it controls the alignment of items on the Cross Axis, in Grid Layout it controls the alignment
     * of items on the Block Axis within their grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
     */
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
    /**
     * The CSS align-content property sets how the browser distributes space between and around content items
     * along the cross-axis of a flexbox container, and the main-axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
     */
    alignContent?: ResponsiveAlignContentValue;
}

export function alignContent(...args: any[]): any;

export type JustifyItemsValue = string;
export type ResponsiveJustifyItemsValue = ResponsiveValue<JustifyItemsValue>;

export interface JustifyItemsProps {
    /**
     * The CSS justify-items property defines the default justify-self for all items of the box, giving them all
     * a default way of justifying each box along the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items)
     */
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
    /**
     * The CSS justify-content property defines how the browser distributes space between and around content items
     * along the main-axis of a flex container, and the inline axis of a grid container.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
     */
    justifyContent?: ResponsiveJustifyContentValue;
}

export function justifyContent(...args: any[]): any;

export type FlexWrapValue = "nowrap" | "wrap" | "wrap-reverse";
export type ResponsiveFlexWrapValue = ResponsiveValue<FlexWrapValue>;

export interface FlexWrapProps {
    /**
     * The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.
     * If wrapping is allowed, it sets the direction that lines are stacked.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
     */
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
    /**
     * The flex-direction CSS property specifies how flex items are placed in the flex container defining the main
     * axis and the direction (normal or reversed).
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
     */
    flexDirection?: ResponsiveFlexDirectionValue;
}

export function flexDirection(...args: any[]): any;

export type FlexValue = number | string;
export type ResponsiveFlexValue = ResponsiveValue<FlexValue>;

export interface FlexProps {
    /**
     * The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in
     * its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
     */
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
    /**
     * The CSS justify-self property set the way a box is justified inside its alignment container along
     * the appropriate axis.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
     */
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
    /**
     * The align-self CSS property aligns flex items of the current flex line overriding the align-items value.
     *
     * If any of the item's cross-axis margin is set to auto, then align-self is ignored. In Grid layout align-self
     * aligns the item inside the grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
     */
    alignSelf?: ResponsiveAlignSelfValue;
}

export function alignSelf(...args: any[]): any;

export type OrderValue = GlobalStyleValues | number;
export type ResponsiveOrderValue = ResponsiveValue<OrderValue>;

export interface OrderProps {
    /**
     * The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container
     * are sorted by ascending order value and then by their source code order.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
     */
    order?: ResponsiveOrderValue;
}

export function order(...args: any[]): any;

/**
 * Grid Layout
 */

export type GridGapValue = number | string;
export type ResponsiveGridGapValue = ResponsiveValue<GridGapValue>;

export interface GridGapProps {
    /**
     * The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap
     * and column-gap.
     *
     * @deprecated use gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/gap)
     */
    gridGap?: ResponsiveGridGapValue;
}

export function gridGap(...args: any[]): any;

export interface GridColumnGapProps {
    /**
     * The column-gap CSS property sets the size of the gap (gutter) between an element's columns.
     *
     * @deprecated use column-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap)
     */
    gridColumnGap?: ResponsiveGridGapValue;
}

export function gridColumnGap(...args: any[]): any;

export interface GridRowGapProps {
    /**
     * The row-gap CSS property sets the size of the gap (gutter) between an element's rows.
     *
     * @deprecated use row-gap
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap)
     */
    gridRowGap?: ResponsiveGridGapValue;
}

export function gridRowGap(...args: any[]): any;

export type GridCellValue = string;
export type ResponsiveGridCellValue = ResponsiveValue<GridCellValue>;

export interface GridColumnProps {
    /**
     * The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying
     * a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic)
     * to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)
     */
    gridColumn?: ResponsiveGridCellValue;
}

export function gridColumn(...args: any[]): any;

export interface GridRowProps {
    /**
     * The grid-row CSS property is a shorthand property for grid-row-start and grid-row-end specifying a grid item’s
     * size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid
     * placement, thereby specifying the inline-start and inline-end edge of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)
     */
    gridRow?: ResponsiveGridCellValue;
}

export function gridRow(...args: any[]): any;

export type GridAutoValue = string;
export type ResponsiveGridAutoValue = ResponsiveValue<GridAutoValue>;

export interface GridAutoFlowProps {
    /**
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly
     * how auto-placed items get flowed into the grid.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow)
     */
    gridAutoFlow?: ResponsiveGridAutoValue;
}

export function gridAutoFlow(...args: any[]): any;

export interface GridAutoColumnsProps {
    /**
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)
     */
    gridAutoColumns?: ResponsiveGridAutoValue;
}

export function gridAutoColumns(...args: any[]): any;

export interface GridAutoRowsProps {
    /**
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)
     */
    gridAutoRows?: ResponsiveGridAutoValue;
}

export function gridAutoRows(...args: any[]): any;

export type GridTemplateValue = string;
export type ResponsiveGridTemplateValue = ResponsiveValue<GridTemplateValue>;

export interface GridTemplatesColumnsProps {
    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
     */
    gridTemplateColumns?: ResponsiveGridTemplateValue;
}

export function gridTemplateColumns(...args: any[]): any;

export interface GridTemplatesRowsProps {
    /**
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/row-template-rows)
     */
    gridTemplateRows?: ResponsiveGridTemplateValue;
}

export function gridTemplateRows(...args: any[]): any;

export interface GridTemplatesAreasProps {
    /**
     * The grid-template-areas CSS property specifies named grid areas.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
     */
    gridTemplateAreas?: ResponsiveGridTemplateValue;
}

export function gridTemplateAreas(...args: any[]): any;

export interface GridAreaProps {
    /**
     * The grid-area CSS property is a shorthand property for grid-row-start, grid-column-start, grid-row-end
     * and grid-column-end, specifying a grid item’s size and location within the grid row by contributing a line,
     * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)
     */
    gridArea?: ResponsiveGridTemplateValue;
}

export function gridArea(...args: any[]): any;

/**
 * Borders
 */

export type BorderValue = string | number;
export type ResponsiveBorderValue = ResponsiveValue<BorderValue>;

export interface BorderProps {
    /**
     * The border CSS property sets an element's border. It's a shorthand for border-width, border-style,
     * and border-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
     */
    border?: ResponsiveBorderValue;
}

export function border(...args: any[]): any;

export interface BorderTopProps {
    /**
     * The border-top CSS property is a shorthand that sets the values of border-top-width, border-top-style,
     * and border-top-color. These properties describe an element's top border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top)
     */
    borderTop?: ResponsiveBorderValue;
}

export function borderTop(...args: any[]): any;

export interface BorderRightProps {
    /**
     * The border-right CSS property is a shorthand that sets border-right-width, border-right-style,
     * and border-right-color. These properties set an element's right border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right)
     */
    borderRight?: ResponsiveBorderValue;
}

export function borderRight(...args: any[]): any;

export interface BorderBottomProps {
    /**
     * The border-bottom CSS property sets an element's bottom border. It's a shorthand for
     * border-bottom-width, border-bottom-style and border-bottom-color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom)
     */
    borderBottom?: ResponsiveBorderValue;
}

export function borderBottom(...args: any[]): any;

export interface BorderLeftProps {
    /**
     * The border-left CSS property is a shorthand that sets the values of border-left-width,
     * border-left-style, and border-left-color. These properties describe an element's left border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left)
     */
    borderLeft?: ResponsiveBorderValue;
}

export function borderLeft(...args: any[]): any;

export interface BordersProps extends BorderTopProps, BorderRightProps, BorderBottomProps, BorderLeftProps {}

export function borders(...args: any[]): any;

export type BorderColorValue = string;
export type ResponsiveBorderColorValue = ResponsiveValue<BorderColorValue>;

export interface BorderColorProps {
    /**
     * The border-color shorthand CSS property sets the color of all sides of an element's border.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color)
     */
    borderColor?: ResponsiveBorderColorValue;
}

export function borderColor(...args: any[]): any;

export type BorderRadiusValue = string | number;
export type ResponsiveBorderRadiusValue = ResponsiveValue<BorderRadiusValue>;

export interface BorderRadiusProps {
    /**
     * The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single
     * radius to make circular corners, or two radii to make elliptical corners.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
     */
    borderRadius?: ResponsiveBorderRadiusValue;
}

export function borderRadius(...args: any[]): any;

export type BoxShadowValue = string | number;
export type ResponsiveBoxShadowValue = ResponsiveValue<BoxShadowValue>;

export interface BoxShadowProps {
    /**
     * The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects
     * separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread
     * radii, and color.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
     */
    boxShadow?: ResponsiveBoxShadowValue;
}

export function boxShadow(...arg: any[]): any;

export type OpacityValue = string | number;
export type ResponsiveOpacityValue = ResponsiveValue<OpacityValue>;

export interface OpacityProps {
    /**
     * The opacity CSS property sets the transparency of an element or the degree to which content
     * behind an element is visible.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
     */
    opacity?: ResponsiveOpacityValue;
}

export function opacity(...arg: any[]): any;

export type OverflowValue = string | number;
export type ResponsiveOverflowValue = ResponsiveValue<OverflowValue>;

export interface OverflowProps {
    /**
     * The overflow CSS property sets what to do when an element's content is too big to fit in its block
     * formatting context. It is a shorthand for overflow-x and overflow-y.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
     */
    overflow?: ResponsiveOverflowValue;
}

export function overflow(...arg: any[]): any;
/**
 * Background
 */

export type BackgroundValue = string;
export type ResponsiveBackgroundValue = ResponsiveValue<BackgroundValue>;

export interface BackgroundProps {
    /**
     * The background shorthand CSS property sets all background style properties at once,
     * such as color, image, origin and size, repeat method, and others.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
     */
    background?: ResponsiveBackgroundValue;
}

export function background(...args: any[]): any;

export type BackgroundImageValue = string;
export type ResponsiveBackgroundImageValue = ResponsiveValue<BackgroundImageValue>;

export interface BackgroundImageProps {
    /**
     * The background-image CSS property sets one or more background images on an element.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
     */
    backgroundImage?: ResponsiveBackgroundImageValue;
}

export function backgroundImage(...args: any[]): any;

export type BackgroundSizeValue = string;
export type ResponsiveBackgroundSizeValue = ResponsiveValue<BackgroundSizeValue>;

export interface BackgroundSizeProps {
    /**
     * The background-size CSS property sets the size of the element's background image. The
     * image can be left to its natural size, stretched, or constrained to fit the available space.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
     */
    backgroundSize?: ResponsiveBackgroundSizeValue;
}

export function backgroundSize(...args: any[]): any;

export type BackgroundPositionValue = string;
export type ResponsiveBackgroundPositionValue = ResponsiveValue<BackgroundPositionValue>;

export interface BackgroundPositionProps {
    /**
     * The background-position CSS property sets the initial position for each background image. The
     * position is relative to the position layer set by background-origin.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
     */
    backgroundPosition?: ResponsiveBackgroundPositionValue;
}

export function backgroundPosition(...args: any[]): any;

export type BackgroundRepeatValue = string;
export type ResponsiveBackgroundRepeatValue = ResponsiveValue<BackgroundRepeatValue>;

export interface BackgroundRepeatProps {
    /**
     * The background-repeat CSS property sets how background images are repeated. A background
     * image can be repeated along the horizontal and vertical axes, or not repeated at all.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat)
     */
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
    /**
     * The position CSS property specifies how an element is positioned in a document.
     * The top, right, bottom, and left properties determine the final location of positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
     */
    position?: ResponsivePositionValue;
}

export function position(...args: any[]): any;

export type ZIndexValue = GlobalStyleValues | "auto" | number;
export type ResponsiveZIndexValue = ResponsiveValue<ZIndexValue>;

export interface ZIndexProps {
    /**
     * The z-index CSS property sets the z-order of a positioned element and its descendants or
     * flex items. Overlapping elements with a larger z-index cover those with a smaller one.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
     */
    zIndex?: ZIndexValue;
}

export function zIndex(...args: any[]): any;

export type TopValue = string | number;
export type ResponsiveTopValue = ResponsiveValue<TopValue>;

export interface TopProps {
    /**
     * The top CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    top?: ResponsiveTopValue;
}

export function top(...args: any[]): any;

export type RightValue = string | number;
export type ResponsiveRightValue = ResponsiveValue<RightValue>;

export interface RightProps {
    /**
     * The right CSS property participates in specifying the horizontal position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/right)
     */
    right?: ResponsiveRightValue;
}

export function right(...args: any[]): any;

export type BottomValue = string | number;
export type ResponsiveBottomValue = ResponsiveValue<BottomValue>;

export interface BottomProps {
    /**
     * The bottom CSS property participates in specifying the vertical position of a
     * positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/top)
     */
    bottom?: ResponsiveBottomValue;
}

export function bottom(...args: any[]): any;

export type LeftValue = string | number;
export type ResponsiveLeftValue = ResponsiveValue<LeftValue>;

export interface LeftProps {
    /**
     * The left CSS property participates in specifying the horizontal position
     * of a positioned element. It has no effect on non-positioned elements.
     *
     * [MDN reference](https://developer.mozilla.org/en-US/docs/Web/CSS/left)
     */
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
