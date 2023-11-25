import { Animated } from "../Animated/Animated";
import { ImageResizeMode } from "../Image/ImageResizeMode";
import { ColorValue } from "./StyleSheet";

type FlexAlignType =
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "baseline";

type DimensionValue =
    | number
    | "auto"
    | `${number}%`
    | Animated.AnimatedNode
    | null;
type AnimatableNumericValue = number | Animated.AnimatedNode;
type AnimatableStringValue = string | Animated.AnimatedNode;

/**
 * Flex Prop Types
 * @see https://reactnative.dev/docs/flexbox
 * @see https://reactnative.dev/docs/layout-props
 */
export interface FlexStyle {
    alignContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "stretch"
        | "space-between"
        | "space-around"
        | undefined;
    alignItems?: FlexAlignType | undefined;
    alignSelf?: "auto" | FlexAlignType | undefined;
    aspectRatio?: number | string | undefined;
    borderBottomWidth?: number | undefined;
    borderEndWidth?: number | undefined;
    borderLeftWidth?: number | undefined;
    borderRightWidth?: number | undefined;
    borderStartWidth?: number | undefined;
    borderTopWidth?: number | undefined;
    borderWidth?: number | undefined;
    bottom?: DimensionValue | undefined;
    display?: "none" | "flex" | undefined;
    end?: DimensionValue | undefined;
    flex?: number | undefined;
    flexBasis?: DimensionValue | undefined;
    flexDirection?:
        | "row"
        | "column"
        | "row-reverse"
        | "column-reverse"
        | undefined;
    rowGap?: number | undefined;
    gap?: number | undefined;
    columnGap?: number | undefined;
    flexGrow?: number | undefined;
    flexShrink?: number | undefined;
    flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
    height?: DimensionValue | undefined;
    inset?: DimensionValue | undefined;
    insetBlock?: DimensionValue | undefined;
    insetBlockEnd?: DimensionValue | undefined;
    insetBlockStart?: DimensionValue | undefined;
    insetInline?: DimensionValue | undefined;
    insetInlineEnd?: DimensionValue | undefined;
    insetInlineStart?: DimensionValue | undefined;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | undefined;
    left?: DimensionValue | undefined;
    margin?: DimensionValue | undefined;
    marginBlock?: DimensionValue | undefined;
    marginBlockEnd?: DimensionValue | undefined;
    marginBlockStart?: DimensionValue | undefined;
    marginBottom?: DimensionValue | undefined;
    marginEnd?: DimensionValue | undefined;
    marginHorizontal?: DimensionValue | undefined;
    marginInline?: DimensionValue | undefined;
    marginInlineEnd?: DimensionValue | undefined;
    marginInlineStart?: DimensionValue | undefined;
    marginLeft?: DimensionValue | undefined;
    marginRight?: DimensionValue | undefined;
    marginStart?: DimensionValue | undefined;
    marginTop?: DimensionValue | undefined;
    marginVertical?: DimensionValue | undefined;
    maxHeight?: DimensionValue | undefined;
    maxWidth?: DimensionValue | undefined;
    minHeight?: DimensionValue | undefined;
    minWidth?: DimensionValue | undefined;
    overflow?: "visible" | "hidden" | "scroll" | undefined;
    padding?: DimensionValue | undefined;
    paddingBottom?: DimensionValue | undefined;
    paddingBlock?: DimensionValue | undefined;
    paddingBlockEnd?: DimensionValue | undefined;
    paddingBlockStart?: DimensionValue | undefined;
    paddingEnd?: DimensionValue | undefined;
    paddingHorizontal?: DimensionValue | undefined;
    paddingInline?: DimensionValue | undefined;
    paddingInlineEnd?: DimensionValue | undefined;
    paddingInlineStart?: DimensionValue | undefined;
    paddingLeft?: DimensionValue | undefined;
    paddingRight?: DimensionValue | undefined;
    paddingStart?: DimensionValue | undefined;
    paddingTop?: DimensionValue | undefined;
    paddingVertical?: DimensionValue | undefined;
    position?: "absolute" | "relative" | undefined;
    right?: DimensionValue | undefined;
    start?: DimensionValue | undefined;
    top?: DimensionValue | undefined;
    width?: DimensionValue | undefined;
    zIndex?: number | undefined;

