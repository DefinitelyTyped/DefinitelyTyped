import { Loader, LoadingManager, Texture } from '../../../../src/Three';
import { Node, AnyJson } from '../Nodes';

export interface NodeLoaderResult {
    [hash: string]: Node;
}

export default class NodeLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
        url: string,
        onLoad: (gltf: NodeLoaderResult) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<NodeLoaderResult>;

    parseNodes(json: AnyJson): NodeLoaderResult;
    parse(json: AnyJson): Node;
    setTextures(textures: { [key: string]: Texture }): this;
}
