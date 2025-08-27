import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * Preferences related to ruler units, type units and resolution
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesUnitsAndRulers extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesUnitsAndRulers"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesUnitsAndRulers";
    /**
     * The unit that will be used for the displayed Rulers and consequently considered primary in Photoshop.
     *
     * @minVersion 24.0
     */
    get rulerUnits(): Constants.RulerUnits;
    set rulerUnits(value: Constants.RulerUnits);
    /**
     * The unit type-size that the numeric inputs are assumed to represent.
     *
     * @minVersion 24.0
     */
    get typeUnits(): Constants.TypeUnits;
    set typeUnits(value: Constants.TypeUnits);
    /**
     * The point/pica size
     *
     * @minVersion 24.0
     */
    get pointSize(): Constants.PointType;
    set pointSize(value: Constants.PointType);
}
/** @ignore */
export declare const preferencesUnitsAndRulers: PreferencesUnitsAndRulers;
