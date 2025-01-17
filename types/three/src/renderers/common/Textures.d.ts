import { RenderTarget } from "../../core/RenderTarget.js";
import { Vector3 } from "../../math/Vector3.js";
import { DepthTexture } from "../../textures/DepthTexture.js";
import { Texture } from "../../textures/Texture.js";
import Backend from "./Backend.js";
import DataMap from "./DataMap.js";
import Info from "./Info.js";
import Renderer from "./Renderer.js";
type SizeVector3Unitialized = Vector3 & {
    width?: number;
    height?: number;
    depth?: number;
};
type SizeVector3 = Vector3 & {
    width: number;
    height: number;
    depth: number;
};
interface RenderTargetData {
    depthTextureMips?: {
        [activeMipmapLevel: number]: DepthTexture;
    };
    width?: number;
    height?: number;
    textures?: Texture[];
    depthTexture?: DepthTexture;
    depth?: boolean;
    stencil?: boolean;
    renderTarget?: RenderTarget;
    sampleCount?: number;
    initialized?: boolean;
}
interface TextureData {
    initialized?: boolean;
    version?: number;
    isDefaultTexture?: boolean;
    generation?: number;
}
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
declare class Textures extends DataMap<{
    renderTarget: {
        key: RenderTarget;
        value: RenderTargetData;
    };
    texture: {
        key: Texture;
        value: TextureData;
    };
}> {
    renderer: Renderer;
    backend: Backend;
    info: Info;
    /**
     * Constructs a new texture management component.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Backend} backend - The renderer's backend.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(renderer: Renderer, backend: Backend, info: Info);
    /**
     * Updates the given render target. Based on the given render target configuration,
     * it updates the texture states representing the attachments of the framebuffer.
     *
     * @param {RenderTarget} renderTarget - The render target to update.
     * @param {Number} [activeMipmapLevel=0] - The active mipmap level.
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
    getSize(texture: Texture, target?: SizeVector3Unitialized): SizeVector3;
    /**
     * Computes the number of mipmap levels for the given texture.
     *
     * @param {Texture} texture - The texture.
     * @param {Number} width - The texture's width.
     * @param {Number} height - The texture's height.
     * @return {Number} The number of mipmap levels.
     */
    getMipLevels(texture: Texture, width: number, height: number): number;
    /**
     * Returns `true` if the given texture requires mipmaps.
     *
     * @param {Texture} texture - The texture.
     * @return {Boolean} Whether mipmaps are required or not.
     */
    needsMipmaps(texture: Texture): boolean;
    /**
     * Returns `true` if the given texture is an environment map.
     *
     * @param {Texture} texture - The texture.
     * @return {Boolean} Whether the given texture is an environment map or not.
     */
    isEnvironmentTexture(texture: Texture): boolean;
    /**
     * Frees internal resource when the given texture isn't
     * required anymore.
     *
     * @param {Texture} texture - The texture to destroy.
     */
    _destroyTexture(texture: Texture): void;
}
export default Textures;
