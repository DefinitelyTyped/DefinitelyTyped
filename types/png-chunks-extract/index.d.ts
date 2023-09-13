// Type definitions for png-chunks-extract 1.0
// Project: https://github.com/hughsk/png-chunks-extract
// Definitions by: Nikita <https://github.com/phaux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function extractChunks(data: Uint8Array): Array<{ name: string; data: Uint8Array }>;

export = extractChunks;
