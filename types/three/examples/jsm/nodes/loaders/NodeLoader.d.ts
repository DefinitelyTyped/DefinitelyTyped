import { Loader, LoadingManager, Texture } from "three";
import { AnyJson, Node } from "../Nodes.js";

export interface NodeLoaderResult {
    [hash: string]: Node;
}

export default class NodeLoader extends Loader<NodeLoaderResult> {
    constructor(manager?: LoadingManager);

    parseNodes(json: AnyJson): NodeLoaderResult;
    parse(json: AnyJson): Node;
    setTextures(textures: { [key: string]: Texture }): this;
}
