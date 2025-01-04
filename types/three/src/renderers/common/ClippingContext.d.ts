import { Camera } from "../../cameras/Camera.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Plane } from "../../math/Plane.js";
import { Vector4 } from "../../math/Vector4.js";
import { ClippingGroup } from "../../objects/ClippingGroup.js";
import { Scene } from "../../scenes/Scene.js";
declare class ClippingContext {
    version: number;
    clipIntersection: boolean | null;
    cacheKey: string;
    intersectionPlanes?: Plane[];
    unionPlanes?: Plane[];
    viewNormalMatrix: Matrix3;
    clippingGroupContexts: WeakMap<ClippingGroup, ClippingContext>;
    shadowPass: boolean;
    viewMatrix?: Matrix4;
    parentVersion: number | null;
    constructor(parentContext?: ClippingContext | null);
    projectPlanes(source: readonly Plane[], destination: readonly Vector4[], offset: number): void;
    updateGlobal(scene: Scene, camera: Camera): void;
    update(parentContext: ClippingContext, clippingGroup: ClippingGroup): void;
    getGroupContext(clippingGroup: ClippingGroup): ClippingContext;
    get unionClippingCount(): number;
}
export default ClippingContext;
