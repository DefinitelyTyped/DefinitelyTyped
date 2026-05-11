import Node from "../core/Node.js";

declare class WorkgroupInfoNode extends Node {
    bufferType: string;
    bufferCount: number;

    readonly isWorkgroupInfoNode: true;

    elementType: string;

    scope: string;

    constructor(scope: string, bufferType: string, bufferCount?: number);
}

export default WorkgroupInfoNode;

export const workgroupArray: (type: string, count?: number) => WorkgroupInfoNode;
