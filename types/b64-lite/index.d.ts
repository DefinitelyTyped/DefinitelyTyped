// Type definitions for b64-lite 1.4
// Project: https://github.com/kevlened/b64-lite#readme
// Definitions by: JasonHK <https://github.com/JasonHK>
//                 Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace b64Lite;

export function btoa(source: string): string;
export function toBase64(source: string | ArrayLike<number> | ArrayBufferLike): string;

export function atob(encoded: string): string;
export function fromBase64(encoded: string): string;
export function toBuffer(encoded: string): Uint8Array;
