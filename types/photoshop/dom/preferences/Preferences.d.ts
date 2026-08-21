import { PreferencesCursors } from "./PreferencesCursors";
import { PreferencesFileHandling } from "./PreferencesFileHandling";
import { PreferencesGeneral } from "./PreferencesGeneral";
import { PreferencesGuidesGridsAndSlices } from "./PreferencesGuidesGridsAndSlices";
import { PreferencesHistory } from "./PreferencesHistory";
import { PreferencesInterface } from "./PreferencesInterface";
import { PreferencesPerformance } from "./PreferencesPerformance";
import { PreferencesTools } from "./PreferencesTools";
import { PreferencesTransparencyAndGamut } from "./PreferencesTransparencyAndGamut";
import { PreferencesType } from "./PreferencesType";
import { PreferencesUnitsAndRulers } from "./PreferencesUnitsAndRulers";
/**
 * Contains Photoshop preferences grouped into several categories similar to preferences in user interface.
 *
 * @minVersion 24.0
 */
export declare class Preferences {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"Preferences"*.
     * @minVersion 24.0
     */
    get typename(): "Preferences";
    /**
     * General preferences.
     *
     * @minVersion 24.0
     */
    get general(): PreferencesGeneral;
    /**
     * User interface preferences.
     *
     * @minVersion 24.0
     */
    get interface(): PreferencesInterface;
    /**
     * Tools preferences.
     *
     * @minVersion 24.0
     */
    get tools(): PreferencesTools;
    /**
     * All preferences related to history logging.
     *
     * @minVersion 24.0
     */
    get history(): PreferencesHistory;
    /**
     * File handling preferences. Mostly about file saving options, file compatibility and recent files.
     *
     * @minVersion 24.0
     */
    get fileHandling(): PreferencesFileHandling;
    /**
     * Options that could affect the speed of Photoshop performance including GPU usage.
     *
     * @minVersion 24.0
     */
    get performance(): PreferencesPerformance;
    /**
     * Options for size and style of tool cursors.
     *
     * @minVersion 24.0
     */
    get cursors(): PreferencesCursors;
    /**
     * Controls for how transparency will be shown and what color to use for the out-of-gamut warning.
     *
     * @minVersion 24.0
     */
    get transparencyAndGamut(): PreferencesTransparencyAndGamut;
    /**
     * Preferences related to ruler units, type units and resolution.
     *
     * @minVersion 24.0
     */
    get unitsAndRulers(): PreferencesUnitsAndRulers;
    /**
     * Presentation options for guides, grid, slices, paths, and other on-canvas controls.
     *
     * @minVersion 24.0
     */
    get guidesGridsAndSlices(): PreferencesGuidesGridsAndSlices;
    /**
     * Preferences related to type.
     *
     * @minVersion 24.0
     */
    get type(): PreferencesType;
}
/** @ignore */
export declare const preferences: Preferences;
