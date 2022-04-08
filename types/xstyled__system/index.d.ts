// Type definitions for @xstyled/system 1.19
// Project: https://github.com/smooth-code/xstyled
// Definitions by: Steve Johns <https://github.com/stevejay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import * as React from 'react';
import * as CSS from 'csstype';

export interface StyleFunc {
    (...args: any[]): any;
    meta: {
        props: ReadonlyArray<string>;
        getStyle: Readonly<any>;
        generators?: ReadonlyArray<any>;
    };
}

export type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };

export type StyledSystemLength = string | number;

export type ResponsiveValue<T> = T | T[] | { [key: string]: T };

export type AliasKey = string;

// ----- GETTERS -----

export type ThemeGetterValue = string | number;

export interface ThemeGetterFunc {
    (props: any): any;
}

export function getColor(value: ThemeGetterValue): ThemeGetterFunc;
export function getPx(value: ThemeGetterValue): ThemeGetterFunc;
export function getPercent(value: ThemeGetterValue): ThemeGetterFunc;
export function getRadius(value: ThemeGetterValue): ThemeGetterFunc;
export function getTransition(value: ThemeGetterValue): ThemeGetterFunc;
export function getSpace(value: ThemeGetterValue): ThemeGetterFunc;
export function getSize(value: ThemeGetterValue): ThemeGetterFunc;
export function getFont(value: ThemeGetterValue): ThemeGetterFunc;
export function getLineHeight(value: ThemeGetterValue): ThemeGetterFunc;
export function getFontWeight(value: ThemeGetterValue): ThemeGetterFunc;
export function getLetterSpacing(value: ThemeGetterValue): ThemeGetterFunc;
export function getFontSize(value: ThemeGetterValue): ThemeGetterFunc;
export function getZIndex(value: ThemeGetterValue): ThemeGetterFunc;
export function getBorder(value: ThemeGetterValue): ThemeGetterFunc;
export function getBorderWidth(value: ThemeGetterValue): ThemeGetterFunc;
export function getBorderStyle(value: ThemeGetterValue): ThemeGetterFunc;
export function getShadow(value: ThemeGetterValue): ThemeGetterFunc;

// ----- BASICS -----

export const color: StyleFunc;

export interface ColorProps {
    // Clash with HTMLAttributes interface declared in React module
    // that includes a non-standard HTML attribute `color?: string`.
    // Type here should be `ResponsiveValue<CSS.Property.Color>`.
    readonly color?: any;
}

export const opacity: StyleFunc;
export const overflow: StyleFunc;
export const transition: StyleFunc;
export const basics: StyleFunc;

export interface OpacityProps {
    readonly opacity?: ResponsiveValue<CSS.Property.Opacity>;
}

export interface OverflowProps {
    readonly overflow?: ResponsiveValue<CSS.Property.Overflow>;
}

export interface TransitionProps<TLength = StyledSystemLength> {
    readonly transition?: ResponsiveValue<CSS.Property.Transition<TLength>>;
}

export interface BasicsProps extends OpacityProps, OverflowProps, TransitionProps {}

// ----- SPACE -----

export const margin: StyleFunc;
export const marginTop: StyleFunc;
export const marginRight: StyleFunc;
export const marginBottom: StyleFunc;
export const marginLeft: StyleFunc;
export const mx: StyleFunc;
export const my: StyleFunc;
export const padding: StyleFunc;
export const paddingTop: StyleFunc;
export const paddingRight: StyleFunc;
export const paddingBottom: StyleFunc;
export const paddingLeft: StyleFunc;
export const px: StyleFunc;
export const py: StyleFunc;
export const space: StyleFunc;

export interface MarginProps<TLength = StyledSystemLength> {
    readonly m?: ResponsiveValue<CSS.Property.MarginTop<TLength>>;
    readonly margin?: ResponsiveValue<CSS.Property.MarginTop<TLength>>;
}

export interface MarginTopProps<TLength = StyledSystemLength> {
    readonly mt?: ResponsiveValue<CSS.Property.MarginTop<TLength>>;
    readonly marginTop?: ResponsiveValue<CSS.Property.MarginTop<TLength>>;
}

