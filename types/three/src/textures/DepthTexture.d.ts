import { Texture } from './Texture.js';
import {
    Mapping,
    Wrapping,
    TextureDataType,
    DeepTexturePixelFormat,
    MagnificationTextureFilter,
    MinificationTextureFilter,
    TextureComparisonFunction,
} from '../constants.js';

/**
 * This class can be used to automatically save the depth information of a rendering into a texture
 * @remarks
 * When using a **WebGL1** rendering context, {@link DepthTexture} requires support for the
 * {@link https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture/ | WEBGL_depth_texture} extension.
 * @see Example: {@link https://threejs.org/examples/#webgl_depth_texture | depth / texture}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/DepthTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/DepthTexture.js | Source}
 */
export class DepthTexture extends Texture {
    /**
     * Create a new instance of {@link DepthTexture}
     * @param width Width of the texture.
     * @param height Height of the texture.
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType} or {@link THREE.UnsignedInt248Type}
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.NearestFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.NearestFilter}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param format See {@link DepthTexture.format | .format}. Default {@link THREE.DepthFormat}
     */
    constructor(
        width: number,
        height: number,
        type?: TextureDataType,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        anisotropy?: number,
        format?: DeepTexturePixelFormat,
    );

    /**
     * Read-only flag to check if a given object is of type {@link DepthTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isDepthTexture: true;

    /**
     * Overridden with a record type holding width and height.
     * @override
     */
    get image(): { width: number; height: number };
    set image(value: { width: number; height: number });

    /**
     * @override
     * @defaultValue `false`
     */
    flipY: boolean;

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
     * @override Depth textures do not use mipmaps.
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * @see {@link Texture.format | Texture.format}
     * @defaultValue {@link THREE.DepthFormat}.
     */
    format: DeepTexturePixelFormat;

    /**
     * @override
     * @defaultValue {@link THREE.UnsignedByteType} when {@link format | .format} === {@link THREE.DepthFormat}
     * @defaultValue {@link THREE.UnsignedInt248Type} when {@link format | .format} === {@link THREE.DepthStencilFormat}
     */
    type: TextureDataType;

    /**
     * This is used to define the comparison function used when comparing texels in the depth texture to the value in
     * the depth buffer. Default is `null` which means comparison is disabled.
     *
     * See {@link THREE.TextureComparisonFunction} for functions.
     */
    compareFunction: TextureComparisonFunction | null;
}
