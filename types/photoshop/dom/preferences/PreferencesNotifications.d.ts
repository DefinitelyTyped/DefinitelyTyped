import { PreferencesBase } from "./PreferencesBase";
/**
 * Notification preferences including Quiet Mode and notification display settings
 *
 * @targetfolder classes/preferences
 * @minVersion 26.11
 */
export declare class PreferencesNotifications extends PreferencesBase {
    /**
     * @ignore
     */
    constructor();
    /**
     * The class name of the referenced object: *"PreferencesNotifications"*.
     *
     * @minVersion 26.11
     */
    get typename(): "PreferencesNotifications";
    /**
     * If true, pop-up definitions or descriptions are displayed on mouseover.
     *
     * @minVersion 26.11
     */
    get showToolTips(): boolean;
    set showToolTips(enabled: boolean);
    /**
     * Enables or disables Quiet Mode, which limits in-app messages and notifications.
     *
     * When Quiet Mode is enabled, certain notification preferences become read-only
     * and cannot be modified until Quiet Mode is disabled.
     *
     * @minVersion 26.11
     */
    get quietMode(): boolean;
    set quietMode(enabled: boolean);
    /**
     * If true, enhanced tooltip displays are shown.
     *
     * Note: This preference will be locked when Quiet Mode is enabled.
     *
     * @minVersion 26.11
     */
    get useRichToolTips(): boolean;
    set useRichToolTips(enabled: boolean);
    /**
     * If true, "What's New" update notifications are shown.
     *
     * Note: This preference will be locked when Quiet Mode is enabled.
     *
     * @minVersion 26.11
     */
    get showWhatsNew(): boolean;
    set showWhatsNew(enabled: boolean);
    /**
     * If true, feature introduction notifications are shown.
     *
     * Note: This preference will be locked when Quiet Mode is enabled.
     *
     * @minVersion 26.11
     */
    get showFeatureOnboarding(): boolean;
    set showFeatureOnboarding(enabled: boolean);
}
/** @ignore */
export declare const preferencesNotifications: PreferencesNotifications;
