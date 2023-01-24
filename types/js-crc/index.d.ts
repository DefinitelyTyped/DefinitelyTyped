// Type definitions for js-crc 0.2
// Project: https://github.com/emn178/js-crc
// Definitions by: Anders Kjeldsen <https://github.com/and3k5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function crc32(message: string | ArrayBuffer | Uint8Array | ReadonlyArray<number>): string;

export function crc16(message: string | ArrayBuffer | Uint8Array | ReadonlyArray<number>): string;
