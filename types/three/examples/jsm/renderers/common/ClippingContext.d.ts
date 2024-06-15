import { Camera, Material, Matrix3, Matrix4, Plane, Vector4 } from "three";
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
    viewMatrix?: Matrix4 | undefined;
    constructor();
    projectPlanes(source: readonly Plane[], offset: number): void;
    updateGlobal(renderer: Renderer, camera: Camera): void;
    update(parent: ClippingContext, material: Material): void;
}
export default ClippingContext;
