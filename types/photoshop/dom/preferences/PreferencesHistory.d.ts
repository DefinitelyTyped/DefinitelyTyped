import * as Constants from "../Constants";
import { PreferencesBase } from "./PreferencesBase";
/**
 * All preferences related to history logging
 *
 * @targetfolder classes/preferences
 * @minVersion 24.0
 */
export declare class PreferencesHistory extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesHistory"*.
     *
     * @minVersion 24.0
     */
    get typename(): "PreferencesHistory";
    /**
     * If true, automatically makes the first snapshot when a new document is created
     *
     * @minVersion 24.0
     */
    get createFirstSnapshot(): boolean;
    set createFirstSnapshot(enabled: boolean);
    /**
     * If true, allows non-linear history
     *
     * @minVersion 24.0
     */
    get nonLinearHistory(): boolean;
    set nonLinearHistory(enabled: boolean);
    /**
     * The whole number of history states to preserve [1,1000].
     *
     * @minVersion 24.0
     */
    get numberOfHistoryStates(): number;
    set numberOfHistoryStates(value: number);
    /**
     * Turn on and off the history logging
     *
     * @minVersion 24.0
     */
    get useHistoryLog(): boolean;
    set useHistoryLog(enabled: boolean);
    /**
     * Options for edit log items.
     *
     * Sets `history.useHistoryLog = true` as side effect.
     *
     * @minVersion 24.0
     */
    get editLogItems(): Constants.EditLogItemsType;
    set editLogItems(value: Constants.EditLogItemsType);
    /**
     * Options for saving the history items. It can be metadata, file or both.
     *
     * Sets `history.useHistoryLog = true` as side effect.
     *
     * @minVersion 24.0
     */
    get saveLogItems(): Constants.SaveLogItemsType;
    set saveLogItems(value: Constants.SaveLogItemsType);
}
/** @ignore */
export declare const preferencesHistory: PreferencesHistory;
