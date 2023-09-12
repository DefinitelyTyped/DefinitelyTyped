import type { StackCardInterpolatedStyle, StackCardInterpolationProps } from "../types";
/**
 * Standard iOS-style slide in from the right.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forHorizontalIOS(
    { current, next, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forVerticalIOS(
    { current, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard iOS-style modal animation in iOS 13.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forModalPresentationIOS(
    { index, current, next, inverted, layouts: { screen }, insets }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style fade in from the bottom for Android Oreo.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forFadeFromBottomAndroid(
    { current, inverted, layouts: { screen }, closing }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Pie.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forRevealFromBottomAndroid(
    { current, next, inverted, layouts: { screen } }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Q.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forScaleFromCenterAndroid(
    { current, next, closing }: StackCardInterpolationProps,
): StackCardInterpolatedStyle;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forNoAnimation(): StackCardInterpolatedStyle;
