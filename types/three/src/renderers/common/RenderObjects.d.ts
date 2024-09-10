import { Camera } from "../../cameras/Camera.js";
import { Object3D } from "../../core/Object3D.js";
import { Material } from "../../materials/Material.js";
import LightsNode from "../../nodes/lighting/LightsNode.js";
import { Scene } from "../../scenes/Scene.js";
import Bindings from "./Bindings.js";
import ChainMap from "./ChainMap.js";
import Geometries from "./Geometries.js";
import Info from "./Info.js";
import Nodes from "./nodes/Nodes.js";
import Pipelines from "./Pipelines.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";
import RenderObject from "./RenderObject.js";
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
    constructor(
        renderer: Renderer,
        nodes: Nodes,
        geometries: Geometries,
        pipelines: Pipelines,
        bindings: Bindings,
        info: Info,
    );
    get(
        object: Object3D,
        material: Material,
        scene: Scene,
        camera: Camera,
        lightsNode: LightsNode,
        renderContext: RenderContext,
        passId?: string | undefined,
    ): RenderObject;
    getChainMap(
        passId?: string,
    ): ChainMap<
        readonly [Object3D<import("../../core/Object3D.js").Object3DEventMap>, Material, RenderContext, LightsNode],
        RenderObject
    >;
    dispose(): void;
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
        passId: string | undefined,
    ): RenderObject;
}
export default RenderObjects;
