import Node from "../core/Node.js";
import NodeFrame from "../core/NodeFrame.js";

export type EventNodeType = typeof EventNode.OBJECT | typeof EventNode.MATERIAL;

declare class EventNode extends Node {
    eventType: EventNodeType;
    callback: (frame: NodeFrame) => void;

    constructor(eventType: EventNodeType, callback: (frame: NodeFrame) => void);

    static OBJECT: "object";
    static MATERIAL: "material";
    static BEFORE_OBJECT: "beforeObject";
    static BEFORE_MATERIAL: "beforeMaterial";
}

export default EventNode;

export const OnObjectUpdate: (callback: (frame: NodeFrame) => void) => Node;

export const OnMaterialUpdate: (callback: (frame: NodeFrame) => void) => Node;

export const OnBeforeObjectUpdate: (callback: (frame: NodeFrame) => void) => Node;

export const OnBeforeMaterialUpdate: (callback: (frame: NodeFrame) => void) => Node;
