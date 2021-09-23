import { NodeType, NativeNodeType, CompositeNodeType } from './types';
// noinspection ES6UnusedImports
import { NodeProps, Props } from './props';
import { NodeChildren } from './children';

// for docs
// noinspection ES6UnusedImports
import { Core } from './api';
// noinspection ES6UnusedImports
import { core } from './';

// Nodes

/**
 * The fundamental building block of the Elementary audio graph.
 *
 * @see core
 */
export interface Node {
    /**
     * Do not use this! It is only here to differentiate {@link Node} and
     * {@link Props} types.
     *
     * @see Node
     * @see Props
     */
    $$typeof: unknown;
}

/**
 * Native node specific to the {@link NativeNodeType}.
 *
 * @see core
 * @see Node
 */
export interface NativeNode<T extends NativeNodeType =
    NativeNodeType> extends Node {
    /**
     * Do not use this! It is only here to differentiate {@link Node} and
     * {@link Props} types.
     *
     * @see Node
     * @see Props
     */
    $$typeof: unknown;
}

/**
 * Native node specific to the {@link NativeNodeType}, props, and children.
 *
 * @see core
 * @see Node
 */
export interface CompositeNode<T extends CompositeNodeType =
    CompositeNodeType> extends Node {
    /**
     * Do not use this! It is only here to differentiate {@link Node} and
     * {@link Props} types.
     *
     * @see Node
     * @see Props
     */
    $$typeof: unknown;
}

/**
 * The node for the given {@link NodeType}, props and children.
 * If a {@link NativeNodeType} is passed props and children must match
 * the nodes' props and children types.
 *
 * @see core
 * @see Node
 * @see NativeNode
 * @see CompositeNode
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 * @see NodeProps
 * @see NodeConstructor
 */
export type ConcreteNode<T extends NodeType> =
    T extends NativeNodeType ? NativeNode<T> :
    T extends CompositeNodeType ? CompositeNode<T> :
    never;

// Native

// Math

export type SinNode = NativeNode<'sin'>;
export type CosNode = NativeNode<'cos'>;
export type TanNode = NativeNode<'tan'>;
export type TanhNode = NativeNode<'tanh'>;
export type AsinhNode = NativeNode<'asinh'>;
export type LnNode = NativeNode<'ln'>;
export type LogNode = NativeNode<'log'>;
export type Log2Node = NativeNode<'log2'>;
export type CeilNode = NativeNode<'ceil'>;
export type FloorNode = NativeNode<'floor'>;
export type SqrtNode = NativeNode<'sqrt'>;
export type ExpNode = NativeNode<'exp'>;

export type AbsNode = NativeNode<'abs'>;
export type LeNode = NativeNode<'le'>;
export type LeqNode = NativeNode<'leq'>;
export type GeNode = NativeNode<'ge'>;
export type GeqNode = NativeNode<'geq'>;
export type PowNode = NativeNode<'pow'>;
export type ModNode = NativeNode<'mod'>;
export type MinNode = NativeNode<'min'>;
export type MaxNode = NativeNode<'max'>;

export type AddNode = NativeNode<'add'>;
export type SubNode = NativeNode<'sub'>;
export type MulNode = NativeNode<'mul'>;
export type DivNode = NativeNode<'div'>;

// Native

export type RootNode = NativeNode<'root'>;
export type RandNode = NativeNode<'rand'>;

// Basics

export type InNode = NativeNode<'in'>;
export type SrNode = NativeNode<'sr'>;
export type ConstNode = NativeNode<'const'>;
export type CounterNode = NativeNode<'counter'>;

// Delays

export type ZNode = NativeNode<'z'>;
export type DelayNode = NativeNode<'delay'>;

// Filters

export type PoleNode = NativeNode<'pole'>;
export type BiquadNode = NativeNode<'biquad'>;
export type ConvolveNode = NativeNode<'convolve'>;

// Oscillators

export type PhasorNode = NativeNode<'phasor'>;

// Samples

export type SampleNode = NativeNode<'sample'>;
export type TableNode = NativeNode<'table'>;

// Signals

export type LatchNode = NativeNode<'latch'>;
export type SeqNode = NativeNode<'seq'>;

// Creation

/**
 * Returns a factory for the appropriate {@link NodeType}, props and children.
 * Most Elementary function types are created this way.
 *
 * @see core
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export type NodeFactory<T extends NodeType = NodeType,
    P extends NodeProps<T> = NodeProps<T>,
    C extends NodeChildren<T> = NodeChildren<T>,
    R extends ConcreteNode<T> = ConcreteNode<T>> =
    ((props: P, ...children: C) => R) &
    ((...children: C) => R);

/**
 * Constructs a {@link Node} of the given {@link NodeType}.
 *
 * @param type
 * {@link NodeType} of the to create
 *
 * @param [props = {}]
 * {@link NodeProps} of the to create
 *
 * @param children
 * {@link NodeChildren} of the to create
 *
 * @returns
 * a {@link Node} for the given {@link NodeType},
 * {@link NodeProps}, and {@link NodeChildren}
 *
 * @see core
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 * @see NodeStatic
 */
export interface NodeConstructor {
    new<T extends NodeType>(
        type: T, props: NodeProps<T>, children: NodeChildren<T>):
        ConcreteNode<T>;

    new<T extends NodeType>(
        type: T, children: NodeChildren<T>):
        ConcreteNode<T>;
}

/**
 * Static members of {@link Node}.
 *
 * @see core
 * @see Node
 * @see NodeConstructor
 */
export interface NodeStatic extends NodeConstructor {
    /**
     * Checks whether an object is a {@link Node}
     *
     * @param toCheck
     * object to check whether it is a {@link Node}
     *
     * @returns
     * whether toCheck is a {@link Node}
     *
     * @see NodeStatic
     * @see Node
     */
    isNode(toCheck: any): toCheck is Node;
}
