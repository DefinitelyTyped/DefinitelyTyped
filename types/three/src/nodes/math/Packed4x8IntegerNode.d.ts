import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type Packed4x8IntegerNodeMethod1 =
    | typeof Packed4x8IntegerNode.PACK4X_I8
    | typeof Packed4x8IntegerNode.PACK4X_U8
    | typeof Packed4x8IntegerNode.PACK4X_I8_CLAMP
    | typeof Packed4x8IntegerNode.PACK4X_U8_CLAMP
    | typeof Packed4x8IntegerNode.UNPACK4X_I8
    | typeof Packed4x8IntegerNode.UNPACK4X_U8;

export type Packed4x8IntegerNodeMethod2 =
    | typeof Packed4x8IntegerNode.DOT4_U8_PACKED
    | typeof Packed4x8IntegerNode.DOT4_I8_PACKED;

declare class Packed4x8IntegerNode extends TempNode {
    method: string;
    aNode: Node;
    bNode: Node | null;

    readonly isPacked4x8IntegerNode: true;

    constructor(method: Packed4x8IntegerNodeMethod1, aNode: Node, bNode?: null);
    constructor(method: Packed4x8IntegerNodeMethod2, aNode: Node, bNode: Node);

    // 1 input
    static get PACK4X_I8(): "pack4xI8";
    static get PACK4X_U8(): "pack4xU8";
    static get PACK4X_I8_CLAMP(): "pack4xI8Clamp";
    static get PACK4X_U8_CLAMP(): "pack4xU8Clamp";
    static get UNPACK4X_I8(): "unpack4xI8";
    static get UNPACK4X_U8(): "unpack4xU8";

    // 2 inputs
    static get DOT4_U8_PACKED(): "dot4U8Packed";
    static get DOT4_I8_PACKED(): "dot4I8Packed";
}

export default Packed4x8IntegerNode;

export const pack4xI8: (value: Node) => Packed4x8IntegerNode;
export const pack4xU8: (value: Node) => Packed4x8IntegerNode;
export const pack4xI8Clamp: (value: Node) => Packed4x8IntegerNode;
export const pack4xU8Clamp: (value: Node) => Packed4x8IntegerNode;
export const unpack4xI8: (value: Node) => Packed4x8IntegerNode;
export const unpack4xU8: (value: Node) => Packed4x8IntegerNode;

export const dot4U8Packed: (a: Node, b: Node) => Packed4x8IntegerNode;
export const dot4I8Packed: (a: Node, b: Node) => Packed4x8IntegerNode;
