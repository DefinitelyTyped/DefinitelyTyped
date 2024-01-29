import { PreferencesBase } from "./PreferencesBase";
/**
 * Tools preferences
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesTools extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesTools"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesTools";
    /**
     * If true, pop-up definitions or descriptions are displayed on mouseover.
     *
     * @minVersion 24.0
     */
    get showToolTips(): boolean;
    set showToolTips(enabled: boolean);
    /**
     * Determines whether to enable the shift key as a modifier to the keyboard shortcut
     * for switching between grouped tools.
     *
     * @minVersion 24.0
     */
    get useShiftKeyForToolSwitch(): boolean;
    set useShiftKeyForToolSwitch(enabled: boolean);
    /**
     * If true, automatically resizes the window when zooming in or out using keyboard shortcuts.
     *
     * @minVersion 24.0
     */
    get keyboardZoomResizesWindows(): boolean;
    set keyboardZoomResizesWindows(enabled: boolean);
}
/** @ignore */
export declare const preferencesTools: PreferencesTools;
