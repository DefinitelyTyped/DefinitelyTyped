import { Emitter } from "../..";
import { EventsTypes } from "../../events";
import { IO } from "../../io";
import { Node } from "../../node";
export declare class SocketView extends Emitter<EventsTypes> {
    el: HTMLElement;
    type: string;
    io: IO;
    node: Node;
    constructor(el: HTMLElement, type: string, io: IO, node: Node, emitter: Emitter<EventsTypes>);
    getPosition({ position }: {
        position: number[];
    }): [number, number];
}
