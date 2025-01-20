import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Scene } from "../../scenes/Scene.js";
import Bindings from "./Bindings.js";
import ChainMap from "./ChainMap.js";
import ClippingContext from "./ClippingContext.js";
import Geometries from "./Geometries.js";
import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";
import RenderObject from "./RenderObject.js";
/**
 * This module manages the render objects of the renderer.
 *
 * @private
 */
declare class RenderObjects {
    renderer: Renderer;
    nodes: Nodes;
    geometries: Geometries;
    pipelines: Pipelines;
    bindings: Bindings;
    info: Info;
    chainMaps: {
        [passId: string]: ChainMap<readonly [Object3D, Material, RenderContext, LightsNode], RenderObject>;
    };
    /**
     * Constructs a new render object management component.
     *
     * @param {Renderer} renderer - The renderer.
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Geometries} geometries - Renderer component for managing geometries.
     * @param {Pipelines} pipelines - Renderer component for managing pipelines.
     * @param {Bindings} bindings - Renderer component for managing bindings.
     * @param {Info} info - Renderer component for managing metrics and monitoring data.
     */
    constructor(
        renderer: Renderer,
        nodes: Nodes,
        geometries: Geometries,
        pipelines: Pipelines,
        bindings: Bindings,
        info: Info,
    );
    /**
     * Returns a render object for the given object and state data.
     *
     * @param {Object3D} object - The 3D object.
     * @param {Material} material - The 3D object's material.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the 3D object should be rendered with.
     * @param {LightsNode} lightsNode - The lights node.
     * @param {RenderContext} renderContext - The render context.
     * @param {ClippingContext} clippingContext - The clipping context.
     * @param {String?} passId - An optional ID for identifying the pass.
     * @return {RenderObject} The render object.
     */
    get(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
        clippingContext: ClippingContext | null,
        passId?: string | undefined,
    ): RenderObject;
    /**
     * Returns a chain map for the given pass ID.
     *
     * @param {String} [passId='default'] - The pass ID.
     * @return {ChainMap} The chain map.
     */
    getChainMap(
        passId?: string,
    ): ChainMap<
        readonly [Object3D<import("../../core/Object3D.js").Object3DEventMap>, Material, RenderContext, LightsNode],
        RenderObject
    >;
    /**
     * Frees internal resources.
     */
    dispose(): void;
    /**
     * Factory method for creating render objects with the given list of parameters.
     *
     * @param {Nodes} nodes - Renderer component for managing nodes related logic.
     * @param {Geometries} geometries - Renderer component for managing geometries.
     * @param {Renderer} renderer - The renderer.
     * @param {Object3D} object - The 3D object.
     * @param {Material} material - The object's material.
     * @param {Scene} scene - The scene the 3D object belongs to.
     * @param {Camera} camera - The camera the object should be rendered with.
     * @param {LightsNode} lightsNode - The lights node.
     * @param {RenderContext} renderContext - The render context.
     * @param {ClippingContext} clippingContext - The clipping context.
     * @param {String?} passId - An optional ID for identifying the pass.
     * @return {RenderObject} The render object.
     */
    createRenderObject(
        nodes: Nodes,
        geometries: Geometries,
        renderer: Renderer,
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
        clippingContext: ClippingContext | null,
        passId: string | undefined,
    ): RenderObject;
}
export default RenderObjects;
