import { Camera, RenderTarget, Scene, Texture } from "three";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

declare class PassTextureNode extends TextureNode {
    passNode: PassNode;

    constructor(passNode: PassNode, texture: Texture);
}

export default class PassNode extends TempNode {
    scope: PassNodeScope;
    scene: Scene;
    camera: Camera;

    renderTarget: RenderTarget;

    readonly isPassNode: true;

    constructor(scope: PassNodeScope, scene: Scene, camera: Camera);

    getTextureNode(): ShaderNodeObject<PassTextureNode>;

    getTextureDepthNode(): ShaderNodeObject<PassTextureNode>;

    getDepthNode(): ShaderNodeObject<Node>;

    setSize(width: number, height: number): void;

    setPixelRatio(pixelRatio: number): void;

    dispose(): void;

    static COLOR: "color";
    static DEPTH: "depth";
}

export type PassNodeScope = typeof PassNode.COLOR | typeof PassNode.DEPTH;

export const pass: (scene: Scene, camera: Camera) => ShaderNodeObject<PassNode>;
export const texturePass: (pass: PassNode, texture: Texture) => ShaderNodeObject<PassTextureNode>;
export const depthPass: (scene: Scene, camera: Camera) => ShaderNodeObject<PassNode>;
