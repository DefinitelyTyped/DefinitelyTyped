// Type definitions for base64-js v1.1.2
// Project: https://github.com/beatgammit/base64-js
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'base64-js' {

    export function toByteArray(encoded: string): Uint8Array;
    export function fromByteArray(bytes: Uint8Array): string;
}
