import { Material } from "../../materials/Material.js";
import NodeMaterial from "../../materials/nodes/NodeMaterial.js";
import { Node } from "../../nodes/Nodes.js";
import { Texture } from "../../textures/Texture.js";
import { LoadingManager } from "../LoadingManager.js";
import { ObjectLoader } from "../ObjectLoader.js";
import { NodeLoaderResult } from "./NodeLoader.js";

export default class NodeObjectLoader extends ObjectLoader {
    nodes: { [type: string]: Node };
    nodeMaterials: { [type: string]: NodeMaterial };

    constructor(manager?: LoadingManager);

    setNodes(value: { [type: string]: Node }): this;

    setNodeMaterials(value: { [type: string]: NodeMaterial }): this;

    parseNodes(json: unknown, textures: { [key: string]: Texture }): NodeLoaderResult;

    parseMaterials(json: unknown, textures: { [key: string]: Texture }): { [key: string]: Material };
}
