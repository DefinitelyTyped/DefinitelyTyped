import Node from "../core/Node.js";

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

declare class AtomicFunctionNode extends Node {
    method: AtomicMethod;
    pointerNode: Node;
    valueNode: Node;
    parents: boolean;

    constructor(method: AtomicMethod, pointerNode: Node, valueNode: Node);

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
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;

export const atomicLoad: (
    pointerNode: Node,
) => AtomicFunctionNode;

export const atomicStore: (
    pointerNode: Node,
    valueNode: Node | number,
) => AtomicFunctionNode;

export const atomicAdd: (
    pointerNode: Node,
    valueNode: Node | number,
) => AtomicFunctionNode;

export const atomicSub: (
    pointerNode: Node,
    valueNode: Node | number,
) => AtomicFunctionNode;

export const atomicMax: (
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;

export const atomicMin: (
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;

export const atomicAnd: (
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;

export const atomicOr: (
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;

export const atomicXor: (
    pointerNode: Node,
    valueNode: Node,
) => AtomicFunctionNode;
