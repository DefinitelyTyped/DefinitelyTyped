// Type definitions for Base64 v1.0.1
// Project: https://github.com/davidchambers/Base64.js
// Definitions by: Sergey Sova <i.am@lestad.net> (https://lestad.top)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/Base64

/**
 * Encoder
 */
export function btoa(input: string): string

/**
 * Decoder
 */
export function atob(base64: string): string

