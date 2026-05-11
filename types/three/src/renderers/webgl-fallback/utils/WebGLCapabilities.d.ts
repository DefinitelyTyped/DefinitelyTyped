import WebGLBackend from "../WebGLBackend.js";

/**
 * A WebGL 2 backend utility module for managing the device's capabilities.
 *
 * @private
 */
declare class WebGLCapabilities {
    /**
     * Constructs a new utility object.
     *
     * @param {WebGLBackend} backend - The WebGL 2 backend.
     */
    constructor(backend: WebGLBackend);
    /**
     * A reference to the WebGL 2 backend.
     *
     * @type {WebGLBackend}
     */
    backend: WebGLBackend;
    /**
     * This value holds the cached max anisotropy value.
     *
     * @type {?number}
     * @default null
     */
    maxAnisotropy: number | null;
    /**
     * This value holds the cached max uniform block size value.
     *
     * @type {?number}
     * @default null
     */
    maxUniformBlockSize: number | null;
    /**
     * Returns the maximum anisotropy texture filtering value. This value
     * depends on the device and is reported by the `EXT_texture_filter_anisotropic`
     * WebGL extension.
     *
     * @return {number} The maximum anisotropy texture filtering value.
     */
    getMaxAnisotropy(): number;
    /**
     * Returns the maximum number of bytes available for uniform buffers.
     *
     * @return {number} The maximum number of bytes available for uniform buffers.
     */
    getUniformBufferLimit(): number;
}

export default WebGLCapabilities;
