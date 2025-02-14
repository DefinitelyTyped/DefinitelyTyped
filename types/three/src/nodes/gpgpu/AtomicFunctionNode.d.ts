import Node from "../core/Node.js";
import TempNode from "../core/TempNode.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export type AtomicMethod =
    | typeof AtomicFunctionNode.ATOMIC_LOAD
    | typeof AtomicFunctionNode.ATOMIC_STORE
    | typeof AtomicFunctionNode.ATOMIC_ADD
    | typeof AtomicFunctionNode.ATOMIC_SUB
    | typeof AtomicFunctionNode.ATOMIC_MAX
    | typeof AtomicFunctionNode.ATOMIC_MIN
    | typeof AtomicFunctionNode.ATOMIC_AND
    | typeof AtomicFunctionNode.ATOMIC_OR
    | typeof AtomicFunctionNode.ATOMIC_XOR;

declare class AtomicFunctionNode extends TempNode {
    method: AtomicMethod;
    pointerNode: Node;
    valueNode: Node;
    storeNode: Node;

    constructor(method: AtomicMethod, pointerNode: Node, valueNode: Node, storeNode?: Node | null);

    static ATOMIC_LOAD: "atomicLoad";
    static ATOMIC_STORE: "atomicStore";
    static ATOMIC_ADD: "atomicAdd";
    static ATOMIC_SUB: "atomicSub";
    static ATOMIC_MAX: "atomicMax";
    static ATOMIC_MIN: "atomicMin";
    static ATOMIC_AND: "atomicAnd";
    static ATOMIC_OR: "atomicOr";
    static ATOMIC_XOR: "atomicXor";
}

export const atomicFunc: (
    method: AtomicMethod,
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicLoad: (
    pointerNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicStore: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicAdd: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicSub: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicMax: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicMin: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicAnd: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicOr: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;

export const atomicXor: (
    pointerNode: NodeRepresentation,
    valueNode: NodeRepresentation,
    storeNode?: NodeRepresentation | null,
) => ShaderNodeObject<AtomicFunctionNode>;
