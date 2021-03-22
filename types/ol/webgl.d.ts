/**
 * Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing vertices data, such as
 * position, color, texture coordinate, etc. These vertices are then referenced by an index buffer
 * to be drawn on screen (see {@link module:ol/webgl.ELEMENT_ARRAY_BUFFER}).
 */
export const ARRAY_BUFFER: number;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 */
export const DYNAMIC_DRAW: number;
/**
 * Used by {@link module:ol/webgl/Helper~WebGLHelper} for buffers containing indices data.
 * Index buffers are essentially lists of references to vertices defined in a vertex buffer
 * (see {@link module:ol/webgl.ARRAY_BUFFER}), and define the primitives (triangles) to be drawn.
 */
export const ELEMENT_ARRAY_BUFFER: number;
export const FLOAT: number;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 */
export const STATIC_DRAW: number;
/**
 * Used by {link module:ol/webgl/Buffer~WebGLArrayBuffer}.
 */
export const STREAM_DRAW: number;
export const UNSIGNED_BYTE: number;
export const UNSIGNED_INT: number;
export const UNSIGNED_SHORT: number;
export function getContext(canvas: HTMLCanvasElement, opt_attributes?: any): WebGLRenderingContext;
export function getSupportedExtensions(): string[];
