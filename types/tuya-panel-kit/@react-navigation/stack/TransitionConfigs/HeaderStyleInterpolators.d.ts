import type { StackHeaderInterpolationProps, StackHeaderInterpolatedStyle } from '../types';
/**
 * Standard UIKit style animation for the header where the title fades into the back button label.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forUIKit({ current, next, layouts, }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle;
/**
 * Simple fade animation for the header elements.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forFade({ current, next, }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle;
/**
 * Simple translate animation to translate the header to left.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forSlideLeft({ current, next, layouts: { screen }, }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle;
/**
 * Simple translate animation to translate the header to right.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forSlideRight({ current, next, layouts: { screen }, }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle;
/**
 * Simple translate animation to translate the header to slide up.
 */
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forSlideUp({ current, next, layouts: { header }, }: StackHeaderInterpolationProps): StackHeaderInterpolatedStyle;
// tslint:disable-next-line strict-export-declare-modifiers
export declare function forNoAnimation(): StackHeaderInterpolatedStyle;
