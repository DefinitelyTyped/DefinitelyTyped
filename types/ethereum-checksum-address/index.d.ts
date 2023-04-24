// Type definitions for ethereum-checksum-address 0.0
// Project: https://github.com/miguelmota/ethereum-checksum-address
// Definitions by: Wukong Project <https://github.com/wukongproject>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function toChecksumAddress(address: string, chainId?: number | string): string;
export function checkAddressChecksum(address: string, chainId?: number | string): boolean;
