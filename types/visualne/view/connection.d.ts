import { Connection } from "../connection";
import { Emitter } from "../index";
import { EventsTypes } from "../events";
import { NodeView } from "./node";
export declare class ConnectionView extends Emitter<EventsTypes> {
    connection: Connection;
    inputNode: NodeView;
    outputNode: NodeView;
    el: HTMLElement;
    constructor(connection: Connection, inputNode: NodeView, outputNode: NodeView, emitter: Emitter<EventsTypes>);
    getPoints(): number[];
    update(): void;
}
