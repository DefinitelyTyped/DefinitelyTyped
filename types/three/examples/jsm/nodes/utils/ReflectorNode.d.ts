import { Camera, Object3D, RenderTarget } from "three";
import TextureNode from "../accessors/TextureNode.js";
import { ShaderNodeObject } from "../shadernode/ShaderNode.js";

export interface ReflectorNodeParameters {
    target?: Object3D | undefined;
    resolution?: number | undefined;
    generateMipmaps?: boolean | undefined;
    bounces?: boolean | undefined;
}

export default class ReflectorNode extends TextureNode {
    target: Object3D;
    resolution: number;
    generateMipmaps: boolean;
    bounces: boolean;

    virtualCameras: WeakMap<Camera, Camera>;
    renderTargets: WeakMap<Camera, RenderTarget>;

    constructor(parameters?: ReflectorNodeParameters);

    getTextureNode(): TextureNode;

    getVirtualCamera(camera: Camera): Camera;

    getRenderTarget(camera: Camera): RenderTarget;
}

export const reflector: (parameters?: ReflectorNodeParameters) => ShaderNodeObject<ReflectorNode>;
