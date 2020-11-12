import { Component as ComponentWorker } from "./lib/engine/component";
import { Node } from "./node";
import { NodeEditor } from "./editor";
export declare abstract class Component extends ComponentWorker {
    editor: NodeEditor | null;
    data: unknown;
    constructor(name: string);
    abstract builder(node: Node): Promise<void>;
    build(node: Node): Promise<Node>;
    createNode(data?: {}): Promise<Node>;
}
