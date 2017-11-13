// Type definitions for Netmask 1.0.5
// Project: https://github.com/rs/node-netmask
// Definitions by: Matt Frantz <https://github.com/mhfrantz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// netmask.d.ts



export declare function long2ip(long: number): string;
export declare function ip2long(ip: string): number;

export declare class Netmask {
    maskLong: number;
    bitmask: number;
    netLong: number;
    // The number of IP address in the block (eg.: 254)
    size: number;
    // The address of the network block as a string (eg.: 216.240.32.0)
    base: string;
    // The netmask as a string (eg.: 255.255.255.0)
    mask: string;
    // The host mask, the opposite of the netmask (eg.: 0.0.0.255)
    hostmask: string;
    // The first usable address of the block
    first: string;
    // The last  usable address of the block
    last: string;
    // The block's broadcast address: the last address of the block (eg.: 192.168.1.255)
    broadcast: string;

    constructor(netmask: string);
    constructor(net: string, mask: string);

    // Returns true if the given ip or netmask is contained in the block
    contains(ip: string | Netmask | number): boolean;

    // Returns the Netmask object for the block which follow this one
    next(count?: number): Netmask;

    // Evaluate a function on each IP address
    forEach(fn: (ip: string, long: number, index: number) => void): void;

    // Returns the complete netmask formatted as `base/bitmask`
    toString(): string;
}
