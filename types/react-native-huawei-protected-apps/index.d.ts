// Type definitions for react-native-huawei-protected-apps 0.0
// Project: https://github.com/pgengoux/react-native-huawei-protected-apps
// Definitions by: Christian Chown <https://github.com/christianchown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export interface HuaweiProtectedAppsConfig {
    title: string;
    text: string;
    doNotShowAgainText: string;
    positiveText: string;
    negativeText: string;
}

declare let HuaweiProtectedApps: {
    AlertIfHuaweiDevice(config: HuaweiProtectedAppsConfig): void;
};

export default HuaweiProtectedApps;
