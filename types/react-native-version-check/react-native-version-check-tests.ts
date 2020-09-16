import VersionCheck from 'react-native-version-check';

VersionCheck.getCountry()
    .then((country: string) => {})
    .catch((error: any) => {});

VersionCheck.getPackageName();

VersionCheck.getCurrentBuildNumber();

VersionCheck.getStoreUrl()
    .then((storeUrl: string) => {})
    .catch((error: any) => {});

VersionCheck.getAppStoreUrl()
    .then((storeUrl: string) => {})
    .catch((error: any) => {});

VersionCheck.getPlayStoreUrl()
    .then((storeUrl: string) => {})
    .catch((error: any) => {});

VersionCheck.getCurrentVersion();

VersionCheck.getLatestVersion()
    .then((latestVersion: string) => {})
    .catch((error: any) => {});

VersionCheck.needUpdate()
    .then(({ isNeeded, currentVersion, latestVersion, storeUrl }) => {})
    .catch((error: any) => {});
