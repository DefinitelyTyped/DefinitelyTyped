// Type definitions for jwt-simple v0.5.1
// Project: https://github.com/hokaccha/node-jwt-simple
// Definitions by: Ken Fukuyama <https://github.com/kenfdev>, Gael Magnan <https://github.com/GaelMagnan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Decode jwt
 * @param token
 * @param key
 * @param noVerify
   * @param algorithm default is HS256
 * @api public
 */
export function decode(token: any, key: string, noVerify?: boolean, algorithm?: string): any;
/**
 * Encode jwt
 * @param payload
 * @param key
 * @param algorithm default is HS256
   * @param options
 * @api public
 */
export function encode(payload: any, key: string, algorithm?: string): string;
