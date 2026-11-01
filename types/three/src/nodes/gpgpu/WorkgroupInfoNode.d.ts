import Node from "../core/Node.js";

declare class WorkgroupInfoNode extends Node {
    bufferType: string;
    bufferCount: number;

    isAtomic: boolean;

    readonly isWorkgroupInfoNode: true;

    elementType: string;

    scope: string;

    constructor(scope: string, bufferType: string, bufferCount?: number);

    setAtomic(value: boolean): this;

    toAtomic(): this;
}

export default WorkgroupInfoNode;

export const workgroupArray: (type: string, count?: number) => WorkgroupInfoNode;
