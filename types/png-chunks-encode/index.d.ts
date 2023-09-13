// Type definitions for png-chunks-encode 1.0
// Project: https://github.com/hughsk/png-chunks-encode
// Definitions by: Nikita <https://github.com/phaux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function encodeChunks(chunks: Array<{ name: string; data: Uint8Array }>): Uint8Array;

export = encodeChunks;
