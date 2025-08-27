import { Vector3 } from "../math/Vector3.js";
import { WebGLRenderer } from "../renderers/WebGLRenderer.js";
import { WebGLRenderTarget } from "../renderers/WebGLRenderTarget.js";
import { Scene } from "../scenes/Scene.js";
import { CubeTexture } from "../textures/CubeTexture.js";
import { Texture } from "../textures/Texture.js";

export interface PMREMGeneratorOptions {
    size?: number | undefined;
    position?: Vector3 | undefined;
}

/**
 * This class generates a Prefiltered, Mipmapped Radiance Environment Map (PMREM) from a cubeMap environment texture.
 * @remarks
 * This allows different levels of blur to be quickly accessed based on material roughness
 * Unlike a traditional mipmap chain, it only goes down to the LOD_MIN level (above), and then creates extra even more filtered 'mips' at the same LOD_MIN resolution,
 * associated with higher roughness levels
 * In this way we maintain resolution to smoothly interpolate diffuse lighting while limiting sampling computation.
 * @remarks
 * Note: The minimum {@link THREE.MeshStandardMaterial | MeshStandardMaterial}'s roughness depends on the size of the provided texture
 * If your render has small dimensions or the shiny parts have a lot of curvature, you may still be able to get away with a smaller texture size.
 *
 * | texture size | minimum roughness  |
 * |--------------|--------------------|
 * | 16           | 0.21               |
 * | 32           | 0.15               |
 * | 64           | 0.11               |
 * | 128          | 0.076              |
 * | 256          | 0.054              |
 * | 512          | 0.038              |
 * | 1024         | 0.027              |
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/PMREMGenerator.js | Source}
 */
export class PMREMGenerator {
    /**
     * This constructor creates a new PMREMGenerator.
     * @param renderer
     */
    constructor(renderer: WebGLRenderer);

    /**
     * Generates a PMREM from a supplied Scene, which can be faster than using an image if networking bandwidth is low
     * @remarks
     * Optional near and far planes ensure the scene is rendered in its entirety.
     * @param scene The given scene.
     * @param sigma Specifies a blur radius in radians to be applied to the scene before PMREM generation. Default `0`.
     * @param near The near plane value. Default `0.1`.
     * @param far The far plane value. Default `100`.
     * @param {?Object} [options={}]
     */
    fromScene(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): WebGLRenderTarget;

    /**
     * Generates a PMREM from an equirectangular texture, which can be either LDR or HDR. The ideal input image size is
     * 1k (1024 x 512), as this matches best with the 256 x 256 cubemap output. The smallest supported equirectangular
     * image size is 64 x 32.
     */
    fromEquirectangular(equirectangular: Texture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;

    /**
     * Generates a PMREM from an cubemap texture, which can be either LDR or HDR. The ideal input cube size is
     * 256 x 256, as this matches best with the 256 x 256 cubemap output. The smallest supported cube size is 16 x 16.
     */
    fromCubemap(cubemap: CubeTexture, renderTarget?: WebGLRenderTarget | null): WebGLRenderTarget;

    /**
     * Pre-compiles the cubemap shader
     * @remarks
     * You can get faster start-up by invoking this method during your texture's network fetch for increased concurrency.
     */
    compileCubemapShader(): void;

    /**
     * Pre-compiles the equirectangular shader
     * @remarks
     * You can get faster start-up by invoking this method during your texture's network fetch for increased concurrency.
     */
    compileEquirectangularShader(): void;

    /**
     * Frees the GPU-related resources allocated by this instance
     * @remarks
     * Call this method whenever this instance is no longer used in your app.
     */
    dispose(): void;
}
