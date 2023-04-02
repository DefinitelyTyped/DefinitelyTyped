import { Texture } from './Texture';
import {
    Mapping,
    Wrapping,
    PixelFormat,
    TextureDataType,
    TextureEncoding,
    MagnificationTextureFilter,
    MinificationTextureFilter,
    CubeTextureMapping,
} from '../constants';

/**
 * Creates a cube texture made up of six images.
 * @remarks
 * {@link CubeTexture} is almost equivalent in functionality and usage to {@link Texture}.
 * The only differences are that the images are an array of _6_ images as opposed to a single image,
 * and the mapping options are {@link THREE.CubeReflectionMapping} (default) or {@link THREE.CubeRefractionMapping}
 * @example
 * ```typescript
 * const loader = new THREE.CubeTextureLoader();
 * loader.setPath('textures/cube/pisa/');
 * const textureCube = loader.load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']);
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffffff,
 *     envMap: textureCube
 * });
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/CubeTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/CubeTexture.js | Source}
 */
export class CubeTexture extends Texture {
    /**
     * This creates a new {@link THREE.CubeTexture | CubeTexture} object.
     * @param images
     * @param mapping See {@link CubeTexture.mapping | .mapping}. Default {@link THREE.CubeReflectionMapping}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearMipmapLinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     * @param encoding See {@link Texture.encoding | .encoding}. Default {@link THREE.LinearEncoding}
     */
    constructor(
        images?: any[], // HTMLImageElement or HTMLCanvasElement
        mapping?: CubeTextureMapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    /**
     * Read-only flag to check if a given object is of type {@link CubeTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isCubeTexture: true;

    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    get image(): any;
    set image(data: any);

    /**
     * An image object, typically created using the {@link THREE.CubeTextureLoader.load | CubeTextureLoader.load()} method.
     * @see {@link Texture.image}
     */
    get images(): any;
    set images(data: any);

    /**
     * @inheritDoc
     * @defaultValue {@link THREE.CubeReflectionMapping}
     */
    mapping: CubeTextureMapping;

    /**
     * @inheritDoc
     * @defaultValue `false`
     */
    flipY: boolean;
}
