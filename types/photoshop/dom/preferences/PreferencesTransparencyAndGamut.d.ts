import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * Preferences how transparency will be shown and what color to use for out of gamut warning
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesTransparencyAndGamut extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesTransparencyAndGamut"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesTransparencyAndGamut";
    /**
     * The size of grid squares used to construct the transparency pattern
     *
     * @minVersion 24.0
     */
    get gridSize(): Constants.GridSize;
    set gridSize(value: Constants.GridSize);
    /**
     * The opacity as a float number representing the percentage
     * of the warning color for out-of-gamut colors [1,100].
     *
     * @minVersion 24.0
     */
    get gamutWarningOpacity(): number;
    set gamutWarningOpacity(value: number);
}
/** @ignore */
export declare const preferencesTransparencyAndGamut: PreferencesTransparencyAndGamut;