    /**
     * @platform ios
     */
    direction?: "inherit" | "ltr" | "rtl" | undefined;
}

export interface ShadowStyleIOS {
    shadowColor?: ColorValue | undefined;
    shadowOffset?: Readonly<{ width: number; height: number }> | undefined;
    shadowOpacity?: AnimatableNumericValue | undefined;
    shadowRadius?: number | undefined;
}

interface PerpectiveTransform {
    perspective: AnimatableNumericValue;
}

interface RotateTransform {
    rotate: AnimatableStringValue;
}

interface RotateXTransform {
    rotateX: AnimatableStringValue;
}

interface RotateYTransform {
    rotateY: AnimatableStringValue;
}

interface RotateZTransform {
    rotateZ: AnimatableStringValue;
}

interface ScaleTransform {
    scale: AnimatableNumericValue;
}

interface ScaleXTransform {
    scaleX: AnimatableNumericValue;
}

interface ScaleYTransform {
    scaleY: AnimatableNumericValue;
}

interface TranslateXTransform {
    translateX: AnimatableNumericValue;
}

interface TranslateYTransform {
    translateY: AnimatableNumericValue;
}

interface SkewXTransform {
    skewX: AnimatableStringValue;
}

interface SkewYTransform {
    skewY: AnimatableStringValue;
}

interface MatrixTransform {
    matrix: AnimatableNumericValue[];
}

export interface TransformsStyle {
    transform?:
        | Array<| PerpectiveTransform
            | RotateTransform
            | RotateXTransform
            | RotateYTransform
            | RotateZTransform
            | ScaleTransform
            | ScaleXTransform
            | ScaleYTransform
            | TranslateXTransform
            | TranslateYTransform
            | SkewXTransform
            | SkewYTransform
            | MatrixTransform>
        | undefined;
    /**
     * @deprecated Use matrix in transform prop instead.
     */
    transformMatrix?: number[] | undefined;
    /**
     * @deprecated Use rotate in transform prop instead.
     */
    rotation?: AnimatableNumericValue | undefined;
    /**
     * @deprecated Use scaleX in transform prop instead.
     */
    scaleX?: AnimatableNumericValue | undefined;
    /**
     * @deprecated Use scaleY in transform prop instead.
     */
    scaleY?: AnimatableNumericValue | undefined;
    /**
     * @deprecated Use translateX in transform prop instead.
     */
    translateX?: AnimatableNumericValue | undefined;
    /**
     * @deprecated Use translateY in transform prop instead.
     */
    translateY?: AnimatableNumericValue | undefined;
}

/**
 * @see https://reactnative.dev/docs/view#style
 */
