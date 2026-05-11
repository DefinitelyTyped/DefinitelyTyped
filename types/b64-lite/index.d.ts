export as namespace b64Lite;

export function btoa(source: string): string;
export function toBase64(source: string | ArrayLike<number> | ArrayBufferLike): string;

export function atob(encoded: string): string;
export function fromBase64(encoded: string): string;
export function toBuffer(encoded: string): Uint8Array;
