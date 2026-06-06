import { NodeUpdateType } from "./constants.js";
import Node from "./Node.js";

export default class UniformGroupNode extends Node {
    name: string;
    version: number;

    shared: boolean;

    readonly isUniformGroup: true;

    constructor(name: string, shared?: boolean, order?: number, updateType?: NodeUpdateType | null);

    set needsUpdate(value: boolean);
}

export const uniformGroup: (name: string, order?: number, updateType?: NodeUpdateType | null) => UniformGroupNode;
export const sharedUniformGroup: (name: string, order?: number, updateType?: NodeUpdateType | null) => UniformGroupNode;

export const frameGroup: UniformGroupNode;
export const renderGroup: UniformGroupNode;
export const objectGroup: UniformGroupNode;
