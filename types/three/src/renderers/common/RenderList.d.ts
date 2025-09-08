import { Camera } from "../../cameras/Camera.js";
import { BufferGeometry, GeometryGroup } from "../../core/BufferGeometry.js";
import { Object3D } from "../../core/Object3D.js";
import { Light } from "../../lights/Light.js";
import { Material } from "../../materials/Material.js";
import { LightsNode } from "../../nodes/Nodes.js";
import BundleGroup from "./BundleGroup.js";
import ClippingContext from "./ClippingContext.js";
import Lighting from "./Lighting.js";
export interface Bundle {
    bundleGroup: BundleGroup;
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
    clippingContext: ClippingContext | null;
}
/**
 * When the renderer analyzes the scene at the beginning of a render call,
 * it stores 3D object for further processing in render lists. Depending on the
 * properties of a 3D objects (like their transformation or material state), the
 * objects are maintained in ordered lists for the actual rendering.
 *
 * Render lists are unique per scene and camera combination.
 *
 * @private
 * @augments Pipeline
 */
declare class RenderList {
    renderItems: RenderItem[];
    renderItemsIndex: number;
    opaque: RenderItem[];
    transparentDoublePass: RenderItem[];
    transparent: RenderItem[];
    bundles: Bundle[];
    lightsNode: LightsNode;
    lightsArray: Light[];
    scene: Object3D;
    camera: Camera;
    occlusionQueryCount: number;
    /**
     * Constructs a render list.
     *
     * @param {Lighting} lighting - The lighting management component.
     * @param {Scene} scene - The scene.
     * @param {Camera} camera - The camera the scene is rendered with.
     */
    constructor(lighting: Lighting, scene: Object3D, camera: Camera);
    /**
     * This method is called right at the beginning of a render call
     * before the scene is analyzed. It prepares the internal data
     * structures for the upcoming render lists generation.
     *
     * @return {RenderList} A reference to this render list.
     */
    begin(): this;
    /**
     * Returns a render item for the giving render item state. The state is defined
     * by a series of object-related parameters.
     *
     * The method avoids object creation by holding render items and reusing them in
     * subsequent render calls (just with different property values).
     *
     * @param {Object3D} object - The 3D object.
     * @param {BufferGeometry} geometry - The 3D object's geometry.
     * @param {Material} material - The 3D object's material.
     * @param {number} groupOrder - The current group order.
     * @param {number} z - Th 3D object's depth value (z value in clip space).
     * @param {?number} group - {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The current clipping context.
     * @return {Object} The render item.
     */
    getNextRenderItem(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
        clippingContext: ClippingContext | null,
    ): RenderItem;
    /**
     * Pushes the given object as a render item to the internal render lists.
     * The selected lists depend on the object properties.
     *
     * @param {Object3D} object - The 3D object.
     * @param {BufferGeometry} geometry - The 3D object's geometry.
     * @param {Material} material - The 3D object's material.
     * @param {number} groupOrder - The current group order.
     * @param {number} z - Th 3D object's depth value (z value in clip space).
     * @param {?number} group - {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The current clipping context.
     */
    push(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
        clippingContext: ClippingContext | null,
    ): void;
    /**
     * Inserts the given object as a render item at the start of the internal render lists.
     * The selected lists depend on the object properties.
     *
     * @param {Object3D} object - The 3D object.
     * @param {BufferGeometry} geometry - The 3D object's geometry.
     * @param {Material} material - The 3D object's material.
     * @param {number} groupOrder - The current group order.
     * @param {number} z - Th 3D object's depth value (z value in clip space).
     * @param {?number} group - {?Object} group - Only relevant for objects using multiple materials. This represents a group entry from the respective `BufferGeometry`.
     * @param {ClippingContext} clippingContext - The current clipping context.
     */
    unshift(
        object: Object3D,
        geometry: BufferGeometry,
        material: Material,
        groupOrder: number,
        z: number,
        group: GeometryGroup | null,
        clippingContext: ClippingContext | null,
    ): void;
    /**
     * Pushes render bundle group data into the render list.
     *
     * @param {Object} group - Bundle group data.
     */
    pushBundle(group: Bundle): void;
    /**
     * Pushes a light into the render list.
     *
     * @param {Light} light - The light.
     */
    pushLight(light: Light): void;
    /**
     * Sorts the internal render lists.
     *
     * @param {?function(any, any): number} customOpaqueSort - A custom sort function for opaque objects.
     * @param {?function(any, any): number} customTransparentSort -  A custom sort function for transparent objects.
     */
    sort(
        customOpaqueSort: ((a: RenderItem, b: RenderItem) => number) | null,
        customTransparentSort: ((a: RenderItem, b: RenderItem) => number) | null,
    ): void;
    /**
     * This method performs finalizing tasks right after the render lists
     * have been generated.
     */
    finish(): void;
}
export default RenderList;
