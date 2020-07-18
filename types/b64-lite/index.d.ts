// Type definitions for b64-lite 1.3
// Project: https://github.com/kevlened/b64-lite#readme
// Definitions by: JasonHK <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace b64Lite;

export function btoa(source: string): string;
export function toBase64(source: string): string;

export function atob(encoded: string): string;
export function fromBase64(encoded: string): string;
