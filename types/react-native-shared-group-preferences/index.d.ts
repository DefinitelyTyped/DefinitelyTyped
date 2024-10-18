export interface SharedGroupPreferenceOptions {
    useAndroidSharedPreferences?: boolean | undefined;
}

export namespace SharedGroupPreferences {
    function isAppInstalledAndroid(packageName: string): Promise<void>;
    function getItem(key: string, appGroup: string, options?: SharedGroupPreferenceOptions): Promise<any>;
    function setItem(key: string, value: any, appGroup: string, options?: SharedGroupPreferenceOptions): Promise<void>;
}

export default SharedGroupPreferences;
