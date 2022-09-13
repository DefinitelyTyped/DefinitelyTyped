export = NodeList;
declare function NodeList(): void;
declare class NodeList {
    readonly length: number;
    item(index: number): Node;
}
declare namespace NodeList {
    export { Node };
}
type Node = import('./Node');
