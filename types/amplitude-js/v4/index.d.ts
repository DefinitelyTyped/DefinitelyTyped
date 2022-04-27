// Type definitions for Amplitude SDK 4.4.0
// Project: https://github.com/amplitude/Amplitude-Javascript
// Definitions by: Dan Manastireanu <https://github.com/danmana>
//                 Kimmo Hintikka <https://github.com/HintikkaKimmo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace amplitude;

type Callback = (responseCode: number, responseBody: string, details?: { reason: string; }) => void;
type LogReturn = number | void;

interface Config {
    apiEndpoint?: string | undefined;
    batchEvents?: boolean | undefined;
    cookieExpiration?: number | undefined;
    cookieName?: string | undefined;
    userId?: string | undefined;
    deviceId?: string | undefined;
    deviceIdFromUrlParam?: boolean | undefined;
    domain?: string | undefined;
    eventUploadPeriodMillis?: number | undefined;
    eventUploadThreshold?: number | undefined;
    forceHttps?: boolean | undefined;
    includeGclid?: boolean | undefined;
    includeReferrer?: boolean | undefined;
    includeUtm?: boolean | undefined;
    language?: string | undefined;
    logLevel?: 'DISABLE' | 'ERROR' | 'WARN' | 'INFO' | undefined;
    optOut?: boolean | undefined;
    platform?: string | undefined;
    saveEvents?: boolean | undefined;
    savedMaxCount?: number | undefined;
    saveParamsReferrerOncePerSession?: boolean | undefined;
    sessionTimeout?: number | undefined;
    useNativeDeviceInfo?: boolean | undefined;
    trackingOptions?: {
        city?: boolean | undefined;
        country?: boolean | undefined;
        device_model?: boolean | undefined;
        dma?: boolean | undefined;
        ip_address?: boolean | undefined;
        language?: boolean | undefined;
        os_name?: boolean | undefined;
        os_version?: boolean | undefined;
        platform?: boolean | undefined;
        region?: boolean | undefined;
        version_name?: boolean | undefined;
    } | undefined,
    unsentKey?: string | undefined;
    unsentIdentifyKey?: string | undefined;
    uploadBatchSize?: number | undefined;
}

export class Identify {
    set(key: string, value: any): Identify;
    setOnce(key: string, value: any): Identify;
    add(key: string, value: number | string): Identify;
    append(key: string, value: any): Identify;
    prepend(key: string, value: any): Identify;

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

    Identify: typeof Identify
    Revenue: typeof Revenue
}

// Proxy methods that get executed on the default AmplitudeClient instance (not all client methods are proxied)

export function init(apiKey: string, userId?: string, options?: Config, callback?: (client: AmplitudeClient) => void): void;

export function setVersionName(version: string): void;

export function isNewSession(): boolean;
export function getSessionId(): number;

export function setDomain(domain: string): void;

export function setUserId(userId: string | null): void;

export function setDeviceId(id: string): void;
export function regenerateDeviceId(): void;

export function identify(identify: Identify, callback?: Callback): void;

export function setUserProperties(properties: any): void;
export function setGlobalUserProperties(properties: any): void;
export function clearUserProperties(): void;

export function setOptOut(optOut: boolean): void;

export function setGroup(groupType: string, groupName: string | string[]): void;

export function logEvent(event: string, data?: any, callback?: Callback): LogReturn;
export function logEventWithGroups(event: string, data?: any, groups?: any, callback?: Callback): LogReturn;
export function logRevenueV2(revenue_obj: Revenue): LogReturn;
export function logRevenue(pric: number, quantity: number, product: string): LogReturn;
export function logEventWithTimestamp(event: string, data?: any, timestamp?: number, callback?: Callback): LogReturn;



export function getInstance(instanceName?: string): AmplitudeClient;
export const __VERSION__: string;
export var options: Config;
