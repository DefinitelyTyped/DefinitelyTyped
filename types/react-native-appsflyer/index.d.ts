// Type definitions for react-native-appsflyer 5.1
// Project: https://github.com/AppsFlyerSDK/react-native-appsflyer#readme
// Definitions by: Fabian Lee <https://github.com/fabianlee1211>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface InitSdkOptions {
    devKey: string;
    isDebug: boolean;
    appId: string;
}

export enum EmailCryptType {
    EmailCryptTypeNone = 0,
    EmailCryptTypeSHA1 = 1,
    EmailCryptTypeMD5 = 2,
    EmailCryptTypeSHA256 = 3,
}

export interface EmailOptions {
    emailsCryptType: EmailCryptType;
    emails: string[];
}

export interface InviteLinkOptions {
    channel?: string;
    customerID?: string;
    campaign?: string;
    referrerName?: string;
    referrerImageUrl?: string;
    deeplinkPath?: string;
    baseDeeplink?: string;
    userParams?: {
        [key: string]: any;
    };
}

interface SuccessCallback {
    (success: any): void;
}

interface ErrorCallback {
    (error: any): void;
}

interface AdditionalData {
    [key: string]: any;
}

interface EventValues {
    [key: string]: any;
}

declare namespace appsFlyer {
    function initSdk(options: InitSdkOptions, success?: SuccessCallback, error?: ErrorCallback): Promise<any>;
    function trackAppLaunch(): void;
    function onInstallConversionData(callback: (response: any) => void): () => void;
    function onAppOpenAttribution(callback: (response: any) => void): () => void;
    function sendDeepLinkData(url: string): void;
    function stopTracking(isStopTracking: boolean, callback?: SuccessCallback): void;
    function generateInviteLink(options: InviteLinkOptions, success?: SuccessCallback, error?: ErrorCallback): void;
    function updateServerUninstallToken(token: string, callback?: SuccessCallback): void;
    function trackLocation(
        longitude: number,
        latitude: number,
        callback?: (error: any, coordinates: number[]) => void,
    ): void;
    function trackCrossPromotionImpression(appId: string, campaign: string): void;
    function trackAndOpenStore(appId: string, campaign: string, additionalData?: AdditionalData): void;
    function trackEvent(
        eventName: string,
        eventValues: EventValues,
        success?: SuccessCallback,
        error?: ErrorCallback,
    ): void;
    function getAppsFlyerUID(callback: (error: any, appsFlyerUID: string) => void): void;
    function setUserEmails(options: EmailOptions, success?: SuccessCallback, error?: ErrorCallback): void;
    function setAdditionalData(additionalData: AdditionalData, success?: SuccessCallback): void;
    function setCustomerUserId(userId: string, callback?: SuccessCallback): void;
    function setCollectIMEI(isCollect: boolean, callback?: SuccessCallback): void;
    function setCollectAndroidID(isCollect: boolean, callback?: SuccessCallback): void;
    function setAppInviteOneLinkID(oneLinkId: string, callback?: SuccessCallback): void;
    function setCurrencyCode(currencyCode: string, callback?: SuccessCallback): void;
}

export default appsFlyer;
