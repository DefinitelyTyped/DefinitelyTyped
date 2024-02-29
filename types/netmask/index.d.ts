/**
 * converts long to an ip address
 */
export function long2ip(long: number): string;
/**
 * converts ip address to long
 */
export function ip2long(ip: string): number;

export class Netmask {
    /**
     * The base address of the network block as a string (eg: 216.240.32.0). Base does not give an indication of the size of the network block.
     */
    base: string;
    /**
     * The netmask as a string (eg: 255.255.255.0).
     */
    mask: string;
    /**
     * The netmask as a number of bits in the network portion of the address for this block (eg: 24).
     */
    bitmask: number;
    /**
     * The host mask which is the opposite of the netmask (eg: 0.0.0.255).
     */
    hostmask: string;
    /**
     * The blocks broadcast address (eg: 192.168.1.0/24 => 192.168.1.255)
     */
    broadcast: string;
    /**
     * The number of IP addresses in a block (eg: 256).
     */
    size: number;
    /**
     * First useable address
     */
    first: string;
    /**
     * Last useable address
     */
    last: string;

    maskLong: number;
    netLong: number;

    /**
     * Returns a true if the IP number ip is part of the network. That is, a true value is returned if ip is between base and broadcast.
     * If a Netmask object or a block is given, it returns true only of the given block fits inside the network.
     */
    contains(address: string | Netmask | number): boolean;
    /**
     * Similar to the Array prototype method. It loops through all the useable addresses, ie between first and last.
     */
    forEach(cb: (ip: string, long: number, index: number) => void): void;
    /**
     * Without a count, return the next block of the same size after the current one. With a count, return the Nth block after the current one.
     * A count of -1 returns the previous block. Undef will be returned if out of legal address space.
     */
    next(count?: number): Netmask;
    /**
     * The netmask in base/bitmask format (e.g., '216.240.32.0/24')
     */
    toString(): string;

    /**
     * @param net A network - e.g 216.240.32.0/24
     * @param mask - optional netmask if not provided in `net`
     */
    constructor(net: string, mask?: string | number);
}
