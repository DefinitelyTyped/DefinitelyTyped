import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import { MaterialLoader } from "../MaterialLoader.js";
import { NodeLoaderResult } from "./NodeLoader.js";

export default class NodeMaterialLoader extends MaterialLoader {
    nodes: NodeLoaderResult;
    nodeMaterials: { [type: string]: NodeMaterial };

    setNodes(value: NodeLoaderResult): this;
    setNodeMaterials(value: { [type: string]: NodeMaterial }): this;
}
