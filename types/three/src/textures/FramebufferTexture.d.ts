import { MagnificationTextureFilter, MinificationTextureFilter } from "../constants.js";
import { Texture } from "./Texture.js";

/**
 * This class can only be used in combination with {@link THREE.WebGLRenderer.copyFramebufferToTexture | WebGLRenderer.copyFramebufferToTexture()}.
 * @example
 * ```typescript
 * const pixelRatio = window.devicePixelRatio;
 * const textureSize = 128 * pixelRatio;
 *
 * // instantiate a framebuffer texture
 * const frameTexture = new FramebufferTexture( textureSize, textureSize, RGBAFormat );
 *
 * // calculate start position for copying part of the frame data
 * const vector = new Vector2();
 * vector.x = ( window.innerWidth * pixelRatio / 2 ) - ( textureSize / 2 );
 * vector.y = ( window.innerHeight * pixelRatio / 2 ) - ( textureSize / 2 );
 *
 * // render the scene
 * renderer.clear();
 * renderer.render( scene, camera );
 *
 * // copy part of the rendered frame into the framebuffer texture
 * renderer.copyFramebufferToTexture( frameTexture, vector );
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_framebuffer_texture | webgl_framebuffer_texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/FramebufferTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/FramebufferTexture.js | Source}
 */
export class FramebufferTexture extends Texture<FramebufferTextureImageData> {
    /**
     * Create a new instance of {@link FramebufferTexture}
     * @param width The width of the texture.
     * @param height The height of the texture.
     */
    constructor(width: number, height: number);

    /**
     * Read-only flag to check if a given object is of type {@link FramebufferTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isFramebufferTexture: true;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.NearestFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;
}

export interface FramebufferTextureImageData {
    width: number;
    height: number;
}
