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
    constructor(renderer: Renderer, backend: Backend, info: Info);
    updateRenderTarget(renderTarget: RenderTarget, activeMipmapLevel?: number): void;
    updateTexture(texture: Texture, options?: TextureOptions): void;
    getSize(texture: Texture, target?: SizeVector3Unitialized): SizeVector3;
    getMipLevels(texture: Texture, width: number, height: number): number;
    needsMipmaps(texture: Texture): boolean;
    isEnvironmentTexture(texture: Texture): boolean;
    _destroyTexture(texture: Texture): void;
}
export default Textures;
