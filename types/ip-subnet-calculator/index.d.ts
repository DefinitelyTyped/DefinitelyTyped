// Type definitions for ip-subnet-calculator 1.1
// Project: https://github.com/franksrevenge/IPSubnetCalculator
// Definitions by: dahool <https://github.com/dahool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace IpSubnetCalculator;

export function calculate(ipStart: string|number, ipEnd: string|number): SubnetResult[];
export function calculateSubnetMask(ip: string|number, prefixSize: number): SubnetResult;
export function calculateCIDRPrefix(ip: string|number, subnetMask: string|number): SubnetResult;

export function isIp(ipStr: string): boolean;
export function isDecimalIp(ipNum: number): boolean;

export function toDecimal(ip: string|number): number;
export function toString(num: string|number): string;

export interface SubnetResult {
    ipLow: number;
    ipLowStr: string;
    ipHigh: number;
    ipHighStr: string;
    prefixMask: number;
    prefixMaskStr: string;
    prefixSize: number;
    invertedMask: number;
    invertedMaskStr: string;
    invertedSize: number;
}
