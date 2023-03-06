// Type definitions for node-wifi 2.0
// Project: https://github.com/friedrith/node-wifi
// Definitions by: hieyou1 <https://github.com/hieyou1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Some comments from README: https://github.com/friedrith/node-wifi#readme

export interface WiFiNetwork {
    ssid: string;
    bssid?: string;
    mac?: string; // equals to bssid (for retrocompatibility)
    channel: number;
    frequency: number; // in MHz
    signal_level: number; // in dB
    quality: number; // same as signal level but in %
    security: string; // format depending on locale for open networks in Windows
    security_flags: string[]; // encryption protocols (format currently depending of the OS)
    mode?: string; // network mode like Infra (format currently depending of the OS)
}

export interface InitConfig {
    debug?: boolean;
    iface?: string | null; // network interface, choose a random wifi interface if set to null
}

export interface ConnectionOpts {
    ssid: string;
    password: string;
}

export interface DeletionOpts {
    ssid: string;
}

/**
 * Initialize wifi module
 * Absolutely necessary even to set interface to null
 */
export function init(options: InitConfig): void;

/**
 * Scan networks
 */
export function scan(): Promise<WiFiNetwork[]>;
export function scan(cb: (error: Error | null, networks: WiFiNetwork[]) => void): void;

/**
 * Connect to a network
 * on windows, the callback is called even if the connection failed due to netsh limitations
 * if your software may work on windows, you should use `wifi.getCurrentConnections` to check if the connection succeeded
 */
export function connect(opts: ConnectionOpts): Promise<void>;
export function connect(opts: ConnectionOpts, cb: () => void): void;

/**
 * Disconnect from a network
 * not available on all os for now
 */
export function disconnect(): Promise<void>;
export function disconnect(cb: (error: Error | null) => void): void;

/**
 * List the current wifi connections
 */
export function getCurrentConnections(): Promise<WiFiNetwork[]>;
export function getCurrentConnections(cb: (error: Error | null, currentConnections: WiFiNetwork[]) => void): void;

/**
 * Delete a saved network
 * not available on all os for now
 */
export function deleteConnection(opts: DeletionOpts, cb: (error: Error | null) => void): void;
export function deleteConnection(opts: DeletionOpts): Promise<void>;
