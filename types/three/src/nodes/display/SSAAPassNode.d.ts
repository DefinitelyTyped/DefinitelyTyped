import { Camera } from "../../cameras/Camera.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import { Color } from "../../math/Color.js";
import { Scene } from "../../scenes/Scene.js";
import UniformNode from "../core/UniformNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";
import PassNode from "./PassNode.js";

declare class SSAAPassNode extends PassNode {
    readonly isSSAAPassNode: boolean;

    sampleLevel: number;
    unbiased: boolean;
    clearColor: Color;
    clearAlpha: number;

    sampleWeight: UniformNode<number>;

    sampleRenderTarget: RenderTarget | null;

    constructor(scene: Scene, camera: Camera);
}

export default SSAAPassNode;

export const ssaaPass: (scene: Scene, camera: Camera) => ShaderNodeObject<SSAAPassNode>;
