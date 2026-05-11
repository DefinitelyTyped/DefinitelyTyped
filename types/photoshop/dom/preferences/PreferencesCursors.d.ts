import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * Options for size and style of tool cursors.
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesCursors extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesCursors"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesCursors";
    /**
     * The style of cursor in use for painting tools.
     *
     * @minVersion 24.0
     */
    get paintingCursors(): Constants.PaintingCursors;
    set paintingCursors(value: Constants.PaintingCursors);
    /**
     * The type of pointer to use
     *
     * @minVersion 24.0
     */
    get otherCursors(): Constants.OtherCursors;
    set otherCursors(value: Constants.OtherCursors);
}
/** @ignore */
export declare const preferencesCursors: PreferencesCursors;
