import { PreferencesBase } from "./PreferencesBase";
/**
 * Enhanced Controls preferences.
 *
 * On Windows this hosts the pointer-haptics option. The section is empty on other
 * platforms/configurations.
 *
 * @targetfolder classes/preferences
 * @minVersion 27.11
 */
export declare class PreferencesEnhancedControls extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesEnhancedControls"*.
     *
     * @minVersion 27.11
     */
    get typename(): "PreferencesEnhancedControls";
    /**
     * Whether haptic feedback is enabled for supported pointer devices (Windows only).
     *
     * Enabling this preference is necessary but not sufficient for feedback to be emitted:
     * a haptics-supporting device and the Windows setting for Haptic Signals must both be present.
     *
     * @minVersion 27.11
     */
    get enableHapticFeedback(): boolean;
    set enableHapticFeedback(enabled: boolean);
    /**
     * The Actions events for which haptic feedback is currently active (read-only), e.g.
     * `"progressBarVisibility"`, `"sliderLimit"`. The list is empty when haptics is disabled
     * by preference, on platforms/configurations without haptics support, or when the haptics
     * controller is not active.
     *
     * @minVersion 27.11
     */
    get activeHapticEvents(): string[];
}
/** @ignore */
export declare const preferencesEnhancedControls: PreferencesEnhancedControls;
