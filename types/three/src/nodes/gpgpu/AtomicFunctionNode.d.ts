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

interface AtomicFunctionNodeInterface {
    method: AtomicMethod;
    pointerNode: Node;
    valueNode: Node | null;
    parents: boolean;
}

declare const AtomicFunctionNode: {
    new<TNodeType>(
        method: AtomicMethod,
        pointerNode: Node,
        valueNode: Node | null,
    ): AtomicFunctionNode<TNodeType>;

    readonly ATOMIC_LOAD: "atomicLoad";
    readonly ATOMIC_STORE: "atomicStore";
    readonly ATOMIC_ADD: "atomicAdd";
    readonly ATOMIC_SUB: "atomicSub";
    readonly ATOMIC_MAX: "atomicMax";
    readonly ATOMIC_MIN: "atomicMin";
    readonly ATOMIC_AND: "atomicAnd";
    readonly ATOMIC_OR: "atomicOr";
    readonly ATOMIC_XOR: "atomicXor";
};

export type AtomicFunctionNode<TNodeType> = Node<TNodeType> & AtomicFunctionNodeInterface;

export default AtomicFunctionNode;

export const atomicFunc: <TNodeType>(
    method: AtomicMethod,
    pointerNode: Node<TNodeType>,
    valueNode: Node | null,
) => AtomicFunctionNode<TNodeType>;

export const atomicLoad: <TNodeType>(
    pointerNode: Node<TNodeType>,
) => AtomicFunctionNode<TNodeType>;

export const atomicStore: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node | number,
) => AtomicFunctionNode<TNodeType>;

export const atomicAdd: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node | number,
) => AtomicFunctionNode<TNodeType>;

export const atomicSub: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node | number,
) => AtomicFunctionNode<TNodeType>;

export const atomicMax: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node,
) => AtomicFunctionNode<TNodeType>;

export const atomicMin: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node,
) => AtomicFunctionNode<TNodeType>;

export const atomicAnd: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node,
) => AtomicFunctionNode<TNodeType>;

export const atomicOr: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node,
) => AtomicFunctionNode<TNodeType>;

export const atomicXor: <TNodeType>(
    pointerNode: Node<TNodeType>,
    valueNode: Node,
) => AtomicFunctionNode<TNodeType>;
