/// <reference types="node" />

export function compress(src: Uint8Array | Buffer): Promise<Uint8Array>;
export function decompress(src: Uint8Array | Buffer): Promise<Uint8Array>;