export interface MarginRightProps<TLength = StyledSystemLength> {
    readonly mr?: ResponsiveValue<CSS.Property.MarginRight<TLength>>;
    readonly marginRight?: ResponsiveValue<CSS.Property.MarginRight<TLength>>;
}

export interface MarginBottomProps<TLength = StyledSystemLength> {
    readonly mb?: ResponsiveValue<CSS.Property.MarginBottom<TLength>>;
    readonly marginBottom?: ResponsiveValue<CSS.Property.MarginBottom<TLength>>;
}

export interface MarginLeftProps<TLength = StyledSystemLength> {
    readonly ml?: ResponsiveValue<CSS.Property.MarginLeft<TLength>>;
    readonly marginLeft?: ResponsiveValue<CSS.Property.MarginLeft<TLength>>;
}

export interface MarginXProps<TLength = StyledSystemLength> {
    readonly mx?: ResponsiveValue<CSS.Property.MarginLeft<TLength>>;
}

export interface MarginYProps<TLength = StyledSystemLength> {
    readonly my?: ResponsiveValue<CSS.Property.MarginTop<TLength>>;
}

export interface PaddingProps<TLength = StyledSystemLength> {
    readonly p?: ResponsiveValue<CSS.Property.Padding<TLength>>;
    readonly padding?: ResponsiveValue<CSS.Property.Padding<TLength>>;
}

export interface PaddingTopProps<TLength = StyledSystemLength> {
    readonly pt?: ResponsiveValue<CSS.Property.PaddingTop<TLength>>;
    readonly paddingTop?: ResponsiveValue<CSS.Property.PaddingTop<TLength>>;
}

export interface PaddingRightProps<TLength = StyledSystemLength> {
    readonly pr?: ResponsiveValue<CSS.Property.PaddingRight<TLength>>;
    readonly paddingRight?: ResponsiveValue<CSS.Property.PaddingRight<TLength>>;
}

export interface PaddingBottomProps<TLength = StyledSystemLength> {
    readonly pb?: ResponsiveValue<CSS.Property.PaddingBottom<TLength>>;
    readonly paddingBottom?: ResponsiveValue<CSS.Property.PaddingBottom<TLength>>;
}

export interface PaddingLeftProps<TLength = StyledSystemLength> {
    readonly pl?: ResponsiveValue<CSS.Property.PaddingLeft<TLength>>;
    readonly paddingLeft?: ResponsiveValue<CSS.Property.PaddingLeft<TLength>>;
}

export interface PaddingXProps<TLength = StyledSystemLength> {
    readonly px?: ResponsiveValue<CSS.Property.PaddingLeft<TLength>>;
}

export interface PaddingYProps<TLength = StyledSystemLength> {
    readonly py?: ResponsiveValue<CSS.Property.PaddingTop<TLength>>;
}

export interface SpaceProps
    extends MarginProps,
        MarginTopProps,
        MarginRightProps,
        MarginBottomProps,
        MarginLeftProps,
        MarginXProps,
        MarginYProps,
        PaddingProps,
        PaddingTopProps,
        PaddingRightProps,
        PaddingBottomProps,
        PaddingLeftProps,
        PaddingXProps,
        PaddingYProps {}

// ----- LAYOUT -----

export const display: StyleFunc;
export const width: StyleFunc;
export const height: StyleFunc;
export const maxWidth: StyleFunc;
export const maxHeight: StyleFunc;
export const minWidth: StyleFunc;
export const minHeight: StyleFunc;
export const size: StyleFunc;
export const verticalAlign: StyleFunc;
export const layout: StyleFunc;

export interface DisplayProps {
    readonly display?: ResponsiveValue<CSS.Property.Display>;
}

export interface WidthProps<TLength = StyledSystemLength> {
    readonly width?: ResponsiveValue<CSS.Property.Width<TLength>>;
}

export interface HeightProps<TLength = StyledSystemLength> {
    readonly height?: ResponsiveValue<CSS.Property.Height<TLength>>;
}

export interface MaxWidthProps<TLength = StyledSystemLength> {
    readonly maxWidth?: ResponsiveValue<CSS.Property.MaxWidth<TLength>>;
}

