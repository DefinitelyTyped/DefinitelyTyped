// Type definitions for ip 1.1
// Project: https://github.com/indutny/node-ip
// Definitions by: Peter Harris <https://github.com/codeanimal>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SubnetInfo {
    networkAddress: string;
    firstAddress: string;
    lastAddress: string;
    broadcastAddress: string;
    subnetMask: string;
    subnetMaskLength: number;
    numHosts: number;
    length: number;
    contains(ip: string): boolean;
}

/**
 * Check two IP address are the same.
 */
export function isEqual(ip1: string, ip2: string): boolean;

/**
 * Convert an IP string into a buffer.
 */
export function toBuffer(ip: string, buffer?: Buffer, offset?: number): Buffer;

/**
 * Convert an IP buffer into a string.
 */
export function toString(ip: Buffer, offset?: number, length?: number): string;

/**
 * Get the subnet mask from a CIDR prefix length.
 *
 * @param family The IP family is infered from the prefixLength, but can be explicity specified as either "ipv4" or "ipv6".
 */
export function fromPrefixLen(prefixLength: number, family?: 'ipv4' | 'ipv6'): string;

/**
 * Get the network ID IP address from an IP address and its subnet mask.
 */
export function mask(ip: string, mask: string): string;

/**
 * Get the network ID IP address from an IP address in CIDR notation.
 */
export function cidr(cidr: string): string;

/**
 * Get the bitwise inverse (NOT every octet) of an IP address or subnet mask.
 */
export function not(ip: string): string;

/**
 * Get the bitwise OR of two IP addresses (usually an IP address and a subnet mask).
 */
export function or(ip: string, mask: string): string;

/**
 * Check whether an IP is within a private IP address range.
 */
export function isPrivate(ip: string): boolean;

/**
 * Check whether an IP is within a public IP address range.
 */
export function isPublic(ip: string): boolean;

/**
 * Check whether an IP is a loopback address.
 */
export function isLoopback(ip: string): boolean;

/**
 * Check whether an IP is a IPv4 address.
 */
export function isV4Format(ip: string): boolean;

/**
 * Check whether an IP is a IPv6 address.
 */
export function isV6Format(ip: string): boolean;

/**
 * Get the loopback address for an IP family.
 *
 * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
 */
export function loopback(family?: 'ipv4' | 'ipv6'): string;

/**
 * Get the address for the network interface on the current system with the specified 'name'.
 * If no interface name is specified, the first IPv4 address or loopback address is returned.
 *
 * @param name The name can be any named interface, or 'public' or 'private'.
 * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
 */
export function address(name?: 'public' | 'private' | string, family?: 'ipv4' | 'ipv6'): string;

/**
 * Convert a string IPv4 IP address to the equivalent long numeric value.
 */
export function toLong(ip: string): number;

/**
 * Convert an IPv4 IP address from its the long numeric value to a string.
 */
export function fromLong(ip: number): string;

/**
 * Get the subnet information.
 * @param ip IP address.
 * @param subnet Subnet address.
 */
export function subnet(ip: string, subnet: string): SubnetInfo;

/**
 * Get the subnet information.
 * @param cidr CIDR address.
 */
export function cidrSubnet(cidr: string): SubnetInfo;
