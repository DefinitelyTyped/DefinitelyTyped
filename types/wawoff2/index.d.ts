// Type definitions for wawoff2 1.0
// Project: https://github.com/fontello/wawoff2#readme
// Definitions by: Luca Becker <https://github.com/lucavb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function compress(src: Uint8Array | Buffer): Promise<Uint8Array>;
export function decompress(src: Uint8Array | Buffer): Promise<Uint8Array>;
