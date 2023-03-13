import { PreferencesBase } from "./PreferencesBase";
import * as Constants from "../Constants";
/**
 * General preferences
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesGeneral extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesGeneral"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesGeneral";
    /**
     * Changes color picker within the Photoshop. It uses object where `type` property is color picker type to use.
     * If color picker type is `ColorPicker.PLUGIN` then also `pluginID` property must be provided
     * and must contain internal ID of the plugin as a string.
     *
     * @minVersion 24.0
     */
    set colorPicker(colorPickerArg: ColorPickerArg);
    get colorPicker(): ColorPickerArg;
    /**
     * Method used when scaling or resizing images.
     *
     * @minVersion 24.0
     */
    get imageInterpolation(): Constants.InterpolationMethod;
    set imageInterpolation(method: Constants.InterpolationMethod);
    /**
     * If true, retains Adobe Photoshop contents on the clipboard after you exit the application.
     *
     * @minVersion 24.0
     */
    get exportClipboard(): boolean;
    set exportClipboard(enabled: boolean);
    /**
     * Determines whether to automatically re-read open file-based documents updated outside Photoshop.
     * Cloud documents are not affected by this setting.'
     *
     * @minVersion 24.0
     */
    get autoUpdateOpenDocuments(): boolean;
    set autoUpdateOpenDocuments(enabled: boolean);
    /**
     * If true, alerts the user when a command completes
     *
     * @minVersion 24.0
     */
    get beepWhenDone(): boolean;
    set beepWhenDone(enabled: boolean);
}
/** @ignore */
export declare const preferencesGeneral: PreferencesGeneral;
export interface ColorPickerArg {
    type: "photoshopPicker" | "systemPicker" | "pluginPicker";
    pluginID?: string;
}
