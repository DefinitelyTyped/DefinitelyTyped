import { Camera } from "../../cameras/Camera.js";
import { Layers } from "../../core/Layers.js";
import { RenderTarget, RenderTargetOptions } from "../../core/RenderTarget.js";
import { Vector4 } from "../../math/Vector4.js";
import Renderer from "../../renderers/common/Renderer.js";
import { Scene } from "../../scenes/Scene.js";
import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import MRTNode from "../core/MRTNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class PassTextureNode extends TextureNode {
    passNode: PassNode;

    constructor(passNode: PassNode, texture: Texture);
}

declare class PassMultipleTextureNode extends PassTextureNode {
    textureName: string;
    previousTexture: boolean;

    constructor(passNode: PassNode, textureName: string, previousTexture?: boolean);

    updateTexture(): void;
}

declare class PassNode extends TempNode {
    scope: PassNodeScope;
    scene: Scene;
    camera: Camera;

    renderTarget: RenderTarget;

    readonly isPassNode: true;

    constructor(scope: PassNodeScope, scene: Scene, camera: Camera, options?: RenderTargetOptions);

    setResolution(resolution: number): this;

    getResolution(): number;

    setLayers(layers: Layers): this;

    getLayers(): Layers;

    setMRT(mrt: MRTNode | null): this;

    getMRT(): MRTNode | null;

    getTexture(name: string): Texture;

    getPreviousTexture(name: string): Texture;

    toggleTexture(name: string): void;

    getTextureNode(name?: string): ShaderNodeObject<TextureNode>;

    getPreviousTextureNode(name?: string): ShaderNodeObject<Node>;

    getViewZNode(name?: string): ShaderNodeObject<Node>;

    getLinearDepthNode(name?: string): ShaderNodeObject<Node>;

    compileAsync(renderer: Renderer): Promise<void>;

    setSize(width: number, height: number): void;

    setScissor(x: number, y: number, width: number, height: number): void;
    setScissor(x: Vector4): void;

    setViewport(x: number, y: number, width: number, height: number): void;
    setViewport(x: Vector4): void;

    setPixelRatio(pixelRatio: number): void;

    dispose(): void;

    static COLOR: "color";
    static DEPTH: "depth";
}

export type PassNodeScope = typeof PassNode.COLOR | typeof PassNode.DEPTH;

export default PassNode;

export const pass: (scene: Scene, camera: Camera, options?: RenderTargetOptions) => ShaderNodeObject<PassNode>;
export const passTexture: (pass: PassNode, texture: Texture) => ShaderNodeObject<PassTextureNode>;
export const depthPass: (scene: Scene, camera: Camera, options?: RenderTargetOptions) => ShaderNodeObject<PassNode>;
