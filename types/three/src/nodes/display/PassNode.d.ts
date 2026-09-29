import { Camera } from "../../cameras/Camera.js";
import { Layers } from "../../core/Layers.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget, RenderTargetOptions } from "../../core/RenderTarget.js";
import { Material } from "../../materials/Material.js";
import { Vector4 } from "../../math/Vector4.js";
import Lighting from "../../renderers/common/Lighting.js";
import Renderer from "../../renderers/common/Renderer.js";
import { Texture } from "../../textures/Texture.js";
import TextureNode from "../accessors/TextureNode.js";
import ContextNode from "../core/ContextNode.js";
import MRTNode from "../core/MRTNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

declare class PassTextureNode extends TextureNode {
    passNode: PassNode;

    readonly isPassTextureNode: boolean;

    constructor(passNode: PassNode, texture: Texture);
}

declare class PassMultipleTextureNode extends PassTextureNode {
    textureName: string;
    previousTexture: boolean;

    readonly isPassMultipleTextureNode: boolean;

    constructor(passNode: PassNode, textureName: string, previousTexture?: boolean);

    updateTexture(): void;
}

export interface PassNodeOptions extends RenderTargetOptions {
    autoClear?: boolean | undefined; // true
    autoClearColor?: boolean | undefined; // true
    autoClearDepth?: boolean | undefined; // true
    autoClearStencil?: boolean | undefined; // true
}

declare class PassNode extends TempNode<"vec4"> {
    scope: PassNodeScope;
    scene: Object3D;
    camera: Camera;
    options: PassNodeOptions;

    renderTarget: RenderTarget;

    overrideMaterial: Material | null;
    transparent: boolean;
    opaque: boolean;
    lighting: Lighting | null;

    autoClear: boolean;
    autoClearColor: boolean;
    autoClearDepth: boolean;
    autoClearStencil: boolean;

    contextNode: ContextNode<unknown> | null;

    readonly isPassNode: true;

    constructor(scope: PassNodeScope, scene: Object3D, camera: Camera, options?: PassNodeOptions);

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

    getPreviousTextureNode(name?: string): TextureNode;

    getViewZNode(name?: string): Node<"float">;

    getLinearDepthNode(name?: string): Node<"float">;

    compileAsync(renderer: Renderer): Promise<void>;

    setSize(width: number, height: number): void;

    setScissor(x: number, y: number, width: number, height: number): void;
    setScissor(x: Vector4): void;

    setViewport(x: number, y: number, width: number, height: number): void;
    setViewport(x: Vector4): void;

    dispose(): void;

    static get COLOR(): "color";
    static get DEPTH(): "depth";
}

export type PassNodeScope = typeof PassNode.COLOR | typeof PassNode.DEPTH;

export default PassNode;

export const pass: (scene: Object3D, camera: Camera, options?: PassNodeOptions) => PassNode;
export const passTexture: (pass: PassNode, texture: Texture) => PassTextureNode;
export const depthPass: (scene: Object3D, camera: Camera, options?: PassNodeOptions) => PassNode;
