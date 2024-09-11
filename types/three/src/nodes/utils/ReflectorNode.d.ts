import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

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
