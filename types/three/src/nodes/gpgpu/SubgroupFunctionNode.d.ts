import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";

export type SubgroupFunctionNodeMethod0 = typeof SubgroupFunctionNode.SUBGROUP_ELECT;

export type SubgroupFunctionNodeMethod1 =
    | typeof SubgroupFunctionNode.SUBGROUP_BALLOT
    | typeof SubgroupFunctionNode.SUBGROUP_ADD
    | typeof SubgroupFunctionNode.SUBGROUP_INCLUSIVE_ADD
    | typeof SubgroupFunctionNode.SUBGROUP_EXCLUSIVE_ADD
    | typeof SubgroupFunctionNode.SUBGROUP_MUL
    | typeof SubgroupFunctionNode.SUBGROUP_INCLUSIVE_MUL
    | typeof SubgroupFunctionNode.SUBGROUP_EXCLUSIVE_MUL
    | typeof SubgroupFunctionNode.SUBGROUP_AND
    | typeof SubgroupFunctionNode.SUBGROUP_OR
    | typeof SubgroupFunctionNode.SUBGROUP_XOR
    | typeof SubgroupFunctionNode.SUBGROUP_MIN
    | typeof SubgroupFunctionNode.SUBGROUP_MAX
    | typeof SubgroupFunctionNode.SUBGROUP_ALL
    | typeof SubgroupFunctionNode.SUBGROUP_ANY
    | typeof SubgroupFunctionNode.SUBGROUP_BROADCAST_FIRST
    | typeof SubgroupFunctionNode.QUAD_SWAP_X
    | typeof SubgroupFunctionNode.QUAD_SWAP_Y
    | typeof SubgroupFunctionNode.QUAD_SWAP_DIAGONAL;

export type SubgroupFunctionNodeMethod2 =
    | typeof SubgroupFunctionNode.SUBGROUP_BROADCAST
    | typeof SubgroupFunctionNode.SUBGROUP_SHUFFLE
    | typeof SubgroupFunctionNode.SUBGROUP_SHUFFLE_XOR
    | typeof SubgroupFunctionNode.SUBGROUP_SHUFFLE_UP
    | typeof SubgroupFunctionNode.SUBGROUP_SHUFFLE_DOWN
    | typeof SubgroupFunctionNode.QUAD_BROADCAST;

declare class SubgroupFunctionNode extends TempNode {
    constructor(method: SubgroupFunctionNodeMethod0);
    constructor(method: SubgroupFunctionNodeMethod1, aNode: Node);
    constructor(method: SubgroupFunctionNodeMethod2, aNode: Node, bNode: Node);

    // 0 inputs
    static get SUBGROUP_ELECT(): "subgroupElect";

    // 1 input
    static get SUBGROUP_BALLOT(): "subgroupBallot";
    static get SUBGROUP_ADD(): "subgroupAdd";
    static get SUBGROUP_INCLUSIVE_ADD(): "subgroupInclusiveAdd";
    static get SUBGROUP_EXCLUSIVE_ADD(): "subgroupExclusiveAdd";
    static get SUBGROUP_MUL(): "subgroupMul";
    static get SUBGROUP_INCLUSIVE_MUL(): "subgroupInclusiveMul";
    static get SUBGROUP_EXCLUSIVE_MUL(): "subgroupExclusiveMul";
    static get SUBGROUP_AND(): "subgroupAnd";
    static get SUBGROUP_OR(): "subgroupOr";
    static get SUBGROUP_XOR(): "subgroupXor";
    static get SUBGROUP_MIN(): "subgroupMin";
    static get SUBGROUP_MAX(): "subgroupMax";
    static get SUBGROUP_ALL(): "subgroupAll";
    static get SUBGROUP_ANY(): "subgroupAny";
    static get SUBGROUP_BROADCAST_FIRST(): "subgroupBroadcastFirst";
    static get QUAD_SWAP_X(): "quadSwapX";
    static get QUAD_SWAP_Y(): "quadSwapY";
    static get QUAD_SWAP_DIAGONAL(): "quadSwapDiagonal";

    // 2 inputs
    static get SUBGROUP_BROADCAST(): "subgroupBroadcast";
    static get SUBGROUP_SHUFFLE(): "subgroupShuffle";
    static get SUBGROUP_SHUFFLE_XOR(): "subgroupShuffleXor";
    static get SUBGROUP_SHUFFLE_UP(): "subgroupShuffleUp";
    static get SUBGROUP_SHUFFLE_DOWN(): "subgroupShuffleDown";
    static get QUAD_BROADCAST(): "quadBroadcast";
}

export default SubgroupFunctionNode;

export const subgroupElect: () => Node;

export const subgroupBallot: (pred: Node) => Node;
export const subgroupAdd: (e: Node) => Node;
export const subgroupInclusiveAdd: (e: Node) => Node;
export const subgroupExclusiveAdd: (e: Node) => Node;
export const subgroupMul: (e: Node) => Node;
export const subgroupInclusiveMul: (e: Node) => Node;
export const subgroupExclusiveMul: (e: Node) => Node;
export const subgroupAnd: (e: Node) => Node;
export const subgroupOr: (e: Node) => Node;
export const subgroupXor: (e: Node) => Node;
export const subgroupMin: (e: Node) => Node;
export const subgroupMax: (e: Node) => Node;
export const subgroupAll: (e: Node) => Node;
export const subgroupAny: (e: Node) => Node;
export const subgroupBroadcastFirst: (e: Node) => Node;
export const quadSwapX: (e: Node) => Node;
export const quadSwapY: (e: Node) => Node;
export const quadSwapDiagonal: (e: Node) => Node;

export const subgroupBroadcast: (e: Node, id: Node) => Node;
export const subgroupShuffle: (v: Node, id: Node) => Node;
export const subgroupShuffleXor: (v: Node, mask: Node) => Node;
export const subgroupShuffleUp: (v: Node, delta: Node) => Node;
export const subgroupShuffleDown: (v: Node, delta: Node) => Node;
export const quadBroadcast: (e: Node) => Node;
