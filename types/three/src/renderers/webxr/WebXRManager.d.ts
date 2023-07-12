// https://threejs.org/docs/#api/en/renderers/webxr/WebXRManager

/// <reference types="webxr" />

import { Vector4 } from '../../math/Vector4.js';
import { ArrayCamera } from '../../cameras/ArrayCamera.js';
import { PerspectiveCamera } from '../../cameras/PerspectiveCamera.js';
import { EventDispatcher } from '../../core/EventDispatcher.js';
import { XRTargetRaySpace, XRGripSpace, XRHandSpace } from './WebXRController.js';

export type WebXRCamera = PerspectiveCamera & { viewport: Vector4 };
export type WebXRArrayCamera = Omit<ArrayCamera, 'cameras'> & { cameras: [WebXRCamera, WebXRCamera] };

export class WebXRManager extends EventDispatcher {
    constructor(renderer: any, gl: WebGLRenderingContext);

    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default false
     */
    isPresenting: boolean;

    /**
     * @default true
     */
    cameraAutoUpdate: boolean;

    getController(index: number): XRTargetRaySpace;

    getControllerGrip(index: number): XRGripSpace;

    getHand(index: number): XRHandSpace;

    setFramebufferScaleFactor(value: number): void;

    setReferenceSpaceType(value: XRReferenceSpaceType): void;

    getReferenceSpace(): XRReferenceSpace | null;

    setReferenceSpace(value: XRReferenceSpace): void;

    getBaseLayer(): XRWebGLLayer | XRProjectionLayer;

    getBinding(): XRWebGLBinding;

    getFrame(): XRFrame;

    getSession(): XRSession | null;

    setSession(value: XRSession | null): Promise<void>;

    getCamera(): WebXRArrayCamera;

    updateCamera(camera: PerspectiveCamera): void;

    setAnimationLoop(callback: XRFrameRequestCallback | null): void;

    getFoveation(): number | undefined;

    setFoveation(value: number): void;

    dispose(): void;
}
