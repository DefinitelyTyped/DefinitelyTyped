import type { StackCardInterpolationProps, StackCardInterpolatedStyle } from '../types';
/**
 * Standard iOS-style slide in from the right.
 */
export declare function forHorizontalIOS({ current, next, inverted, layouts: { screen }, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
/**
 * Standard iOS-style slide in from the bottom (used for modals).
 */
export declare function forVerticalIOS({ current, inverted, layouts: { screen }, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
/**
 * Standard iOS-style modal animation in iOS 13.
 */
export declare function forModalPresentationIOS({ index, current, next, inverted, layouts: { screen }, insets, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
/**
 * Standard Android-style fade in from the bottom for Android Oreo.
 */
export declare function forFadeFromBottomAndroid({ current, inverted, layouts: { screen }, closing, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Pie.
 */
export declare function forRevealFromBottomAndroid({ current, next, inverted, layouts: { screen }, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
/**
 * Standard Android-style reveal from the bottom for Android Q.
 */
export declare function forScaleFromCenterAndroid({ current, next, closing, }: StackCardInterpolationProps): StackCardInterpolatedStyle;
export declare function forNoAnimation(): StackCardInterpolatedStyle;
