/**
 * Generates vertex tangents for the given position/normal/texcoord attributes.
 */
export function generateTangents(
    position: Float32Array,
    normal: Float32Array,
    texcoord: Float32Array,
): Float32Array;

/**
 * Retained for compatibility with the asynchronous WASM implementation.
 */
export const isReady: true;

/**
 * Backwards compatibility. Initialization is no longer required.
 */
export const ready: Promise<void>;

/**
 * Retained for API compatibility. There are no persistent resources to release.
 */
export function dispose(): void;
