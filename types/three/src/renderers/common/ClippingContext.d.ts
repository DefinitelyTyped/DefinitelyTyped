import { Camera } from "../../cameras/Camera.js";
import { Material } from "../../materials/Material.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Plane } from "../../math/Plane.js";
import { Vector4 } from "../../math/Vector4.js";
import Renderer from "./Renderer.js";
declare class ClippingContext {
    version: number;
    globalClippingCount: number;
    localClippingCount: number;
    localClippingEnabled: boolean | undefined;
    localClipIntersection: boolean;
    planes: Vector4[];
    parentVersion: number;
    viewNormalMatrix: Matrix3;
    cacheKey: string;
    viewMatrix?: Matrix4 | undefined;
    constructor();
    projectPlanes(source: readonly Plane[], offset: number): void;
    updateGlobal(renderer: Renderer, camera: Camera): void;
    update(parent: ClippingContext, material: Material): void;
}
export default ClippingContext;
