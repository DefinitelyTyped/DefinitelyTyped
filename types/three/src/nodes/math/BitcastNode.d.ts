import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

declare class BitcastNode extends TempNode {
    valueNode: Node;
    conversionType: string;
    inputType: string | null;

    readonly isBitcastNode: true;

    constructor(valueNode: Node, conversionType: string, inputType: string | null);
}

export default BitcastNode;

export const bitcast: (x: Node | number, y: string) => ShaderNodeObject<BitcastNode>;

export const floatBitsToInt: (value: Node) => ShaderNodeObject<BitcastNode>;

export const floatBitsToUint: (value: Node) => ShaderNodeObject<BitcastNode>;

export const intBitsToFloat: (value: Node) => ShaderNodeObject<BitcastNode>;

export const uintBitsToFloat: (value: Node) => ShaderNodeObject<BitcastNode>;
