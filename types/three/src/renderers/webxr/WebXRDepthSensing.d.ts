import { Mesh } from "../../objects/Mesh.js";
import { ExternalTexture } from "../../textures/ExternalTexture.js";
import { WebXRArrayCamera } from "./WebXRManager.js";

export class WebXRDepthSensing {
    texture: ExternalTexture | null;
    mesh: Mesh | null;

    depthNear: number;
    depthFar: number;

    constructor();

    init(depthData: XRWebGLDepthInformation, renderState: XRRenderState): void;

    getMesh(cameraXR: WebXRArrayCamera): Mesh | null;

    reset(): void;

    getDepthTexture(): ExternalTexture | null;
}
