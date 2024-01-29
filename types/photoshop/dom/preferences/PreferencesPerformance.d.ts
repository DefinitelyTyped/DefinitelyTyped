import { PreferencesBase } from "./PreferencesBase";
/**
 * Performance preferences. Options that could possibly affect speed of Photoshop.
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesPerformance extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesPerformance"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesPerformance";
    /**
     * Number of cached levels of image data. Used to improve screen redraw and histogram speed.
     * Choose more Cache Levels for bigger documents with few layers; choose fewer Cache Levels for smaller
     * documents with many layers [1,8].
     *
     * *Requires Photoshop restart for changed value to take an effect.*
     *
     * @minVersion 24.0
     */
    get imageCacheLevels(): number;
    set imageCacheLevels(value: number);
    /**
     * Maximum percentage of available RAM used by Photoshop as a whole number [2,99].
     *
     * *Requires Photoshop restart for changed value to take an effect.*
     *
     * @minVersion 24.0
     */
    get maxRAMuse(): number;
    set maxRAMuse(value: number);
}
/** @ignore */
export declare const preferencesPerformance: PreferencesPerformance;
