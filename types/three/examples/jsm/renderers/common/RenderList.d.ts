import { BufferGeometry, Camera, GeometryGroup, Light, Material, Object3D } from "three";
import { LightsNode } from "../../nodes/Nodes.js";
export interface Bundle {
    object: Object3D;
    camera: Camera;
    renderList: RenderList;
}
export interface RenderItem {
    id: number | null;
    object: Object3D | null;
    geometry: BufferGeometry | null;
    material: Material | null;
    groupOrder: number | null;
    renderOrder: number | null;
    z: number | null;
    group: GeometryGroup | null;
}
declare class RenderList {
    renderItems: RenderItem[];
    renderItemsIndex: number;
    opaque: RenderItem[];
    transparent: RenderItem[];
    bundles: Bundle[];
    lightsNode: LightsNode;
    lightsArray: Light[];
    occlusionQueryCount: number;
    constructor();
    begin(): this;
    getNextRenderItem(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
    ): RenderItem;
    push(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
    ): void;
    unshift(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
    ): void;
    pushBundle(group: Bundle): void;
    pushLight(light: Light): void;
    getLightsNode(): LightsNode;
    sort(
        customOpaqueSort: ((a: RenderItem, b: RenderItem) => number) | null,
        customTransparentSort: ((a: RenderItem, b: RenderItem) => number) | null,
    ): void;
    finish(): void;
}
export default RenderList;
