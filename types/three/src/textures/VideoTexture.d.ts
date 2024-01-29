import { Texture } from './Texture.js';
import {
    Mapping,
    Wrapping,
    PixelFormat,
    TextureDataType,
    MagnificationTextureFilter,
    MinificationTextureFilter,
} from '../constants.js';

/**
 * Creates a texture for use with a video.
 * @remarks
 * Note: After the initial use of a texture, the video cannot be changed
 * Instead, call {@link dispose | .dispose()} on the texture and instantiate a new one.
 * @example
 * ```typescript
 * // assuming you have created a HTML video element with id="video"
 * const video = document.getElementById('video');
 * const texture = new THREE.VideoTexture(video);
 * ```
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video | materials / video}
 * @see Example: {@link https://threejs.org/examples/#webgl_materials_video_webcam | materials / video / webcam}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_kinect | video / kinect}
 * @see Example: {@link https://threejs.org/examples/#webgl_video_panorama_equirectangular | video / panorama / equirectangular}
 * @see Example: {@link https://threejs.org/examples/#webxr_vr_video | vr / video}
 * @see {@link https://threejs.org/docs/index.html#api/en/textures/VideoTexture | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/textures/VideoTexture.js | Source}
 */
export class VideoTexture extends Texture {
    /**
     * Create a new instance of {@link VideoTexture}
     * @param video The video element to use as the texture.
     * @param mapping See {@link Texture.mapping | .mapping}. Default {@link THREE.Texture.DEFAULT_MAPPING}
     * @param wrapS See {@link Texture.wrapS | .wrapS}. Default {@link THREE.ClampToEdgeWrapping}
     * @param wrapT See {@link Texture.wrapT | .wrapT}. Default {@link THREE.ClampToEdgeWrapping}
     * @param magFilter See {@link Texture.magFilter | .magFilter}. Default {@link THREE.LinearFilter}
     * @param minFilter  See {@link Texture.minFilter | .minFilter}. Default {@link THREE.LinearFilter}
     * @param format See {@link Texture.format | .format}. Default {@link THREE.RGBAFormat}
     * @param type See {@link Texture.type | .type}. Default {@link THREE.UnsignedByteType}
     * @param anisotropy See {@link Texture.anisotropy | .anisotropy}. Default {@link THREE.Texture.DEFAULT_ANISOTROPY}
     */
    constructor(
        video: HTMLVideoElement,
        mapping?: Mapping,
        wrapS?: Wrapping,
        wrapT?: Wrapping,
        magFilter?: MagnificationTextureFilter,
        minFilter?: MinificationTextureFilter,
        format?: PixelFormat,
        type?: TextureDataType,
        anisotropy?: number,
    );

    /**
     * Read-only flag to check if a given object is of type {@link VideoTexture}.
     * @remarks This is a _constant_ value
     * @defaultValue `true`
     */
    readonly isVideoTexture: true;

    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    magFilter: MagnificationTextureFilter;

    /**
     * @override
     * @defaultValue {@link THREE.LinearFilter}
     */
    minFilter: MinificationTextureFilter;

    /**
     * @override
     * @defaultValue `false`
     */
    generateMipmaps: boolean;

    /**
     * @override
     * You will **not** need to set this manually here as it is handled by the {@link update | update()} method.
     */
    set needsUpdate(value: boolean);

    /**
     * This is called automatically and sets {@link needsUpdate | .needsUpdate } to `true` every time a new frame is available.
     */
    update(): void;
}