export interface MaxHeightProps<TLength = StyledSystemLength> {
    readonly maxHeight?: ResponsiveValue<CSS.Property.MaxHeight<TLength>>;
}

export interface MinWidthProps<TLength = StyledSystemLength> {
    readonly minWidth?: ResponsiveValue<CSS.Property.MinWidth<TLength>>;
}

export interface MinHeightProps<TLength = StyledSystemLength> {
    readonly minHeight?: ResponsiveValue<CSS.Property.MinHeight<TLength>>;
}

export interface SizeProps<TLength = StyledSystemLength> {
    readonly size?: ResponsiveValue<CSS.Property.Height<TLength>>;
}

export interface VerticalAlignProps<TLength = StyledSystemLength> {
    readonly verticalAlign?: ResponsiveValue<CSS.Property.VerticalAlign<TLength>>;
}

export interface LayoutProps
    extends DisplayProps,
        WidthProps,
        HeightProps,
        MaxWidthProps,
        MaxHeightProps,
        MinWidthProps,
        MinHeightProps,
        SizeProps,
        VerticalAlignProps {}

// ----- XGRID -----

export const col: StyleFunc;
export const row: StyleFunc;
export const xgrids: StyleFunc;

export interface ColProps {
    readonly col?: ResponsiveValue<string | number | boolean>;
}

export interface RowProps {
    readonly row?: ResponsiveValue<string | number | boolean>;
}

export interface XGridProps extends ColProps, RowProps {}

// ----- TYPOGRAPHY -----

export const fontFamily: StyleFunc;
export const fontSize: StyleFunc;
export const lineHeight: StyleFunc;
export const fontWeight: StyleFunc;
export const fontStyle: StyleFunc;
export const textAlign: StyleFunc;
export const letterSpacing: StyleFunc;
export const textTransform: StyleFunc;
export const typography: StyleFunc;

export interface FontFamilyProps {
    readonly fontFamily?: ResponsiveValue<CSS.Property.FontFamily | number>;
}

export interface FontSizeProps<TLength = StyledSystemLength> {
    readonly fontSize?: ResponsiveValue<CSS.Property.FontSize<TLength>>;
}

export interface LineHeightProps<TLength = StyledSystemLength> {
    readonly lineHeight?: ResponsiveValue<CSS.Property.LineHeight<TLength>>;
}

export interface FontWeightProps {
    readonly fontWeight?: ResponsiveValue<CSS.Property.FontWeight | AliasKey>;
}

export interface FontStyleProps {
    readonly fontStyle?: ResponsiveValue<CSS.Property.FontStyle>;
}

export interface TextAlignProps {
    readonly textAlign?: ResponsiveValue<CSS.Property.TextAlign>;
}

export interface LetterSpacingProps<TLength = StyledSystemLength> {
    readonly letterSpacing?: ResponsiveValue<CSS.Property.LetterSpacing<TLength>>;
}

export interface TextTransformProps {
    readonly textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
}

export interface TypographyProps
    extends FontFamilyProps,
        FontSizeProps,
        LineHeightProps,
        FontWeightProps,
        FontStyleProps,
        TextAlignProps,
        LetterSpacingProps,
        ColorProps,
        TextTransformProps {}

// ----- FLEXBOXES -----

export const alignItems: StyleFunc;
export const alignContent: StyleFunc;
export const justifyContent: StyleFunc;
export const justifyItems: StyleFunc;
export const flexWrap: StyleFunc;
export const flexGrow: StyleFunc;
export const flexShrink: StyleFunc;
export const flexBasis: StyleFunc;
export const flexDirection: StyleFunc;
export const flex: StyleFunc;
export const justifySelf: StyleFunc;
export const alignSelf: StyleFunc;
export const order: StyleFunc;
export const flexboxes: StyleFunc;

export interface AlignItemsProps {
    readonly alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
}

export interface AlignContentProps {
    readonly alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
}

export interface JustifyContentProps {
    readonly justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
}

export interface JustifyItemsProps {
    readonly justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>;
}

export interface FlexWrapProps {
    readonly flexWrap?: ResponsiveValue<CSS.Property.FlexWrap>;
}

export interface FlexGrowProps {
    readonly flexGrow?: ResponsiveValue<CSS.Property.FlexGrow>;
}

