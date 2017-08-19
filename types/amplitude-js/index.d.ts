// Type definitions for Amplitude SDK 2.12.1
// Project: https://github.com/amplitude/Amplitude-Javascript
// Definitions by: Arvydas Sidorenko <https://github.com/Asido>
// Definitions: https://github.com/Asido/DefinitelyTyped

declare module amplitude {
    interface Config {
        batchEvents?: boolean;
        cookieExpiration?: number;
        cookieName?: string;
        deviceId?: string;
        domain?: string;
        eventUploadPeriodMillis?: number;
        eventUploadThreshold?: number;
        includeReferrer?: boolean;
        includeUtm?: boolean;
        language?: string;
        optOut?: boolean;
        platform?: string;
        saveEvents?: boolean;
        savedMaxCount?: number;
        sessionTimeout?: number;
        uploadBatchSize?: number;
    }

    export class Identify {
        set(key: string, value: any): Identify;
        setOnce(key: string, value: any): Identify;
        add(key: string, value: number): Identify;
        append(key: string, value: any): Identify;
        prepend(key: string, value: any): Identify;

        unset(key: string): Identify;
    }

    export function init(apiKey: string): void;
    export function init(apiKey: string, userId: string): void;
    export function init(apiKey: string, userId: string, options: Config): void;
    export function init(apiKey: string, userId: string, options: Config, callback: () => void): void;

    export function setVersionName(version: string): void;
    export function setUserId(userId: string): void;

    export function setDeviceId(id: string): void;
    export function regenerateDeviceId(): void;

    export function identify(identify: Identify): void;

    export function setUserProperties(properties: Object): void;
    export function clearUserProperties(): void;

    export function setOptOut(optOut: boolean): void;

    export function setGroup(groupType: string, groupName: string | string[]): void;

    export function logEvent(event: string): void;
    export function logEvent(event: string, data: Object): void;
    export function logEvent(event: string, data: Object, callback: (httpCode: number, response: any) => void): void;

    export var options: Config;
}
