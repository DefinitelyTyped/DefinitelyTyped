// Type definitions for react-native-mixpanel 1.1
// Project: https://github.com/davodesign84/react-native-mixpanel#readme
// Definitions by: Andrew Makarov <https://github.com/r3nya>
//                 Jake Bloom     <https://github.com/jakebloom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export class MixpanelInstance {
  constructor(apiToken?: string)

  initialize(): Promise<void>;
  getDistinctId(): Promise<string>;
  getSuperProperty(propertyName: string): Promise<any>;
  track(event: string, properties?: object): Promise<void>;
  flush(): Promise<void>;
  disableIpAddressGeolocalization(): Promise<void>;
  alias(alias: string): Promise<void>;
  identify(userId: string): Promise<void>;
  timeEvent(event: string): Promise<void>;
  registerSuperProperties(properties: object): Promise<void>;
  registerSuperPropertiesOnce(properties: object): Promise<void>;
  initPushHandling(token: string): Promise<void>;
  set(properties: object): Promise<void>;
  setOnce(properties: object): Promise<void>;
  trackCharge(charge: number): Promise<void>;
  trackChargeWithProperties(charge: number, properties: object): Promise<void>;
  increment(property: string, by: number): Promise<void>;
  union(name: string, properties: any[]): Promise<void>;
  removePushDeviceToken(deviceToken: object): Promise<void>;
  removeAllPushDeviceTokens(): Promise<void>;
  addPushDeviceToken(token: string): Promise<void>;

  // android only
  setPushRegistrationId(token: string): Promise<void>;

  // android only
  clearPushRegistrationId(): Promise<void>;

  reset(): Promise<void>;
}

interface MixpanelAPI {
  sharedInstanceWithToken(apiToken: string): Promise<void>;
  getDistinctId(callback: (id?: string) => void): void;
  getSuperProperty(propertyName: string, callback: (value: any) => void): void;
  track(event: string): void;
  trackWithProperties(event: string, properties: object): void;
  flush(): void;
  disableIpAddressGeolocalization(): void;
  createAlias(alias: string): void;
  identify(userId: string): void;
  timeEvent(event: string): void;
  registerSuperProperties(properties: object): void;
  registerSuperPropertiesOnce(properties: object): void;
  initPushHandling(token: string): void;
  set(properties: object): void;
  setOnce(properties: object): void;
  removePushDeviceToken(deviceToken: object): void;
  removeAllPushDeviceTokens(): void;
  trackCharge(charge: number): void;
  trackChargeWithProperties(charge: number, properties: object): void;
  increment(property: string, by: number): void;
  union(name: string, properties: any[]): void;
  addPushDeviceToken(token: string): void;

  // android only
  setPushRegistrationId(token: string): void;

  // android only
  clearPushRegistrationId(): void;

  reset(): void;
}

declare const mixpanelApi: MixpanelAPI;
export default mixpanelApi;
