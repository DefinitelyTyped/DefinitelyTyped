// Type definitions for png-chunk-text 1.0
// Project: https://github.com/hughsk/png-chunk-text
// Definitions by: Nikita <https://github.com/phaux>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function decode(data: Uint8Array): { keyword: string; text: string };

export function encode(keyword: string, text: string): { name: "tEXt"; data: Uint8Array };
