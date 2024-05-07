/// <reference types="node" />

type ByteArray = number[] | Uint8Array | Buffer;

export function create(origin: ByteArray, target: ByteArray): number[];
export function apply(origin: ByteArray, delta: number[], ops?: { verifyChecksum: boolean }): number[];
export function outputSize(delta: number[]): number;
