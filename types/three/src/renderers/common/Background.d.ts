import { Mesh } from "../../objects/Mesh.js";
import { Scene } from "../../scenes/Scene.js";
import DataMap from "./DataMap.js";
import Nodes from "./nodes/Nodes.js";
import RenderContext from "./RenderContext.js";
import Renderer from "./Renderer.js";
import RenderList from "./RenderList.js";
interface SceneData {
    backgroundMesh?: Mesh;
    backgroundCacheKey: string;
}
declare class Background extends DataMap<{
    scene: {
        key: Scene;
        value: SceneData;
    };
}> {
    renderer: Renderer;
    nodes: Nodes;
    constructor(renderer: Renderer, nodes: Nodes);
    update(scene: Scene, renderList: RenderList, renderContext: RenderContext): void;
}
export default Background;
