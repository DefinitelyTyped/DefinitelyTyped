import { DirectionalLight, Group, LightProbe, Object3DEventMap, Texture, WebGLRenderer } from "../../../src/Three.js";

export class SessionLightProbe {
    xrLight: XREstimatedLight;
    renderer: WebGLRenderer;
    lightProbe: LightProbe;
    xrWebGLBinding: XRWebGLBinding | null;
    estimationStartCallback: () => void;
    frameCallback: (this: SessionLightProbe, time: number, xrFrame: XRFrame) => void;

    constructor(
        xrLight: XREstimatedLight,
        renderer: WebGLRenderer,
        lightProbe: LightProbe,
        environmentEstimation: boolean,
        estimationStartCallback: () => void,
    );

    updateReflection: () => void;

    onXRFrame: XRFrameRequestCallback;

    dispose: () => void;
}

export interface XREstimatedLightEventMap extends Object3DEventMap {
    /**
     * Fires when the estimated lighting values start being updated.
     */
    estimationstart: {};
    /**
     * Fires when the estimated lighting values stop being updated.
     */
    estimationend: {};
}

/**
 * XREstimatedLight uses WebXR's light estimation to create a light probe, a directional light, and (optionally) an
 * environment map that model the user's real-world environment and lighting.
 * As WebXR updates the light and environment estimation, XREstimatedLight automatically updates the light probe,
 * directional light, and environment map.
 *
 * It's important to specify `light-estimation` as an optional or required feature when creating the WebXR session,
 * otherwise the light estimation can't work.
 *
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/XRLightProbe#browser_compatibility here} for browser
 * compatibility information, as this is still an experimental feature in WebXR.
 *
 * To use this, as with all files in the /examples directory, you will have to include the file separately in your HTML.
 */
export class XREstimatedLight extends Group<XREstimatedLightEventMap> {
    lightProbe: LightProbe;

    directionalLight: DirectionalLight;

    /**
     * The environment map estimated by WebXR. This is only available if environmentEstimation is `true`.
     *
     * It can be used as the {@link Scene.environment}, for {@link MeshStandardMaterial.envMap}, or as the
     * {@link Scene.background}.
     */
    environment: Texture;

    /**
     * @param renderer The renderer used to render the Scene. Mainly used to interact with WebXRManager.
     * @param environmentEstimation If `true`, use WebXR to estimate an environment map.
     */
    constructor(renderer: WebGLRenderer, environmentEstimation?: boolean);
}
