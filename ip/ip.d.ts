// Type definitions for node-ip
// Project: https://github.com/indutny/node-ip
// Definitions by: Peter Harris <https://github.com/codeanimal>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface NodeBuffer { }

declare module "ip" {
    /**
     * Check two IP address are the same.
     **/
    export function isEqual(ip1: string, ip2: string): boolean;

    /**
     * Convert an IP string into a buffer.
     **/
    export function toBuffer(ip: string, buffer?: number, offset?: number): NodeBuffer;

    /**
     * Convert an IP buffer into a string.
     **/
    export function toString(ip: NodeBuffer, offset?: number, length?: number): string;

    /**
     * Get the subnet mask from a CIDR prefix length.
     * 
     * @param family The IP family is infered from the prefixLength, but can be explicity specified as either "ipv4" or "ipv6".
     **/
    export function fromPrefixLen(prefixLength: number, family?:string): string;

    /**
     * Get the network ID IP address from an IP address and its subnet mask.
     **/
    export function mask(ip: string, mask: string): string;

    /**
     * Get the network ID IP address from an IP address in CIDR notation.
     **/
    export function cidr(cidr: string): string;

    /**
     * Get the bitwise inverse (NOT every octet) of an IP address or subnet mask.
     **/
    export function not(ip: string): string;

    /**
     * Get the bitwise OR of two IP addresses (usually an IP address and a subnet mask).
     **/
    export function or(ip: string, mask:string): string;

    /**
     * Check whether an IP is within a private IP address range.
     **/
    export function isPrivate(ip: string): boolean;

    /**
     * Check whether an IP is within a public IP address range.
     **/
    export function isPublic(ip: string): boolean;

    /**
     * Check whether an IP is a loopback address.
     **/
    export function isLoopback(ip: string): boolean;

    /**
     * Get the loopback address for an IP family.
     * 
     * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
     **/
    export function loopback(family?: string): string;

    /**
     * Get the address for the network interface on the current system with the specified 'name'.
     * If no interface name is specified, the first IPv4 address or loopback address is returned.
     * 
     * @param name The name can be any named interface, or 'public' or 'private'.
     * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
     **/
    export function address(name?: string, family?: string):string;

    /**
     * Convert a string IPv4 IP address to the equivalent long numeric value.
     **/
    export function toLong(ip: string): number;

    /**
     * Convert an IPv4 IP address from its the long numeric value to a string.
     **/
    export function fromLong(ip: number): string;
}