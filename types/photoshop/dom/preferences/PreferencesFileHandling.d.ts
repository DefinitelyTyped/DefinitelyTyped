import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * File handling preferences. Mostly about file saving options, file compatibility and recent files
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesFileHandling extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesFileHandling"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesFileHandling";
    /**
     * The behavior mode to use when saving files
     *
     * @minVersion 24.0
     */
    get imagePreviews(): Constants.SavePreview;
    set imagePreviews(value: Constants.SavePreview);
    /**
     * If true, the file extension is lowercase
     *
     * @minVersion 24.0
     */
    get useLowerCaseExtension(): boolean;
    set useLowerCaseExtension(enabled: boolean);
    /**
     * If true, asks the user to verify layer preservation options when saving a file in TIFF format.
     *
     * @minVersion 24.0
     */
    get askBeforeSavingLayeredTIFF(): boolean;
    set askBeforeSavingLayeredTIFF(enabled: boolean);
    /**
     * The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files.
     *
     * @minVersion 24.0
     */
    get maximizeCompatibility(): Constants.MaximizeCompatibility;
    set maximizeCompatibility(value: Constants.MaximizeCompatibility);
    /**
     * The maximum number of items in the recent file list [0,100].
     *
     * @minVersion 24.0
     */
    get recentFileListMaximum(): number;
    set recentFileListMaximum(value: number);
}
/** @ignore */
export declare const preferencesFileHandling: PreferencesFileHandling;
