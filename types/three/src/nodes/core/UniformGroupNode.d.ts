import Node from "./Node.js";

export default class UniformGroupNode extends Node {
    name: string;
    version: number;

    shared: boolean;

    readonly isUniformGroup: true;

    constructor(name: string, shared?: boolean);

    set needsUpdate(value: boolean);
}

export const uniformGroup: (name: string) => UniformGroupNode;
export const sharedUniformGroup: (name: string) => UniformGroupNode;

export const frameGroup: UniformGroupNode;
export const renderGroup: UniformGroupNode;
export const objectGroup: UniformGroupNode;
