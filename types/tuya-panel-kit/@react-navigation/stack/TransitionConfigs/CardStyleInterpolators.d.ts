import type { StackCardInterpolatedStyle, StackCardInterpolationProps } from "../types";
/**
 * Standard iOS-style slide in from the right.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forHorizontalIOS(
    { current, next, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forVerticalIOS(
    { current, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard iOS-style modal animation in iOS 13.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forModalPresentationIOS(
    { index, current, next, inverted, layouts: { screen }, insets }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style fade in from the bottom for Android Oreo.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forFadeFromBottomAndroid(
    { current, inverted, layouts: { screen }, closing }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Pie.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forRevealFromBottomAndroid(
    { current, next, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Q.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forScaleFromCenterAndroid(
    { current, next, closing }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare function forNoAnimation(): StackCardInterpolatedStyle;
