import type { TransitionPreset } from '../types';
/**
 * Standard iOS navigation transition.
 */
export declare const SlideFromRightIOS: TransitionPreset;
/**
 * Standard iOS navigation transition for modals.
 */
export declare const ModalSlideFromBottomIOS: TransitionPreset;
/**
 * Standard iOS modal presentation style (introduced in iOS 13).
 */
export declare const ModalPresentationIOS: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android < 9 (Oreo).
 */
export declare const FadeFromBottomAndroid: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android 9 (Pie).
 */
export declare const RevealFromBottomAndroid: TransitionPreset;
/**
 * Standard Android navigation transition when opening or closing an Activity on Android 10 (Q).
 */
export declare const ScaleFromCenterAndroid: TransitionPreset;
/**
 * Default navigation transition for the current platform.
 */
export declare const DefaultTransition: TransitionPreset;
/**
 * Default modal transition for the current platform.
 */
export declare const ModalTransition: TransitionPreset;