export interface ViewStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    backfaceVisibility?: "visible" | "hidden" | undefined;
    backgroundColor?: ColorValue | undefined;
    borderBlockColor?: ColorValue | undefined;
    borderBlockEndColor?: ColorValue | undefined;
    borderBlockStartColor?: ColorValue | undefined;
    borderBottomColor?: ColorValue | undefined;
    borderBottomEndRadius?: AnimatableNumericValue | undefined;
    borderBottomLeftRadius?: AnimatableNumericValue | undefined;
    borderBottomRightRadius?: AnimatableNumericValue | undefined;
    borderBottomStartRadius?: AnimatableNumericValue | undefined;
    borderColor?: ColorValue | undefined;
    /**
     * On iOS 13+, it is possible to change the corner curve of borders.
     * @platform ios
     */
    borderCurve?: "circular" | "continuous" | undefined;
    borderEndColor?: ColorValue | undefined;
    borderEndEndRadius?: AnimatableNumericValue | undefined;
    borderEndStartRadius?: AnimatableNumericValue | undefined;
    borderLeftColor?: ColorValue | undefined;
    borderRadius?: AnimatableNumericValue | undefined;
    borderRightColor?: ColorValue | undefined;
    borderStartColor?: ColorValue | undefined;
    borderStartEndRadius?: AnimatableNumericValue | undefined;
    borderStartStartRadius?: AnimatableNumericValue | undefined;
    borderStyle?: "solid" | "dotted" | "dashed" | undefined;
    borderTopColor?: ColorValue | undefined;
    borderTopEndRadius?: AnimatableNumericValue | undefined;
    borderTopLeftRadius?: AnimatableNumericValue | undefined;
    borderTopRightRadius?: AnimatableNumericValue | undefined;
    borderTopStartRadius?: AnimatableNumericValue | undefined;
    opacity?: AnimatableNumericValue | undefined;
    /**
     * Sets the elevation of a view, using Android's underlying
     * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
     * This adds a drop shadow to the item and affects z-order for overlapping views.
     * Only supported on Android 5.0+, has no effect on earlier versions.
     *
     * @platform android
     */
    elevation?: number | undefined;
    /**
     * Controls whether the View can be the target of touch events.
     */
    pointerEvents?: "box-none" | "none" | "box-only" | "auto" | undefined;
}

export type FontVariant =
    | "small-caps"
    | "oldstyle-nums"
    | "lining-nums"
    | "tabular-nums"
    | "proportional-nums";
export interface TextStyleIOS extends ViewStyle {
    fontVariant?: FontVariant[] | undefined;
    textDecorationColor?: ColorValue | undefined;
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
    writingDirection?: "auto" | "ltr" | "rtl" | undefined;
}

export interface TextStyleAndroid extends ViewStyle {
    textAlignVertical?: "auto" | "top" | "bottom" | "center" | undefined;
    verticalAlign?: "auto" | "top" | "bottom" | "middle" | undefined;
    includeFontPadding?: boolean | undefined;
}

// @see https://reactnative.dev/docs/text#style
export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
    color?: ColorValue | undefined;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontStyle?: "normal" | "italic" | undefined;
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported
     * for most fonts. Not all fonts have a variant for each of the numeric
     * values, in that case the closest one is chosen.
     */
    fontWeight?:
        | "normal"
        | "bold"
        | "100"
        | "200"
        | "300"
        | "400"
        | "500"
        | "600"
        | "700"
        | "800"
        | "900"
        | undefined;
    letterSpacing?: number | undefined;
    lineHeight?: number | undefined;
    textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
    textDecorationLine?:
        | "none"
        | "underline"
        | "line-through"
        | "underline line-through"
        | undefined;
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
    textDecorationColor?: ColorValue | undefined;
    textShadowColor?: ColorValue | undefined;
    textShadowOffset?: { width: number; height: number } | undefined;
    textShadowRadius?: number | undefined;
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
    testID?: string | undefined;
}

/**
 * Image style
 * @see https://reactnative.dev/docs/image#style
 */
export interface ImageStyle extends FlexStyle, ShadowStyleIOS, TransformsStyle {
    resizeMode?: ImageResizeMode | undefined;
    backfaceVisibility?: "visible" | "hidden" | undefined;
    borderBottomLeftRadius?: AnimatableNumericValue | undefined;
    borderBottomRightRadius?: AnimatableNumericValue | undefined;
    backgroundColor?: ColorValue | undefined;
    borderColor?: ColorValue | undefined;
    borderRadius?: AnimatableNumericValue | undefined;
    borderTopLeftRadius?: AnimatableNumericValue | undefined;
    borderTopRightRadius?: AnimatableNumericValue | undefined;
    overflow?: "visible" | "hidden" | undefined;
    overlayColor?: ColorValue | undefined;
    tintColor?: ColorValue | undefined;
    opacity?: AnimatableNumericValue | undefined;
    objectFit?: "cover" | "contain" | "fill" | "scale-down" | undefined;
}
