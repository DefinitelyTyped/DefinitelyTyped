/**
 * This module defines the identification information for advertising functionalities provided by the Tizen Samsung TV Product API.
 * @privilegeLevel Public
 * @privilegeName http://developer.samsung.com/privilege/adinfo
 * @since 2.4
 */

export interface AdInfoManager {
    /**
     * Retrieves the plugin version number.
     * @returns Plugin version
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     * @throw WebAPIException SecurityError
     * @since 2.4
     */
    getVersion: () => string;

    /**
     * TIFA is a randomized, non-persistent, and resettable Samsung Smart TV device identifier.
     * The personal information collected for the purpose of providing advertisement is linked to TIFA (collectively "TIFA Information").
     * TIFA shall be collected and used only for the following purposes. Any other purpose is prohibited.
     *   - In-app advertisements
     *   - Installation of other applications through your in-app advertisement
     *   - Running another application (including apps already installed on the Samsung Smart TV), web browser or video player through your in-app advertisement.
     *   - Collecting the app usage data related to the in-app advertisement (e.g. in-app subscription, in-app contents purchasement, or etc.) for the purpose of analyzing in-app advertisement attribution.
     * TIFA will be newly generated whenever user resets the TIFA, and you shall agree not to map any previous TIFA with the newly generated TIFA ("mapping" means tracking and identifying any previous TIFA with the newly generated TIFA).
     * The encrypted protocol (e.g: https) shall be used when the TIFA is sent outside of the device.
     * TIFA shall not be connected to personally-identifiable information or associated with any persistent device identifier (e.g. DUID, MAC address, etc).
     * The collection and use of the TIFA Information shall be in compliance with all applicable privacy and data protection laws and regulations including getting prior consent from the user.
     * @returns ID For Advertising
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     * @throw WebAPIException SecurityError, InvalidStateError
     * @since 2.4
     */
    getTIFA: () => string;

    /**
     * Checks whether the device has limited ad tracking.
     * @returns boolean value value to indicate whether limited ad tracking is set.
     *          true: Limit Ad Tracking
     *          false: Not Limit Ad Tracking
     * @privilegeLevel Public
     * @privilegeName http://developer.samsung.com/privilege/adinfo
     * @throw WebAPIException SecurityError, InvalidStateError
     * @since 2.4
     */
    isLATEnabled: () => boolean;
}
