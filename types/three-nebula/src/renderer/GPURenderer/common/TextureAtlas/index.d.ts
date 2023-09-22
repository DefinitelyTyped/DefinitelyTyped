import { RENDERER_TYPE_GPU_DESKTOP, RENDERER_TYPE_GPU_MOBILE } from "../../../types";
/**
 * Dynamic texture atlas for performant support of systems with multiple emitters and textures.
 */
export default class TextureAtlas {
    constructor(renderer: object, shouldDebug: boolean);
    shouldDebug: boolean;
    rendererType: typeof RENDERER_TYPE_GPU_DESKTOP | typeof RENDERER_TYPE_GPU_MOBILE;
    indexData: Float32Array;
    canvas: HTMLCanvasElement;
    entries: any[];
    atlasIndex: THREE.CanvasTexture;
    /**
     * Logs to the console when in dev mode.
     * @return void
     */
    log(...args: any[]): void;
    /**
     * Debugs the texture atlas by rendering it to a canvas in the DOM.
     * @return void
     */
    debug(): void;
    /**
     * Adds a texture to the texture atlas and flags that the atlas needs to be updated.
     * @return void
     */
    addTexture(texture: object | THREE.Texture): void;
    /**
     * Updates the texture atlas. Will only rebuild the atlas if all images are loaded.
     * @return void
     */
    update(): void;
    /**
     * Disposes of the textures used by the texture atlas.
     *
     * @return void
     */
    destroy(): void;
}
