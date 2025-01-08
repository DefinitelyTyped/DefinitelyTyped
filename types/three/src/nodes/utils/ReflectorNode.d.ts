import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export interface ReflectorNodeParameters {
    target?: Object3D | undefined;
    resolution?: number | undefined;
    generateMipmaps?: boolean | undefined;
    bounces?: boolean | undefined;
}

declare class ReflectorNode extends TextureNode {
    constructor(parameters?: ReflectorNodeParameters);

    get reflector(): ReflectorBaseNode;

    get target(): Object3D;

    getDepthNode(): ShaderNodeObject<ReflectorNode>;
}

declare class ReflectorBaseNode extends Node {
    textureNode: TextureNode;

    target: Object3D;
    resolution: number;
    generateMipmaps: boolean;
    bounces: boolean;

    virtualCameras: WeakMap<Camera, Camera>;
    renderTargets: WeakMap<Camera, RenderTarget>;

    constructor(textureNode: TextureNode, parameters?: ReflectorNodeParameters);

    getVirtualCamera(camera: Camera): Camera;

    getRenderTarget(camera: Camera): RenderTarget;
}

export const reflector: (parameters?: ReflectorNodeParameters) => ShaderNodeObject<ReflectorNode>;

export default ReflectorNode;
