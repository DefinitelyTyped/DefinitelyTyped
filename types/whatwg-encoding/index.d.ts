// Type definitions for whatwg-encoding 2.0
// Project: https://github.com/jsdom/whatwg-encoding
// Definitions by: fengkx <https://github.com/fengkx>
//                 BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Performs the [decode](https://encoding.spec.whatwg.org/#decode) algorithm (in which any BOM will override
 * the passed fallback encoding).
 *
 * @returns The resulting string.
 * @throws `RangeError` if an unsupported encoding is provided for `fallbackEncodingName`.
 *
 * @example
 * import { decode } from "whatwg-encoding";
 *
 * console.assert(decode(new Uint8Array([0x48, 0x69]), "UTF-8") === "Hi");
 */
export function decode(uint8Array: Uint8Array, fallbackEncodingName: string): string;
/**
 * Performs the [get an encoding](https://encoding.spec.whatwg.org/#concept-encoding-get) algorithm.
 *
 * @returns The resulting encoding's name, or `null` for failure.
 *
 * @example
 * import { labelToName } from "whatwg-encoding";
 *
 * console.assert(labelToName("latin1") === "windows-1252");
 * console.assert(labelToName("  CYRILLic ") === "ISO-8859-5");
 */
export function labelToName(label: string): string | null;
/**
 * Checks whether the encoding is one of [the encodings](https://encoding.spec.whatwg.org/#names-and-labels)
 * of the Encoding Standard, _and_ is an encoding that this package can decode (via `iconv-lite`).
 *
 * @example
 * import { isSupported } from "whatwg-encoding";
 *
 * console.assert(isSupported("IBM866") === true);
 *
 * // Not supported by the Encoding Standard
 * console.assert(isSupported("UTF-32") === false);
 *
 * // In the Encoding Standard, but this package can't decode it
 * console.assert(isSupported("x-mac-cyrillic") === false);
 */
export function isSupported(name: string): boolean;
/**
 * Sniffs the first 2–3 bytes of the supplied `Uint8Array`.
 *
 * @returns One of the encoding names if the appropriate BOM is present, or `null` if no BOM is present.
 *
 * @example
 * import { getBOMEncoding } from "whatwg-encoding";
 *
 * console.assert(getBOMEncoding(new Uint8Array([0xFE, 0xFF])) === "UTF-16BE");
 * console.assert(getBOMEncoding(new Uint8Array([0x48, 0x69])) === null);
 */
export function getBOMEncoding(uint8Array: Uint8Array): BOMEncoding | null;

export type BOMEncoding = 'UTF-16BE' | 'UTF-16LE' | 'UTF-8';
