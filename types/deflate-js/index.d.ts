/**
 * Takes a byte sequence and deflates it
 *
 * @param data Uint8Array the raw, inflated payload
 * @param compression number the compression level (defined in RFC 1951, higher is better)
 *
 * @return Uint8Array the deflated bytes
 */
export function deflate(data: Uint8Array, compression?: number): Uint8Array;

/**
 * Takes a byte sequence and inflates it
 *
 * @param data Uint8Array the deflated payload
 *
 * @return Uint8Array the deflated bytes
 */
export function inflate(data: Uint8Array): Uint8Array;
