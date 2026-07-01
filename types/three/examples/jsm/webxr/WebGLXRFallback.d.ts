import { WebGPURenderer } from "three/webgpu";

/**
 * Sets up a construction-time WebGL fallback for WebGPU XR examples.
 *
 * @param {WebGPURenderer} renderer - The initial renderer.
 * @param {Function} createFallbackRenderer - A function that returns a new renderer with a WebGL backend.
 * @param {Function} onFallback - A function that installs the new renderer in the app.
 */
export function setupWebGLXRFallback(
    renderer: WebGPURenderer,
    createFallbackRenderer: (renderer: WebGPURenderer) => WebGPURenderer,
    onFallback?: (fallbackRenderer: WebGPURenderer, renderer: WebGPURenderer) => Promise<void> | void,
): void;
