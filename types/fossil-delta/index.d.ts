/// <reference types="node" />

type ByteArray = Array<number> | Uint8Array | Buffer;

export function create(origin: ByteArray, target: ByteArray): Array<number>;
export function apply(origin: ByteArray, delta: Array<number>, ops?: { verifyChecksum: boolean }): Array<number>;
export function outputSize(delta: Array<number>): number;
