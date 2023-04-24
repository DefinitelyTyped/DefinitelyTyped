import { MaterialLoader } from '../../../../src/Three';
import { NodeLoaderResult } from './NodeLoader';

export default class NodeMaterialLoader extends MaterialLoader {
    nodes: NodeLoaderResult;

    setNodes(value: NodeLoaderResult): this;
}
