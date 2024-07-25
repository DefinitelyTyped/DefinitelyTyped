import { Loader } from "../../loaders/Loader.js";
import { LoadingManager } from "../../loaders/LoadingManager.js";
import { Texture } from "../../textures/Texture.js";
import { Node } from "../Nodes.js";

export interface NodeLoaderResult {
    [hash: string]: Node;
}

export default class NodeLoader extends Loader<NodeLoaderResult> {
    constructor(manager?: LoadingManager);

    parseNodes(json: unknown): NodeLoaderResult;
    parse(json: unknown): Node;
    setTextures(textures: { [key: string]: Texture }): this;
}
