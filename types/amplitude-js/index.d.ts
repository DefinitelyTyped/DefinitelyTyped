export as namespace amplitude;

export type Callback = (responseCode: number, responseBody: string, details?: { reason: string }) => void;
export type LogReturn = number | undefined;
export type Transport = "http" | "beacon";
// https://github.com/amplitude/Amplitude-JavaScript/blob/v8.9.0/src/server-zone.js#L9
export type ServerZone = "EU" | "US";

// https://amplitude.github.io/Amplitude-JavaScript/Options
export interface Config {
    apiEndpoint?: string | undefined;
    batchEvents?: boolean | undefined;
    cookieExpiration?: number | undefined;
    cookieForceUpgrade?: boolean | undefined;
    cookieName?: string | undefined;
    userId?: string | undefined;
    deferInitialization?: boolean | undefined;
    deviceId?: string | undefined;
    deviceIdFromUrlParam?: boolean | undefined;
    disableCookies?: boolean | undefined;
    domain?: string | undefined;
    eventUploadPeriodMillis?: number | undefined;
    eventUploadThreshold?: number | undefined;
    forceHttps?: boolean | undefined;
    includeFbclid?: boolean | undefined;
    includeGclid?: boolean | undefined;
    includeReferrer?: boolean | undefined;
    includeUtm?: boolean | undefined;
    language?: string | undefined;
    logLevel?: "DISABLE" | "ERROR" | "WARN" | "INFO" | undefined;
    optOut?: boolean | undefined;
    onError?: (() => void) | undefined;
    onExitPage?: (() => void) | undefined;
    platform?: string | undefined;
    sameSiteCookie?: "Lax" | "Strict" | "None" | undefined;
    saveEvents?: boolean | undefined;
    savedMaxCount?: number | undefined;
    saveParamsReferrerOncePerSession?: boolean | undefined;
    secureCookie?: boolean | undefined;
    sessionTimeout?: number | undefined;
    sessionId?: number | null;
    storage?: "" | "cookies" | "localStorage" | "sessionStorage" | "none";
    trackingOptions?: {
        city?: boolean | undefined;
        country?: boolean | undefined;
        carrier?: boolean | undefined;
        device_manufacturer?: boolean | undefined;
        device_model?: boolean | undefined;
        dma?: boolean | undefined;
        ip_address?: boolean | undefined;
        language?: boolean | undefined;
        os_name?: boolean | undefined;
        os_version?: boolean | undefined;
        platform?: boolean | undefined;
        region?: boolean | undefined;
        version_name?: boolean | undefined;
    } | undefined;
    unsetParamsReferrerOnNewSession?: boolean | undefined;
    unsentKey?: string | undefined;
    unsentIdentifyKey?: string | undefined;
    uploadBatchSize?: number | undefined;
    useNativeDeviceInfo?: boolean | undefined;
    transport?: Transport | undefined;
    serverZone?: ServerZone | undefined;
    serverZoneBasedApi?: boolean | undefined;
    useDynamicConfig?: boolean | undefined;
    logAttributionCapturedEvent?: boolean | undefined;
    plan?: {
        branch?: string;
        source?: string;
        version?: string;
    } | undefined;
    headers?: Record<string, string>;
    library?: {
        name?: string;
        version?: string;
    } | undefined;
}

export class Identify {
    /** increment a user property by a given value (can also be negative to decrement). */
    add(key: string, value: number | string): Identify;
    /** Append a value or values to a user property */
    append(key: string, value: number | string | any[] | object): Identify;
    /** Prepend a value or values to a user property */
    prepend(key: string, value: boolean | number | string | any[] | object): Identify;
    /** Preinsert a value or values to a user property */
    preInsert(key: string, value: number | string | any[] | object): Identify;
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

    cookieStorage: CookieStorage;

    init(apiKey: string, userId?: string, config?: Config, callback?: (client: AmplitudeClient) => void): void;
    onInit(callback: (client: AmplitudeClient) => void): void;

    setLibrary(name?: string, version?: string): void;
    setVersionName(versionName: string): void;

    onNewSessionStart(callback: (client: AmplitudeClient) => void): void;
    isNewSession(): boolean;
    setSessionId(sessionId: number): void;
    getSessionId(): number;
    resetSessionId(): void;
    setMinTimeBetweenSessionsMillis(timeInMillis: number): void;

    setDomain(domain: string): void;
    setUserId(userId: string | null, startNewSession?: boolean): void;
    getUserId(): string;

    enableTracking(): void;

    setDeviceId(id: string): void;
    getDeviceId(): string;
    regenerateDeviceId(): void;

    identify(identify: Identify, callback?: Callback, errorCallback?: Callback, outOfSession?: boolean): void;
    groupIdentify(
        groupType: string,
        groupName: string | string[],
        identify: Identify,
        callback?: Callback,
        errorCallback?: Callback,
        outOfSession?: boolean,
    ): void;

    setUserProperties(properties: any): void;
    /**
     * @deprecated Use `setUserProperties` instead
     */
    setGlobalUserProperties(properties: any): void;
    clearUserProperties(): void;

    clearStorage(): boolean;

    setUseDynamicConfig(useDynamicConfig: boolean): void;

    setOptOut(enable: boolean): void;

    setGroup(groupType: string, groupName: string | string[]): void;

    setTransport(transport: Transport): void;
    setServerUrl(serverUrl: string): void;
    setServerZone(serverZone: ServerZone, serverZoneBasedApi?: boolean): void;

    setEventUploadThreshold(eventUploadThreshold: number): void;
    logEvent(
        event: string,
        data?: any,
        callback?: Callback,
        errorCallback?: Callback,
        outOfSession?: boolean,
    ): LogReturn;
    logEventWithGroups(
        event: string,
        data?: any,
        groups?: any,
        callback?: Callback,
        errorCallback?: Callback,
        outOfSession?: boolean,
    ): LogReturn;
    logRevenueV2(revenue_obj: Revenue): LogReturn;

    /**
     * @deprecated Use `logRevenueV2` instead
     */
    logRevenue(price: number, quantity: number, product: string): LogReturn;
    logEventWithTimestamp(
        event: string,
        data?: any,
        timestamp?: number,
        callback?: Callback,
        errorCallback?: Callback,
        outOfSession?: boolean,
    ): LogReturn;

    Identify: typeof Identify;
    Revenue: typeof Revenue;
}

export interface CookieStorageOptions {
    expirationDays?: number | undefined;
    domain?: string | undefined;
    secure?: boolean | undefined;
    sameSite?: "Lax" | "Strict" | "None" | undefined;
}
export interface CookieStorage {
    reset(): void;
    options(): CookieStorageOptions;
    options(opts: CookieStorageOptions): void;
    get(name: string): any;
    set(name: string, value: any): boolean;
    remove(name: string): boolean;
}

// Proxy methods that get executed on the default AmplitudeClient instance (not all client methods are proxied)

/**
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
