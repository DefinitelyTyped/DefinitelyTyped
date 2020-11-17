import type { TransitionSpec } from '../types';
/**
 * Exact values from UINavigationController's animation configuration.
 */
export declare const TransitionIOSSpec: TransitionSpec;
/**
 * Configuration for activity open animation from Android Nougat.
 * See http://aosp.opersys.com/xref/android-7.1.2_r37/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */
export declare const FadeInFromBottomAndroidSpec: TransitionSpec;
/**
 * Configuration for activity close animation from Android Nougat.
 * See http://aosp.opersys.com/xref/android-7.1.2_r37/xref/frameworks/base/core/res/res/anim/activity_close_exit.xml
 */
export declare const FadeOutToBottomAndroidSpec: TransitionSpec;
/**
 * Approximate configuration for activity open animation from Android Pie.
 * See http://aosp.opersys.com/xref/android-9.0.0_r47/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */
export declare const RevealFromBottomAndroidSpec: TransitionSpec;
/**
 * Approximate configuration for activity open animation from Android Q.
 * See http://aosp.opersys.com/xref/android-10.0.0_r2/xref/frameworks/base/core/res/res/anim/activity_open_enter.xml
 */
export declare const ScaleFromCenterAndroidSpec: TransitionSpec;
