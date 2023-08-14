import { Group } from '../../objects/Group.js';
import { Vector3 } from '../../math/Vector3.js';

export type XRControllerEventType = XRSessionEventType | XRInputSourceEventType | 'disconnected' | 'connected';

export class XRJointSpace extends Group {
    readonly jointRadius: number | undefined;
}

export type XRHandJoints = Record<XRHandJoint, XRJointSpace>;

export interface XRHandInputState {
    pinching: boolean;
}

export class XRHandSpace extends Group {
    readonly joints: Partial<XRHandJoints>;
    readonly inputState: XRHandInputState;
}

export class XRTargetRaySpace extends Group {
    hasLinearVelocity: boolean;
    readonly linearVelocity: Vector3;
    hasAngularVelocity: boolean;
    readonly angularVelocity: Vector3;
}

export class XRGripSpace extends Group {
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