export interface FlexShrinkProps {
    readonly flexShrink?: ResponsiveValue<CSS.Property.FlexShrink>;
}

export interface FlexBasisProps<TLength = StyledSystemLength> {
    readonly flexBasis?: ResponsiveValue<CSS.Property.FlexBasis<TLength>>;
}

export interface FlexDirectionProps {
    readonly flexDirection?: ResponsiveValue<CSS.Property.FlexDirection>;
}

export interface FlexProps<TLength = StyledSystemLength> {
    readonly flex?: ResponsiveValue<CSS.Property.Flex<TLength>>;
}

export interface JustifySelfProps {
    readonly justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>;
}

export interface AlignSelfProps {
    readonly alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>;
}

export interface OrderProps {
    readonly order?: ResponsiveValue<CSS.Property.Order>;
}

export interface FlexboxesProps
    extends DisplayProps,
        AlignItemsProps,
        AlignContentProps,
        JustifyContentProps,
        JustifyItemsProps,
        FlexWrapProps,
        FlexGrowProps,
        FlexShrinkProps,
        FlexBasisProps,
        FlexDirectionProps,
        FlexProps,
        JustifySelfProps,
        AlignSelfProps,
        OrderProps {}

// ----- GRIDS -----

export const gridGap: StyleFunc;
export const gridColumnGap: StyleFunc;
export const gridRowGap: StyleFunc;
export const gridColumn: StyleFunc;
export const gridRow: StyleFunc;
export const gridAutoFlow: StyleFunc;
export const gridAutoColumns: StyleFunc;
export const gridAutoRows: StyleFunc;
export const gridTemplateColumns: StyleFunc;
export const gridTemplateRows: StyleFunc;
export const gridTemplateAreas: StyleFunc;
export const gridArea: StyleFunc;
export const grids: StyleFunc;

export interface GridGapProps<TLength = StyledSystemLength> {
    readonly gridGap?: ResponsiveValue<CSS.Property.GridGap<TLength>>;
}

export interface GridColumnGapProps<TLength = StyledSystemLength> {
    readonly gridColumnGap?: ResponsiveValue<CSS.Property.GridColumnGap<TLength>>;
}

export interface GridRowGapProps<TLength = StyledSystemLength> {
    readonly gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap<TLength>>;
}

export interface GridColumnProps {
    readonly gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
}

export interface GridRowProps {
    readonly gridRow?: ResponsiveValue<CSS.Property.GridRow>;
}

export interface GridAutoFlowProps {
    readonly gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>;
}

export interface GridAutoColumnsProps<TLength = StyledSystemLength> {
    readonly gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns<TLength>>;
}

export interface GridAutoRowsProps<TLength = StyledSystemLength> {
    readonly gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows<TLength>>;
}

export interface GridTemplateColumnsProps<TLength = StyledSystemLength> {
    readonly gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns<TLength>>;
}

export interface GridTemplateRowsProps<TLength = StyledSystemLength> {
    readonly gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows<TLength>>;
}

export interface GridTemplateAreasProps {
    readonly gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>;
}

export interface GridAreaProps {
    // Number allowed here but is converted into px value, which is invalid.
    // readonly gridArea?: ResponsiveValue<CSS.Property.GridArea>;
    readonly gridArea?: ResponsiveValue<string>;
}

export interface GridsProps
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

// ----- BACKGROUNDS -----

export const background: StyleFunc;
export const backgroundColor: StyleFunc;
export const backgroundImage: StyleFunc;
export const backgroundSize: StyleFunc;
export const backgroundPosition: StyleFunc;
export const backgroundRepeat: StyleFunc;
export const backgrounds: StyleFunc;

export interface BackgroundProps {
    readonly background?: ResponsiveValue<CSS.Property.Background<string>>;
}

export interface BackgroundColorProps<TLength = StyledSystemLength> {
    readonly bg?: ResponsiveValue<CSS.Property.Background<TLength>>;
    readonly backgroundColor?: ResponsiveValue<CSS.Property.Background<TLength>>;
}

export interface BackgroundImageProps {
    readonly backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage>;
}

