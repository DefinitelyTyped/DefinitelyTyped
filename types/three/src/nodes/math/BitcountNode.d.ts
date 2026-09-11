import Node from "../core/Node.js";
import MathNode from "./MathNode.js";

export type BitcountNodeMethod =
    | typeof BitcountNode.COUNT_TRAILING_ZEROS
    | typeof BitcountNode.COUNT_LEADING_ZEROS
    | typeof BitcountNode.COUNT_ONE_BITS;

declare class BitcountNode extends MathNode {
    readonly isBitcountNode: true;

    constructor(method: BitcountNodeMethod, aNode: Node);

    static get COUNT_TRAILING_ZEROS(): "countTrailingZeros";
    static get COUNT_LEADING_ZEROS(): "countLeadingZeros";
    static get COUNT_ONE_BITS(): "countOneBits";
}

export default BitcountNode;

export const countTrailingZeros: (x: Node | number) => BitcountNode;
export const countLeadingZeros: (x: Node | number) => BitcountNode;
export const countOneBits: (x: Node | number) => BitcountNode;
