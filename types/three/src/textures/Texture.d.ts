import { Vector2 } from './../math/Vector2';
import { Matrix3 } from './../math/Matrix3';
import { Source } from './Source';
import { EventDispatcher } from './../core/EventDispatcher';
import {
    Mapping,
    Wrapping,
    TextureFilter,
    PixelFormat,
    PixelFormatGPU,
    TextureDataType,
    TextureEncoding,
} from '../constants';

export class Texture extends EventDispatcher {
    /**
     * @param [image]
     * @param [mapping=THREE.Texture.DEFAULT_MAPPING]
     * @param [wrapS=THREE.ClampToEdgeWrapping]
     * @param [wrapT=THREE.ClampToEdgeWrapping]
     * @param [magFilter=THREE.LinearFilter]
     * @param [minFilter=THREE.LinearMipmapLinearFilter]
     * @param [format=THREE.RGBAFormat]
     * @param [type=THREE.UnsignedByteType]
     * @param [anisotropy=1]
     * @param [encoding=THREE.LinearEncoding]
     */
    constructor(
        image?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: TextureFilter,
        minFilter?: TextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
        encoding?: TextureEncoding,
    );

    id: number;
    uuid: string;

    /**
     * @default ''
     */
    name: string;
    sourceFile: string;

    /**
     * The data definition of a texture. A reference to the data source can be shared across textures.
     * This is often useful in context of spritesheets where multiple textures render the same data but with different texture transformations.
     */
    source: Source;

    /**
     * An image object, typically created using the {@link TextureLoader.load} method.
     * This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     *
     * To use video as a texture you need to have a playing HTML5
     * video element as a source for your texture image and continuously update this texture
     * as long as video is playing - the {@link VideoTexture} class handles this automatically.
     */
    get image(): any;

    /**
     * An image object, typically created using the {@link TextureLoader.load} method.
     * This can be any image (e.g., PNG, JPG, GIF, DDS) or video (e.g., MP4, OGG/OGV) type supported by three.js.
     *
     * To use video as a texture you need to have a playing HTML5
     * video element as a source for your texture image and continuously update this texture
     * as long as video is playing - the {@link VideoTexture} class handles this automatically.
     */
    set image(data: any);

    /**
     * @default []
     */
    mipmaps: any[]; // ImageData[] for 2D textures and CubeTexture[] for cube textures;

    /**
     * @default THREE.Texture.DEFAULT_MAPPING
     */
    mapping: Mapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapS: Wrapping;

    /**
     * @default THREE.ClampToEdgeWrapping
     */
    wrapT: Wrapping;

    /**
     * @default THREE.LinearFilter
     */
    magFilter: TextureFilter;

    /**
     * @default THREE.LinearMipmapLinearFilter
     */
    minFilter: TextureFilter;

    /**
     * @default 1
     */
    anisotropy: number;

    /**
     * @default THREE.RGBAFormat
     */
    format: PixelFormat;

    internalFormat: PixelFormatGPU | null;

    /**
     * @default THREE.UnsignedByteType
     */
    type: TextureDataType;

    /**
     * @default new THREE.Matrix3()
     */
    matrix: Matrix3;

    /**
     * @default true
     */
    matrixAutoUpdate: boolean;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    offset: Vector2;

    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    repeat: Vector2;

    /**
     * @default new THREE.Vector2( 0, 0 )
     */
    center: Vector2;

    /**
     * @default 0
     */
    rotation: number;

    /**
     * @default true
     */
    generateMipmaps: boolean;

    /**
     * @default false
     */
    premultiplyAlpha: boolean;

    /**
     * @default true
     */
    flipY: boolean;

    /**
     * @default 4
     */
    unpackAlignment: number;

    /**
     * @default THREE.LinearEncoding
     */
    encoding: TextureEncoding;

    /**
     * @default false
     */
    isRenderTargetTexture: boolean;

    /**
     * @default false
     */
    needsPMREMUpdate: boolean;

    /**
     * An object that can be used to store custom data about the Material. It should not hold references to functions as these will not be cloned.
     * @default {}
     */
    userData: any;

    /**
     * @default 0
     */
    version: number;
    set needsUpdate(value: boolean);
    readonly isTexture: true;

    onUpdate: () => void;
    static DEFAULT_IMAGE: any;
    static DEFAULT_MAPPING: any;

    clone(): this;
    copy(source: Texture): this;
    toJSON(meta: any): any;
    dispose(): void;
    transformUv(uv: Vector2): Vector2;
    updateMatrix(): void;
}
