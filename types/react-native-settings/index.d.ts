// Type definitions for react-native-settings 0.2
// Project: https://github.com/rmrs/react-native-settings
// Definitions by: Chris Frewin <https://github.com/princefishthrower>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Of particular help is to use the RNSEttingsModule.java at:
// https://github.com/rmrs/react-native-settings/blob/master/android/src/main/java/io/rumors/reactnativesettings/RNSettingsModule.java

// Get Settings
type LOCATION_SETTING = 'LOCATION_SETTING';

type AIRPLANE_MODE_SETTING = 'AIRPLANE_MODE_SETTING';

type CAPTIONING_SETTINGS = 'CAPTIONING_SETTINGS';

type RNGetSetting = LOCATION_SETTING | AIRPLANE_MODE_SETTING | CAPTIONING_SETTINGS;

// Open Settings
type ACTION_LOCATION_SOURCE_SETTINGS = 'ACTION_LOCATION_SOURCE_SETTINGS';

type ACTION_AIRPLANE_MODE_SETTINGS = 'ACTION_AIRPLANE_MODE_SETTINGS';

type ACTION_CAPTIONING_SETTINGS = 'ACTION_CAPTIONING_SETTINGS';

type RNOpenSetting = ACTION_LOCATION_SOURCE_SETTINGS | ACTION_AIRPLANE_MODE_SETTINGS | ACTION_CAPTIONING_SETTINGS;

// Events
type GPS_PROVIDER_EVENT = 'GPS_PROVIDER_EVENT';

type AIRPLANE_MODE_EVENT = 'AIRPLANE_MODE_EVENT';

type CAPTIONING_EVENT = 'CAPTIONING_EVENT';

// Errors
type RNFailedToGetSettingsResult = 'E_FAILED_TO_GET_SETTINGS';

type RNFailedToOpenSettingsResult = 'E_FAILED_TO_OPEN_SETTINGS';

type RNErrors = RNFailedToGetSettingsResult | RNFailedToOpenSettingsResult;

// Results
type ENABLED = 'ENABLED';

type DISABLED = 'DISABLED';

type RNResult = ENABLED | DISABLED;

interface RNSettings {
    // Get Settings
    LOCATION_SETTING: 'LOCATION_SETTING';

    AIRPLANE_MODE_SETTING: 'AIRPLANE_MODE_SETTING';

    CAPTIONING_SETTINGS: 'CAPTIONING_SETTINGS';

    // Open Settings
    ACTION_LOCATION_SOURCE_SETTINGS: 'ACTION_LOCATION_SOURCE_SETTINGS';

    ACTION_AIRPLANE_MODE_SETTINGS: 'ACTION_AIRPLANE_MODE_SETTINGS';

    ACTION_CAPTIONING_SETTINGS: 'ACTION_CAPTIONING_SETTINGS';

    // Events
    GPS_PROVIDER_EVENT: 'GPS_PROVIDER_EVENT';

    AIRPLANE_MODE_EVENT: 'AIRPLANE_MODE_EVENT';

    CAPTIONING_EVENT: 'CAPTIONING_EVENT';

    // Errors
    RNFailedToGetSettingsResult: 'E_FAILED_TO_GET_SETTINGS';

    RNFailedToOpenSettingsResult: 'E_FAILED_TO_OPEN_SETTINGS';

    // Results
    ENABLED: 'ENABLED';

    DISABLED: 'DISABLED';

    // Get Setting
    getSetting(setting: RNGetSetting): Promise<RNResult | RNFailedToGetSettingsResult | RNErrors>;

    // Open Setting
    openSetting(setting: RNOpenSetting): Promise<RNResult | RNFailedToOpenSettingsResult | RNErrors>;
}

// Export RNSettings as the namespace!
declare const RNSettings: RNSettings;
export default RNSettings;
