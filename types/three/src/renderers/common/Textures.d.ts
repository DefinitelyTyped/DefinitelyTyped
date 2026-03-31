import { RenderTarget } from "../../core/RenderTarget.js";
import { Vector3 } from "../../math/Vector3.js";
import { Texture } from "../../textures/Texture.js";
import Backend from "./Backend.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import Renderer from "./Renderer.js";

interface TextureOptions {
    width?: number;
    height?: number;
    depth?: number;
    needsMipmaps?: boolean;
    levels?: number;
}

/**
 * This module manages the textures of the renderer.
 *
 * @private
 * @augments DataMap
 */
declare class Textures extends DataMap {
    /**
     * Constructs a new texture management component.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Backend} backend - The renderer's backend.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(renderer: Renderer, backend: Backend, info: Info);
    /**
     * The renderer.
     *
     * @type {Renderer}
     */
    renderer: Renderer;
    /**
     * The backend.
     *
     * @type {Backend}
     */
    backend: Backend;
    /**
     * Renderer component for managing metrics and monitoring data.
     *
     * @type {Info}
     */
    info: Info;
    /**
     * Updates the given render target. Based on the given render target configuration,
     * it updates the texture states representing the attachments of the framebuffer.
     *
     * @param {RenderTarget} renderTarget - The render target to update.
     * @param {number} [activeMipmapLevel=0] - The active mipmap level.
     */
    updateRenderTarget(renderTarget: RenderTarget, activeMipmapLevel?: number): void;
    /**
     * Updates the given texture. Depending on the texture state, this method
     * triggers the upload of texture data to the GPU memory. If the texture data are
     * not yet ready for the upload, it uses default texture data for as a placeholder.
     *
     * @param {Texture} texture - The texture to update.
     * @param {Object} [options={}] - The options.
     */
    updateTexture(texture: Texture, options?: TextureOptions): void;
    /**
     * Updates the sampler for the given texture. This method has no effect
     * for the WebGL backend since it has no concept of samplers. Texture
     * parameters are configured with the `texParameter()` command for each
     * texture.
     *
     * In WebGPU, samplers are objects like textures and it's possible to share
     * them when the texture parameters match.
     *
     * @param {Texture} texture - The texture to update the sampler for.
     * @return {string} The current sampler key.
     */
    updateSampler(texture: Texture): string;
    /**
     * Computes the size of the given texture and writes the result
     * into the target vector. This vector is also returned by the
     * method.
     *
     * If no texture data are available for the compute yet, the method
     * returns default size values.
     *
     * @param {Texture} texture - The texture to compute the size for.
     * @param {Vector3} target - The target vector.
     * @return {Vector3} The target vector.
     */
    getSize(texture: Texture, target?: Vector3): Vector3;
    /**
     * Computes the number of mipmap levels for the given texture.
     *
     * @param {Texture} texture - The texture.
     * @param {number} width - The texture's width.
     * @param {number} height - The texture's height.
     * @return {number} The number of mipmap levels.
     */
    getMipLevels(texture: Texture, width: number, height: number): number;
    /**
     * Returns `true` if the given texture makes use of mipmapping.
     *
     * @param {Texture} texture - The texture.
     * @return {boolean} Whether mipmaps are required or not.
     */
    needsMipmaps(texture: Texture): boolean;
    /**
     * Frees internal resources when the given render target isn't
     * required anymore.
     *
     * @param {RenderTarget} renderTarget - The render target to destroy.
     */
    _destroyRenderTarget(renderTarget: RenderTarget): void;
    /**
     * Frees internal resource when the given texture isn't
     * required anymore.
     *
     * @param {Texture} texture - The texture to destroy.
     */
    _destroyTexture(texture: Texture): void;
}

export default Textures;
