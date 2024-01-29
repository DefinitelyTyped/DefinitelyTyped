import { MaterialLoader } from '../../../../src/Three.js';
import { NodeLoaderResult } from './NodeLoader.js';

export default class NodeMaterialLoader extends MaterialLoader {
    nodes: NodeLoaderResult;

    setNodes(value: NodeLoaderResult): this;
}
