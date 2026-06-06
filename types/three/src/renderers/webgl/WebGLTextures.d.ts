import { RenderTarget } from "../../core/RenderTarget.js";
import { Texture } from "../../textures/Texture.js";
import { WebGLCapabilities } from "./WebGLCapabilities.js";
import { WebGLExtensions } from "./WebGLExtensions.js";
import { WebGLInfo } from "./WebGLInfo.js";
import { WebGLProperties } from "./WebGLProperties.js";
import { WebGLState } from "./WebGLState.js";
import { WebGLUtils } from "./WebGLUtils.js";

export class WebGLTextures {
    constructor(
        gl: WebGLRenderingContext,
        extensions: WebGLExtensions,
        state: WebGLState,
        properties: WebGLProperties,
        capabilities: WebGLCapabilities,
        utils: WebGLUtils,
        info: WebGLInfo,
    );

    allocateTextureUnit(): void;
    resetTextureUnits(): void;

    setTexture2D(texture: Texture, slot: number): void;
    setTexture2DArray(texture: Texture, slot: number): void;
    setTexture3D(texture: Texture, slot: number): void;
    setTextureCube(texture: Texture, slot: number): void;
    setupRenderTarget(renderTarget: RenderTarget): void;
    updateRenderTargetMipmap(renderTarget: RenderTarget): void;
    updateMultisampleRenderTarget(renderTarget: RenderTarget): void;
}
