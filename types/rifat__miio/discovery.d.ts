import { MiioDevice } from "./device";

export interface MiioSubDeviceOptions {
    id: string;
    model: string;
    type: string;
    parent: MiioDevice;
    device: MiioDevice;
}

export interface TimedDiscoveryOptions {
    cacheTime?: number;
    useTokenStorage?: boolean;
    tokens?: {};
}

export interface BasicDiscoveryOptions extends TimedDiscoveryOptions {
    filter?: (reg: MiioSubDeviceOptions) => boolean;
    skipSubDevices?: boolean;
}

// TODO: AbstractDiscovery https://github.com/thingbound/discovery/blob/0.3.0/lib/abstract.js
export type AbstractDiscovery = any;
// TODO: BasicDiscovery https://github.com/thingbound/discovery/blob/0.3.0/lib/basic.js
export type BasicDiscovery = AbstractDiscovery & any;
// TODO: ExpiringDiscovery https://github.com/thingbound/discovery/blob/0.3.0/lib/expiring.js
export type ExpiringDiscovery = BasicDiscovery & any;
// TODO: TimedDiscovery https://github.com/thingbound/discovery/blob/0.3.0/lib/timed.js
export type TimedDiscovery = ExpiringDiscovery & any;

export function devices(options: BasicDiscoveryOptions): BasicDiscovery;
export function browse(options: TimedDiscoveryOptions): TimedDiscovery;
