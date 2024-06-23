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
