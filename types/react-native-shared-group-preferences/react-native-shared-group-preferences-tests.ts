import SharedGroupPreferences, { SharedGroupPreferenceOptions } from 'react-native-shared-group-preferences';

const isAppInstalledAndroid = async (packageName: string) => {
    let appIsInstalled;
    try {
        await SharedGroupPreferences.isAppInstalledAndroid(packageName);
        appIsInstalled = true;
    } catch (e) {
        appIsInstalled = false;
    }

    return appIsInstalled;
};

const getItem = async (key: string, appGroup: string, options: SharedGroupPreferenceOptions) => {
    const result = await SharedGroupPreferences.getItem(key, appGroup);
    return result;
};

const setItem = async (key: string, data: any, appGroup: string, options: SharedGroupPreferenceOptions) => {
    await SharedGroupPreferences.setItem(key, data, appGroup);
};

export default { isAppInstalledAndroid, getItem, setItem };
