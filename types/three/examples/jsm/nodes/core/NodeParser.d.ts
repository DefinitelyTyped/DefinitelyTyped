import Node from './Node';

export default abstract class NodeParser {
    abstract parseFunction(source: string): Node;
}
