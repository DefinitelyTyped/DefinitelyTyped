import Node from "../core/Node.js";

declare class BitcastNode extends Node {
    valueNode: Node;
    conversionType: string;
    inputType: string | null;

    readonly isBitcastNode: true;

    constructor(valueNode: Node, conversionType: string, inputType: string | null);
}

export default BitcastNode;

export const bitcast: (x: Node | number, y: string) => BitcastNode;

export const floatBitsToInt: (value: Node) => BitcastNode;

export const floatBitsToUint: (value: Node) => BitcastNode;

export const intBitsToFloat: (value: Node) => BitcastNode;

export const uintBitsToFloat: (value: Node) => BitcastNode;
