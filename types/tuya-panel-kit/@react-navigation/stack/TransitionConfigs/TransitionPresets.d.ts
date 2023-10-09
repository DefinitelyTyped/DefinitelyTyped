import type { TransitionPreset } from "../types";
/**
 * Standard iOS navigation transition.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const SlideFromRightIOS: TransitionPreset;
/**
 * Standard iOS navigation transition for modals.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const ModalSlideFromBottomIOS: TransitionPreset;
/**
 * Standard iOS modal presentation style (introduced in iOS 13).
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const ModalPresentationIOS: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android < 9 (Oreo).
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const FadeFromBottomAndroid: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android 9 (Pie).
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const RevealFromBottomAndroid: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android 10 (Q).
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const ScaleFromCenterAndroid: TransitionPreset;
/**
 * Default navigation transition for the current platform.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const DefaultTransition: TransitionPreset;
/**
 * Default modal transition for the current platform.
 */
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const ModalTransition: TransitionPreset;
