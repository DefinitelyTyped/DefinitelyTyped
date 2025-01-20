import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * Preferences related to the text and mostly text layers
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesType extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesType"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesType";
    /**
     * Change user interface of Character and Paragraph panels and shows additional text options
     *
     * @minVersion 24.0
     */
    get showTextFeatures(): Constants.TypeInterfaceFeatures;
    set showTextFeatures(features: Constants.TypeInterfaceFeatures);
    /**
     * If true, all font names are listed in English
     *
     * @minVersion 24.0
     */
    get showEnglishFontNames(): boolean;
    set showEnglishFontNames(enabled: boolean);
    /**
     * Determines whether to substitute left and right quotation marks automatically while typing in the Type Tool.
     *
     * @minVersion 24.0
     */
    get smartQuotes(): boolean;
    set smartQuotes(enabled: boolean);
}
/** @ignore */
export declare const preferencesType: PreferencesType;
