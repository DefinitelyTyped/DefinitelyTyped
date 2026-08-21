import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { RenderTarget } from "../../core/RenderTarget.js";
import TextureNode from "../accessors/TextureNode.js";
import Node from "../core/Node.js";

export interface ReflectorNodeParameters {
    target?: Object3D | undefined;
    /**
     * @deprecated The "resolution" parameter has been renamed to "resolutionScale".
     */
    resolution?: number | undefined;
    resolutionScale?: number | undefined;
    generateMipmaps?: boolean | undefined;
    bounces?: boolean | undefined;
    depth?: boolean | undefined;
    samples?: number | undefined;
}

declare class ReflectorNode extends TextureNode {
    constructor(parameters?: ReflectorNodeParameters);

    get reflector(): ReflectorBaseNode;

    get target(): Object3D;

    getDepthNode(): ReflectorNode;
}

declare class ReflectorBaseNode extends Node {
    textureNode: TextureNode;

    target: Object3D;
    resolutionScale: number;
    generateMipmaps: boolean;
    bounces: boolean;

    virtualCameras: WeakMap<Camera, Camera>;
    renderTargets: Map<Camera, RenderTarget>;
    forceUpdate: boolean;
    hasOutput: boolean;

    constructor(textureNode: TextureNode, parameters?: ReflectorNodeParameters);

    getVirtualCamera(camera: Camera): Camera;

    getRenderTarget(camera: Camera): RenderTarget;

    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    get resolution(): number;
    /**
     * @deprecated The "resolution" property has been renamed to "resolutionScale" and is now of type `number`.
     */
    set resolution(value: number);
}

export const reflector: (parameters?: ReflectorNodeParameters) => ReflectorNode;

export default ReflectorNode;
