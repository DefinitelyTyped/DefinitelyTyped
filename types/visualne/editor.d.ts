import { Component } from "./component";
import { Connection } from "./connection";
import { Context } from "./core/context";
import { Data } from "./core/data";
import { EditorView } from "./view";
import { Input } from "./input";
import { Node } from "./node";
import { Output } from "./output";
import { Selected } from "./selected";
import { EventsTypes } from "./events";
export declare class NodeEditor extends Context<EventsTypes> {
    nodes: Set<Node>;
    selected: Selected;
    view: EditorView;
    constructor(id: string, container: HTMLElement);
    addNode(node: Node): void;
    removeNode(node: Node): void;
    connect(output: Output, input: Input, data?: unknown): void;
    removeConnection(connection: Connection): void;
    selectNode(node: Node, accumulate?: boolean): void;
    getComponent(name: string): Component;
    register(component: Component): void;
    clear(): void;
    toJSON(): Data;
    beforeImport(json: Data): boolean;
    afterImport(): boolean;
    fromJSON(json: Data): Promise<boolean>;
}
