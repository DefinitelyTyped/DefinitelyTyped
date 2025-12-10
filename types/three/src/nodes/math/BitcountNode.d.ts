import Node from "../core/Node.js";
import MathNode from "./MathNode.js";

export type BitcountNodeMethod =
    | typeof BitcountNode.COUNT_TRAILING_ZEROS
    | typeof BitcountNode.COUNT_LEADING_ZEROS
    | typeof BitcountNode.COUNT_ONE_BITS;

declare class BitcountNode extends MathNode {
    readonly isBitcountNode: true;

    constructor(method: BitcountNodeMethod, aNode: Node);

    static COUNT_TRAILING_ZEROS: "countTrailingZeros";
    static COUNT_LEADING_ZEROS: "countLeadingZeros";
    static COUNT_ONE_BITS: "countOneBits";
}

export const countTrailingZeros: (x: Node | number) => BitcountNode;
export const countLeadingZeros: (x: Node | number) => BitcountNode;
export const countOneBits: (x: Node | number) => BitcountNode;
