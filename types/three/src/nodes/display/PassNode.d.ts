import { Camera } from "../../cameras/Camera.js";
import { Layers } from "../../core/Layers.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget, RenderTargetOptions } from "../../core/RenderTarget.js";
import { Material } from "../../materials/Material.js";
import { Vector4 } from "../../math/Vector4.js";
import Renderer from "../../renderers/common/Renderer.js";
import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import ContextNode from "../core/ContextNode.js";
import MRTNode from "../core/MRTNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

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
    scene: Object3D;
    camera: Camera;

    renderTarget: RenderTarget;

    overrideMaterial: Material | null;
    transparent: boolean;
    opaque: boolean;

    contextNode: ContextNode | null;

    readonly isPassNode: true;

    constructor(scope: PassNodeScope, scene: Object3D, camera: Camera, options?: RenderTargetOptions);

    setResolutionScale(resolution: number): this;

    getResolutionScale(): number;

    /**
     * @deprecated Use {@link PassNode#setResolutionScale `setResolutionScale()`} instead.
     */
    setResolution(resolution: number): this;

    /**
     * @deprecated Use {@link PassNode#getResolutionScale `getResolutionScale()`} instead.
     */
    getResolution(): number;

    setLayers(layers: Layers): this;

    getLayers(): Layers;

    setMRT(mrt: MRTNode | null): this;

    getMRT(): MRTNode | null;

    getTexture(name: string): Texture;

    getPreviousTexture(name: string): Texture;

    toggleTexture(name: string): void;

    getTextureNode(name?: string): TextureNode;

    getPreviousTextureNode(name?: string): Node;

    getViewZNode(name?: string): Node;

    getLinearDepthNode(name?: string): Node;

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

export const pass: (scene: Object3D, camera: Camera, options?: RenderTargetOptions) => PassNode;
export const passTexture: (pass: PassNode, texture: Texture) => PassTextureNode;
export const depthPass: (scene: Object3D, camera: Camera, options?: RenderTargetOptions) => PassNode;
