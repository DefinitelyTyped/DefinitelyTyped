// Type definitions for react-native-shared-group-preferences 1.1
// Project: https://github.com/KjellConnelly/react-native-shared-group-preferences#readme
// Definitions by: Cambo <https://github.com/indentedspace>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface SharedGroupPreferenceOptions {
    useAndroidSharedPreferences?: boolean;
}

export namespace SharedGroupPreferences {
    function isAppInstalledAndroid(packageName: string): Promise<void>;
    function getItem(key: string, appGroup: string, options?: SharedGroupPreferenceOptions): Promise<any>;
    function setItem(key: string, value: any, appGroup: string, options?: SharedGroupPreferenceOptions): Promise<void>;
}

export default SharedGroupPreferences;
