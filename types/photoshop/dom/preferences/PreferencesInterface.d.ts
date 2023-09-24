import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * User interface preferences
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesInterface extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesInterface"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesInterface";
    /**
     * If true, dynamic color sliders appear in the Color palette.
     *
     * @minVersion 24.0
     */
    get dynamicColorSliders(): boolean;
    set dynamicColorSliders(enabled: boolean);
    /**
     * Size of the small font used in panels and dialogs
     *
     * *Requires Photoshop restart for changed value to take an effect.*
     *
     * @minVersion 24.0
     */
    get textFontSize(): Constants.FontSize;
    set textFontSize(value: Constants.FontSize);
    /**
     * If true, the Channels palette will display the component channels in their respective colors.
     *
     * @minVersion 24.0
     */
    get colorChannelsInColor(): boolean;
    set colorChannelsInColor(enabled: boolean);
}
/** @ignore */
export declare const preferencesInterface: PreferencesInterface;
