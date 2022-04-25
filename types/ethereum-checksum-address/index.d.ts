// Type definitions for ethereum-checksum-address
// Project: https://github.com/miguelmota/ethereum-checksum-address
// Definitions by: Wukong Project <https://github.com/wukongproject>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "ethereum-checksum-address" {
  // Types inside here
  export function toChecksumAddress (address: string, chainId?: number | string): string
  export function checkAddressChecksum (address: string, chainId?: number | string): boolean
}