export interface BackgroundSizeProps<TLength = StyledSystemLength> {
    readonly backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize<TLength>>;
}

export interface BackgroundPositionProps<TLength = StyledSystemLength> {
    readonly backgroundPosition?: ResponsiveValue<CSS.Property.BackgroundPosition<TLength>>;
}

export interface BackgroundRepeatProps {
    readonly backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>;
}

export interface BackgroundsProps
    extends BackgroundProps,
        BackgroundColorProps,
        BackgroundImageProps,
        BackgroundSizeProps,
        BackgroundPositionProps,
        BackgroundRepeatProps {}

// ----- POSITIONING -----

export const position: StyleFunc;
export const zIndex: StyleFunc;
export const top: StyleFunc;
export const right: StyleFunc;
export const bottom: StyleFunc;
export const left: StyleFunc;
export const positioning: StyleFunc;

export interface PositionProps {
    readonly position?: ResponsiveValue<CSS.Property.Position>;
}

export interface ZIndexProps {
    readonly zIndex?: ResponsiveValue<CSS.Property.ZIndex | AliasKey>;
}

export interface TopProps<TLength = StyledSystemLength> {
    readonly top?: ResponsiveValue<CSS.Property.Top<TLength>>;
}

export interface RightProps<TLength = StyledSystemLength> {
    readonly right?: ResponsiveValue<CSS.Property.Right<TLength>>;
}

export interface BottomProps<TLength = StyledSystemLength> {
    readonly bottom?: ResponsiveValue<CSS.Property.Bottom<TLength>>;
}

export interface LeftProps<TLength = StyledSystemLength> {
    readonly left?: ResponsiveValue<CSS.Property.Left<TLength>>;
}

export interface PositioningProps extends PositionProps, ZIndexProps, TopProps, RightProps, BottomProps, LeftProps {}

// ----- BORDERS -----

export const border: StyleFunc;
export const borderColor: StyleFunc;
export const borderTop: StyleFunc;
export const borderTopColor: StyleFunc;
export const borderRight: StyleFunc;
export const borderRightColor: StyleFunc;
export const borderBottom: StyleFunc;
export const borderBottomColor: StyleFunc;
export const borderLeft: StyleFunc;
export const borderLeftColor: StyleFunc;
export const borderWidth: StyleFunc;
export const borderStyle: StyleFunc;
export const borderRadius: StyleFunc;
export const borders: StyleFunc;

export interface BorderProps<TLength = StyledSystemLength> {
    readonly border?: ResponsiveValue<CSS.Property.Border<TLength>>;
}

export interface BorderColorProps {
    readonly borderColor?: ResponsiveValue<CSS.Property.BorderColor>;
}

export interface BorderTopProps<TLength = StyledSystemLength> {
    readonly borderTop?: ResponsiveValue<CSS.Property.BorderTop<TLength>>;
}

export interface BorderTopColorProps {
    readonly borderTopColor?: ResponsiveValue<CSS.Property.BorderColor>;
}

export interface BorderRightProps<TLength = StyledSystemLength> {
    readonly borderRight?: ResponsiveValue<CSS.Property.BorderRight<TLength>>;
}

export interface BorderRightColorProps {
    readonly borderRightColor?: ResponsiveValue<CSS.Property.BorderColor>;
}

export interface BorderBottomProps<TLength = StyledSystemLength> {
    readonly borderBottom?: ResponsiveValue<CSS.Property.BorderBottom<TLength>>;
}

export interface BorderBottomColorProps {
    readonly borderBottomColor?: ResponsiveValue<CSS.Property.BorderColor>;
}

export interface BorderLeftProps<TLength = StyledSystemLength> {
    readonly borderLeft?: ResponsiveValue<CSS.Property.BorderLeft<TLength>>;
}

export interface BorderLeftColorProps {
    readonly borderLeftColor?: ResponsiveValue<CSS.Property.BorderColor>;
}

export interface BorderWidthProps<TLength = StyledSystemLength> {
    readonly borderWidth?: ResponsiveValue<CSS.Property.BorderWidth<TLength>>;
}

export interface BorderStyleProps {
    readonly borderStyle?: ResponsiveValue<CSS.Property.BorderStyle | number>;
}

