/**
 * Generates vertex tangents for the given position/normal/texcoord attributes.
 */
export function generateTangents(
    position: Float32Array,
    normal: Float32Array,
    texcoord: Float32Array,
): Float32Array;

export let wasm: unknown;

export let isReady: boolean;

/**
 * Initializes the WASM module when awaited for the first time.
 */
export const ready: PromiseLike<void>;

export function dispose(): void;
