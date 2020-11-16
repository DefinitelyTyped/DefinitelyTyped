import { Area } from "./area";
import { Component } from "../engine";
import { Connection } from "../connection";
import { ConnectionView } from "./connection";
import { Emitter } from "../index";
import { EventsTypes } from "../events";
import { Node } from "../node";
import { NodeView } from "./node";
export declare class EditorView extends Emitter<EventsTypes> {
    container: HTMLElement;
    components: Map<string, Component>;
    nodes: Map<Node, NodeView>;
    connections: Map<Connection, ConnectionView>;
    area: Area;
    constructor(container: HTMLElement, components: Map<string, Component>, emitter: Emitter<EventsTypes>);
    addNode(node: Node): void;
    removeNode(node: Node): void;
    addConnection(connection: Connection): void;
    removeConnection(connection: Connection): void;
    updateConnections({ node }: {
        node: Node;
    }): void;
    resize(): void;
    click(e: Event): void;
}
