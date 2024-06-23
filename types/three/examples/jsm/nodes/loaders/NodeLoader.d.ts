import { Loader, LoadingManager, Texture } from "three";
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