export interface BorderRadiusProps<TLength = StyledSystemLength> {
    readonly borderRadius?: ResponsiveValue<CSS.Property.BorderRadius<TLength>>;
}

export interface BordersProps
    extends BorderProps,
        BorderTopProps,
        BorderTopColorProps,
        BorderRightProps,
        BorderRightColorProps,
        BorderBottomProps,
        BorderBottomColorProps,
        BorderLeftProps,
        BorderLeftColorProps,
        BorderColorProps,
        BorderWidthProps,
        BorderStyleProps,
        BorderRadiusProps {}

// ----- SHADOWS -----

export const boxShadow: StyleFunc;
export const textShadow: StyleFunc;
export const shadows: StyleFunc;

export interface BoxShadowProps {
    readonly boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | number>;
}

export interface TextShadowProps {
    readonly textShadow?: ResponsiveValue<CSS.Property.TextShadow | number>;
}

export interface ShadowsProps extends BoxShadowProps, TextShadowProps {}

// ----- SYSTEM -----

export const system: StyleFunc;

export interface SystemProps
    extends BackgroundsProps,
        BasicsProps,
        BordersProps,
        FlexboxesProps,
        GridsProps,
        LayoutProps,
        PositioningProps,
        ShadowsProps,
        SpaceProps,
        TypographyProps,
        XGridProps {}

// ----- COMPOSE -----

export function compose(...parsers: StyleFunc[]): StyleFunc;

// ----- CREATE_SYSTEM_COMPONENT -----

export function createSystemComponent<T = any>(
    react: typeof React,
    defaultComponent?: string | React.ReactNode,
    system?: StyleFunc,
): // tslint:disable-next-line no-unnecessary-generics
React.ComponentType<T>;

// ----- TH -----

export function th(path: string): ThemeGetterFunc;

export namespace th {
    function color(value: ThemeGetterValue): ThemeGetterFunc;
    function px(value: ThemeGetterValue): ThemeGetterFunc;
    function percent(value: ThemeGetterValue): ThemeGetterFunc;
    function radius(value: ThemeGetterValue): ThemeGetterFunc;
    function transition(value: ThemeGetterValue): ThemeGetterFunc;
    function space(value: ThemeGetterValue): ThemeGetterFunc;
    function size(value: ThemeGetterValue): ThemeGetterFunc;
    function font(value: ThemeGetterValue): ThemeGetterFunc;
    function fontSize(value: ThemeGetterValue): ThemeGetterFunc;
    function lineHeight(value: ThemeGetterValue): ThemeGetterFunc;
    function fontWeight(value: ThemeGetterValue): ThemeGetterFunc;
    function letterSpacing(value: ThemeGetterValue): ThemeGetterFunc;
    function zIndex(value: ThemeGetterValue): ThemeGetterFunc;
    function border(value: ThemeGetterValue): ThemeGetterFunc;
    function borderWidth(value: ThemeGetterValue): ThemeGetterFunc;
    function borderStyle(value: ThemeGetterValue): ThemeGetterFunc;
    function shadow(value: ThemeGetterValue): ThemeGetterFunc;
}

// ----- STYLE -----

export function style(config: {
    prop: string | ReadonlyArray<string>;
    cssProperty: string | ReadonlyArray<string>;
    key?: any;
    transform?: any;
    themeGet?: any;
}): StyleFunc;

// ----- VARIANT -----

export interface VariantArgs {
    key?: string;
    default?: string | number;
    prop?: string;
    variants?: object;
}

export function variant({ key, default: defaultValue, prop, variants }: VariantArgs): (props: any) => any;

// ----- RESPONSIVE UTILITIES -----

export interface BreakPointsRules {
    [key: string]: any;
}

export function breakpoints(values: BreakPointsRules): (props: any) => any;
export function up(key: string, rules: any): (props: any) => any;
export function down(key: string, rules: any): (props: any) => any;
export function between(lower: string, upper: string, rules: any): (props: any) => any;

// ----- RPX TRANSFORMERS -----

export interface RPXTransformers {
    px: (value: string | number) => string | number;
    border: (n: string | number) => string;
}

export const rpxTransformers: RPXTransformers;
