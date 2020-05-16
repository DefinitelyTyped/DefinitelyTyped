// Type definitions for Amplitude SDK 5.11
// Project: https://github.com/amplitude/Amplitude-Javascript
// Definitions by: Arvydas Sidorenko <https://github.com/Asido>
//                 Dan Manastireanu <https://github.com/danmana>
//                 Kimmo Hintikka <https://github.com/HintikkaKimmo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace amplitude;

export type Callback = (responseCode: number, responseBody: string, details?: { reason: string }) => void;
export type LogReturn = number | undefined;

export interface Config {
    apiEndpoint?: string;
    batchEvents?: boolean;
    cookieExpiration?: number;
    cookieName?: string;
    userId?: string;
    deviceId?: string;
    deviceIdFromUrlParam?: boolean;
    domain?: string;
    eventUploadPeriodMillis?: number;
    eventUploadThreshold?: number;
    forceHttps?: boolean;
    includeGclid?: boolean;
    includeReferrer?: boolean;
    includeUtm?: boolean;
    language?: string;
    logLevel?: 'DISABLE' | 'ERROR' | 'WARN' | 'INFO';
    optOut?: boolean;
    onError?: () => void;
    platform?: string;
    saveEvents?: boolean;
    savedMaxCount?: number;
    saveParamsReferrerOncePerSession?: boolean;
    secureCookie?: boolean;
    sessionTimeout?: number;
    sameSiteCookie?: 'Lax' | 'Strict' | 'None';
    useNativeDeviceInfo?: boolean;
    trackingOptions?: {
        city?: boolean;
        country?: boolean;
        carrier?: boolean;
        device_manufacturer?: boolean;
        device_model?: boolean;
        dma?: boolean;
        ip_address?: boolean;
        language?: boolean;
        os_name?: boolean;
        os_version?: boolean;
        platform?: boolean;
        region?: boolean;
        version_name?: boolean;
    };
    unsetParamsReferrerOnNewSession?: boolean;
    unsentKey?: string;
    unsentIdentifyKey?: string;
    uploadBatchSize?: number;
}

export class Identify {
    /** increment a user property by a given value (can also be negative to decrement). */
    add(key: string, value: number | string): Identify;
    /** Append a value or values to a user property */
    append(key: string, value: number | string | any[] | object): Identify;
    /** Prepend a value or values to a user property */
    prepend(key: string, value: boolean | number | string | any[] | object): Identify;
    /** Sets the value of a given user property */
    set(key: string, value: boolean | number | string | any[] | object): Identify;
    /** Sets the value of a given user property only once */
    setOnce(key: string, value: boolean | number | string | any[] | object): Identify;
    /** Unset and remove a user property */
    unset(key: string): Identify;
}

export class Revenue {
    setProductId(productId: string): Revenue;
    setQuantity(quantity: number): Revenue;
    setPrice(price: number): Revenue;
    setRevenueType(revenueType: string): Revenue;
    setEventProperties(eventProperties: any): Revenue;
}

export class AmplitudeClient {
    constructor(instanceName?: string);

    options: Config;

    init(apiKey: string, userId?: string, config?: Config, callback?: (client: AmplitudeClient) => void): void;

    setVersionName(versionName: string): void;

    isNewSession(): boolean;
    setSessionId(sessionId: number): void;
    getSessionId(): number;

    setDomain(domain: string): void;
    setUserId(userId: string | null): void;

    setDeviceId(id: string): void;
    regenerateDeviceId(): void;

    identify(identify_obj: Identify, opt_callback?: Callback): void;

    setUserProperties(properties: any): void;
    setGlobalUserProperties(properties: any): void;
    clearUserProperties(): void;

    setOptOut(enable: boolean): void;

    setGroup(groupType: string, groupName: string | string[]): void;

    logEvent(event: string, data?: any, callback?: Callback): LogReturn;
    logEventWithGroups(event: string, data?: any, groups?: any, callback?: Callback): LogReturn;
    logRevenueV2(revenue_obj: Revenue): LogReturn;
    logRevenue(pric: number, quantity: number, product: string): LogReturn;
    logEventWithTimestamp(event: string, data?: any, timestamp?: number, callback?: Callback): LogReturn;

    Identify: typeof Identify;
    Revenue: typeof Revenue;
}

// Proxy methods that get executed on the default AmplitudeClient instance (not all client methods are proxied)

/**
 *
 * @deprecated Please use amplitude.getInstance().init(apiKey, opt_userId, opt_config, opt_callback);
 */
export function init(
    apiKey: string,
    userId?: string,
    options?: Config,
    callback?: (client: AmplitudeClient) => void,
): void;
/**
 * @deprecated Please use amplitude.getInstance().setVersionName(versionName)
 */
export function setVersionName(version: string): void;

/**
 * @deprecated Please use amplitude.getInstance().isNewSession();
 */
export function isNewSession(): boolean;
/**
 * Returns the id of the current session.
 * @deprecated Please use amplitude.getInstance().getSessionId();
 */
export function getSessionId(): number;

export function setDomain(domain: string): void;

export function setUserId(userId: string | null): void;
/**
 * @deprecated Please use amplitude.getInstance().setDeviceId(deviceId)
 */
export function setDeviceId(id: string): void;
/**
 * @deprecated Please use amplitude.getInstance().regenerateDeviceId()
 */
export function regenerateDeviceId(): void;

/** Send an identify call containing user property operations to Amplitude servers */
export function identify(identify: Identify, callback?: Callback): void;
/**
 * @deprecated Please use amplitude.getInstance.setUserProperties(userProperties)
 */
export function setUserProperties(properties: any): void;
/**
 * @deprecated Note this is deprecated, and we recommend using setUserProperties
 */
export function setGlobalUserProperties(properties: any): void;
export function clearUserProperties(): void;

/**
 * @deprecated Please use amplitude.getInstance().setUserId(userId)
 */
export function setOptOut(optOut: boolean): void;
/**
 * @deprecated Please use amplitude.getInstance().setGroup(groupType, groupName)
 */
export function setGroup(groupType: string, groupName: string | string[]): void;

/**
 * @deprecated Please use amplitude.getInstance().logEvent(eventType, eventProperties, opt_callback);
 */
export function logEvent(event: string, data?: any, callback?: Callback): LogReturn;

/**
 * Log an event with eventType, eventProperties, and groups
 */
export function logEventWithGroups(event: string, data?: any, groups?: any, callback?: Callback): LogReturn;
/**
 * @deprecated Please use amplitude.getInstance().logRevenueV2(revenue_obj);
 */
export function logRevenueV2(revenue_obj: Revenue): LogReturn;
/**
 * @deprecated Please use amplitude.getInstance().logRevenueV2(revenue_obj);
 */
export function logRevenue(pric: number, quantity: number, product: string): LogReturn;
export function logEventWithTimestamp(event: string, data?: any, timestamp?: number, callback?: Callback): LogReturn;

export function getInstance(instanceName?: string): AmplitudeClient;
export const __VERSION__: string;
export const options: Config;
