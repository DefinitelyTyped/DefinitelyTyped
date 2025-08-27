export as namespace bchaddr;

/**
 * Supported Bitcoin Cash address formats.
 */
export namespace Format {
    const Legacy: string;
    const Bitpay: string;
    const Cashaddr: string;
}

/**
 * Supported networks.
 */
export namespace Network {
    const Mainnet: string;
    const Testnet: string;
}

/**
 * Supported address types.
 */
export namespace Type {
    const P2PKH: string;
    const P2SH: string;
}

/**
 * Returns a boolean indicating whether the given input is a valid Bitcoin Cash address.
 * @param input - Any input to check for validity.
 */
export function isValidAddress(input: any): boolean;

/**
 * Detects what is the given address' format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function detectAddressFormat(address: string): string;

/**
 * Detects what is the given address' network.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function detectAddressNetwork(address: string): string;

/**
 * Detects what is the given address' type.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function detectAddressType(address: string): string;

/**
 * Translates the given address into legacy format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function toLegacyAddress(address: string): string;

/**
 * Translates the given address into bitpay format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function toBitpayAddress(address: string): string;

/**
 * Translates the given address into cashaddr format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function toCashAddress(address: string): string;

/**
 * Returns a boolean indicating whether the address is in legacy format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isLegacyAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is in bitpay format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isBitpayAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is in cashaddr format.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isCashAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is a mainnet address.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isMainnetAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is a testnet address.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isTestnetAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is a p2pkh address.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isP2PKHAddress(address: string): boolean;

/**
 * Returns a boolean indicating whether the address is a p2sh address.
 * @param address - A valid Bitcoin Cash address in any format.
 * @throws {InvalidAddressError}
 */
export function isP2SHAddress(address: string): boolean;

/**
 * Error thrown when the address given as input is not a valid Bitcoin Cash address.
 */
export class InvalidAddressError extends Error {
    constructor();
}
