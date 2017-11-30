// Type definitions for react-native-mixpanel 0.1
// Project: https://github.com/davodesign84/react-native-mixpanel#readme
// Definitions by: Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export function sharedInstanceWithToken(token: string): void;
export function track(event: string): void;
export function trackWithProperties(event: string, property: object): void;
export function createAlias(id: string): void;
export function identify(id: string): void;
export function set(property: object): void;
export function setOnce(property: object): void;
export function timeEvent(event: string): void;
export function registerSuperProperties(property: object): void;
export function registerSuperPropertiesOnce(property: object): void;
export function trackCharge(id: number): void;
export function trackChargeWithProperties(id: number, property: object): void;
export function increment(property: string, value: number): void;
export function setPushRegistrationId(token: string): void;
export function initPushHandling(token: string): void;
export function clearPushRegistrationId(): void;
export function addPushDeviceToken(token: string): void;
export function reset(): void;
export function getDistinctId(handler: (id: string) => void): void;
