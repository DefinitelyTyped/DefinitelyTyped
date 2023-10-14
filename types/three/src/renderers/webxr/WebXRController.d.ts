import { Group } from '../../objects/Group.js';
import { Vector3 } from '../../math/Vector3.js';
import { Object3DEventMap } from '../../core/Object3D.js';

export type XRControllerEventType = XRSessionEventType | XRInputSourceEventType | 'disconnected' | 'connected';

export class XRJointSpace extends Group {
    readonly jointRadius: number | undefined;
}

export type XRHandJoints = Record<XRHandJoint, XRJointSpace>;

export interface XRHandInputState {
    pinching: boolean;
}

export interface WebXRSpaceEventMap extends Object3DEventMap {
    select: { data: XRInputSource };
    selectstart: { data: XRInputSource };
    selectend: { data: XRInputSource };
    squeeze: { data: XRInputSource };
    squeezestart: { data: XRInputSource };
    squeezeend: { data: XRInputSource };

    connected: { data: XRInputSource };
    disconnected: { data: XRInputSource };

    pinchend: { handedness: XRHandedness; target: WebXRController }; // This Event break the THREE.EventDispatcher contract, replacing the target to the wrong instance.
    pinchstart: { handedness: XRHandedness; target: WebXRController }; // This Event break the THREE.EventDispatcher contract, replacing the target to the wrong instance.

    move: {};
}

export class XRHandSpace extends Group<WebXRSpaceEventMap> {
    readonly joints: Partial<XRHandJoints>;
    readonly inputState: XRHandInputState;
}

export class XRTargetRaySpace extends Group<WebXRSpaceEventMap> {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}

export class XRGripSpace extends Group<WebXRSpaceEventMap> {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}

export class WebXRController {
    constructor();

    getHandSpace(): XRHandSpace;
    getTargetRaySpace(): XRTargetRaySpace;
    getGripSpace(): XRGripSpace;
    dispatchEvent(event: { type: XRControllerEventType; data?: XRInputSource }): this;
    connect(inputSource: XRInputSource): this;
    disconnect(inputSource: XRInputSource): this;
    update(inputSource: XRInputSource, frame: XRFrame, referenceSpace: XRReferenceSpace): this;
}
