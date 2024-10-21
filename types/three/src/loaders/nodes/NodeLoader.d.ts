import { Node } from "../../nodes/Nodes.js";
import { Texture } from "../../textures/Texture.js";
import { Loader } from "../Loader.js";
import { LoadingManager } from "../LoadingManager.js";

export interface NodeLoaderResult {
    [hash: string]: Node;
}

export default class NodeLoader extends Loader<NodeLoaderResult> {
    textures: { [key: string]: Texture };
    nodes: { [type: string]: Node };

    constructor(manager?: LoadingManager);

    parseNodes(json: unknown): NodeLoaderResult;
    parse(json: unknown): Node;
    setTextures(textures: { [key: string]: Texture }): this;
    setNodes(value: { [type: string]: Node }): this;
    createNodeFromType(type: string): Node;
}
