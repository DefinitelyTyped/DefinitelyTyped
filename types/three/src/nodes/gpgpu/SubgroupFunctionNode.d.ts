import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export type SubgroupFunctionNodeMethod0 = typeof SubgroupFunctionNode.SUBGROUP_ELECT;

export type SubgroupFunctionNodeMethod1 =
    | typeof SubgroupFunctionNode.SUBGROUP_BALLOT
    | typeof SubgroupFunctionNode.SUBGROUP_ADD
    | typeof SubgroupFunctionNode.SUBGROUP_INCLUSIVE_ADD
    | typeof SubgroupFunctionNode.SUBGROUP_EXCLUSIVE_AND
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
    static SUBGROUP_ELECT: "subgroupElect";

    // 1 input
    static SUBGROUP_BALLOT: "subgroupBallot";
    static SUBGROUP_ADD: "subgroupAdd";
    static SUBGROUP_INCLUSIVE_ADD: "subgroupInclusiveAdd";
    static SUBGROUP_EXCLUSIVE_AND: "subgroupExclusiveAdd";
    static SUBGROUP_MUL: "subgroupMul";
    static SUBGROUP_INCLUSIVE_MUL: "subgroupInclusiveMul";
    static SUBGROUP_EXCLUSIVE_MUL: "subgroupExclusiveMul";
    static SUBGROUP_AND: "subgroupAnd";
    static SUBGROUP_OR: "subgroupOr";
    static SUBGROUP_XOR: "subgroupXor";
    static SUBGROUP_MIN: "subgroupMin";
    static SUBGROUP_MAX: "subgroupMax";
    static SUBGROUP_ALL: "subgroupAll";
    static SUBGROUP_ANY: "subgroupAny";
    static SUBGROUP_BROADCAST_FIRST: "subgroupBroadcastFirst";
    static QUAD_SWAP_X: "quadSwapX";
    static QUAD_SWAP_Y: "quadSwapY";
    static QUAD_SWAP_DIAGONAL: "quadSwapDiagonal";

    // 2 inputs
    static SUBGROUP_BROADCAST: "subgroupBroadcast";
    static SUBGROUP_SHUFFLE: "subgroupShuffle";
    static SUBGROUP_SHUFFLE_XOR: "subgroupShuffleXor";
    static SUBGROUP_SHUFFLE_UP: "subgroupShuffleUp";
    static SUBGROUP_SHUFFLE_DOWN: "subgroupShuffleDown";
    static QUAD_BROADCAST: "quadBroadcast";
}

export default SubgroupFunctionNode;

export const subgroupElect: () => ShaderNodeObject<Node>;

export const subgroupBallot: (pred: Node) => ShaderNodeObject<Node>;
export const subgroupAdd: (e: Node) => ShaderNodeObject<Node>;
export const subgroupInclusiveAdd: (e: Node) => ShaderNodeObject<Node>;
export const subgroupExclusiveAdd: (e: Node) => ShaderNodeObject<Node>;
export const subgroupMul: (e: Node) => ShaderNodeObject<Node>;
export const subgroupInclusiveMul: (e: Node) => ShaderNodeObject<Node>;
export const subgroupExclusiveMul: (e: Node) => ShaderNodeObject<Node>;
export const subgroupAnd: (e: Node) => ShaderNodeObject<Node>;
export const subgroupOr: (e: Node) => ShaderNodeObject<Node>;
export const subgroupXor: (e: Node) => ShaderNodeObject<Node>;
export const subgroupMin: (e: Node) => ShaderNodeObject<Node>;
export const subgroupMax: (e: Node) => ShaderNodeObject<Node>;
export const subgroupAll: () => ShaderNodeObject<Node>;
export const subgroupAny: () => ShaderNodeObject<Node>;
export const subgroupBroadcastFirst: (e: Node, id: Node) => ShaderNodeObject<Node>;
export const quadSwapX: (e: Node) => ShaderNodeObject<Node>;
export const quadSwapY: (e: Node) => ShaderNodeObject<Node>;
export const quadSwapDiagonal: (e: Node) => ShaderNodeObject<Node>;

export const subgroupBroadcast: (e: Node, id: Node) => ShaderNodeObject<Node>;
export const subgroupShuffle: (v: Node, id: Node) => ShaderNodeObject<Node>;
export const subgroupShuffleXor: (v: Node, mask: Node) => ShaderNodeObject<Node>;
export const subgroupShuffleUp: (v: Node, delta: Node) => ShaderNodeObject<Node>;
export const subgroupShuffleDown: (v: Node, delta: Node) => ShaderNodeObject<Node>;
export const quadBroadcast: (e: Node) => ShaderNodeObject<Node>;
