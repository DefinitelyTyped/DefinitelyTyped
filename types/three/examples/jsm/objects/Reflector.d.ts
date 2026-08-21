import { BufferGeometry, Camera, ColorRepresentation, Mesh, WebGLRenderTarget } from "three";

export interface ReflectorOptions {
    color?: ColorRepresentation | undefined;
    textureWidth?: number | undefined;
    textureHeight?: number | undefined;
    clipBias?: number | undefined;
    shader?: object | undefined;
    multisample?: number | undefined;
}

export class Reflector extends Mesh {
    /**
     * This flag can be used for type testing.
     *
     * @type {boolean}
     * @readonly
     * @default true
     */
    readonly isReflector: boolean;

    /**
     * Whether to force an update, no matter if the reflector
     * is in view or not.
     *
     * @type {boolean}
     * @default false
     */
    forceUpdate: boolean;

    /**
     * Returns the reflector's internal render target.
     *
     * @return {WebGLRenderTarget} The internal render target
     */
    getRenderTarget: () => WebGLRenderTarget;

    /**
     * Frees the GPU-related resources allocated by this instance. Call this
     * method whenever this instance is no longer used in your app.
     */
    dispose: () => void;

    /**
     * Returns a reflection camera for the given camera. The reflection camera is used to
     * render the scene from the reflector's view so correct reflections can be produced.
     *
     * @param {Camera} camera - The scene's camera.
     * @return {Camera} The corresponding reflection camera.
     */
    getReflectionCamera: (camera: Camera) => Camera;

    constructor(geometry: BufferGeometry, options?: ReflectorOptions);
}
