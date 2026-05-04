/**
 * AttributionSetting represents the attribution configuration settings.
 */
export default class AttributionSetting {
    _inactivity_window_hours: number;
    _reattribution_window_hours: number;
    /**
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     */
    constructor(inactivity_window_hours: number, reattribution_window_hours: number);
    /**
     * Returns the inactivity window hours.
     * Example: 24
     */
    get inactivity_window_hours(): number;
    /**
     * Set the inactivity window hours.
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     */
    set inactivity_window_hours(inactivity_window_hours: number);
    /**
     * Set the inactivity window hours.
     * @param {Number} inactivity_window_hours The inactivity window in hours.
     * @returns {AttributionSetting}
     */
    setInactivityWindowHours(inactivity_window_hours: number): AttributionSetting;
    /**
     * Returns the reattribution window hours.
     * Example: 168
     */
    get reattribution_window_hours(): number;
    /**
     * Set the reattribution window hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     */
    set reattribution_window_hours(reattribution_window_hours: number);
    /**
     * Set the reattribution window hours.
     * @param {Number} reattribution_window_hours The reattribution window in hours.
     * @returns {AttributionSetting}
     */
    setReattributionWindowHours(reattribution_window_hours: number): AttributionSetting;
    /**
     * Returns the normalized payload for the attribution setting.
     * @returns {Object} normalized attribution setting payload.
     */
    normalize(): Record<string, any>;
}
