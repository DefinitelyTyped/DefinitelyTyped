import { NodeType, NativeNodeType, CompositeNodeType } from './types';
import { NodeProps } from './props';
import { NodeChildren } from './children';

// for docs
// noinspection ES6UnusedImports
import { Props } from './props';
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
export declare interface Node
{
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
export declare interface NativeNode<T extends NativeNodeType =
    NativeNodeType> extends Node
{
}

/**
 * Native node specific to the {@link NativeNodeType}, props, and children.
 *
 * @see core
 * @see Node
 */
export declare interface CompositeNode<T extends CompositeNodeType =
    CompositeNodeType> extends Node
{
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
export declare type ConcreteNode<T extends NodeType> =
    T extends NativeNodeType ? NativeNode<T> :
    T extends CompositeNodeType ? CompositeNode<T> :
    never;


// Native

// Math

export declare type SinNode = NativeNode<'sin'>;
export declare type CosNode = NativeNode<'cos'>;
export declare type TanNode = NativeNode<'tan'>;
export declare type TanhNode = NativeNode<'tanh'>;
export declare type AsinhNode = NativeNode<'asinh'>;
export declare type LnNode = NativeNode<'ln'>;
export declare type LogNode = NativeNode<'log'>;
export declare type Log2Node = NativeNode<'log2'>;
export declare type CeilNode = NativeNode<'ceil'>;
export declare type FloorNode = NativeNode<'floor'>;
export declare type SqrtNode = NativeNode<'sqrt'>;
export declare type ExpNode = NativeNode<'exp'>;

export declare type AbsNode = NativeNode<'abs'>;
export declare type LeNode = NativeNode<'le'>;
export declare type LeqNode = NativeNode<'leq'>;
export declare type GeNode = NativeNode<'ge'>;
export declare type GeqNode = NativeNode<'geq'>;
export declare type PowNode = NativeNode<'pow'>;
export declare type ModNode = NativeNode<'mod'>;
export declare type MinNode = NativeNode<'min'>;
export declare type MaxNode = NativeNode<'max'>;

export declare type AddNode = NativeNode<'add'>;
export declare type SubNode = NativeNode<'sub'>;
export declare type MulNode = NativeNode<'mul'>;
export declare type DivNode = NativeNode<'div'>;

// Native

export declare type RootNode = NativeNode<'root'>;
export declare type RandNode = NativeNode<'rand'>;

// Basics

export declare type InNode = NativeNode<'in'>;
export declare type SrNode = NativeNode<'sr'>;
export declare type ConstNode = NativeNode<'const'>;
export declare type CounterNode = NativeNode<'counter'>;

// Delays

export declare type ZNode = NativeNode<'z'>;
export declare type DelayNode = NativeNode<'delay'>;

// Filters

export declare type PoleNode = NativeNode<'pole'>;
export declare type BiquadNode = NativeNode<'biquad'>;
export declare type ConvolveNode = NativeNode<'convolve'>;

// Oscillators

export declare type PhasorNode = NativeNode<'phasor'>;

// Samples

export declare type SampleNode = NativeNode<'sample'>;
export declare type TableNode = NativeNode<'table'>;

// Signals

export declare type LatchNode = NativeNode<'latch'>;
export declare type SeqNode = NativeNode<'seq'>;


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
export declare type NodeFactory<T extends NodeType = NodeType,
    P extends NodeProps<T> = NodeProps<T>,
    C extends NodeChildren<T> = NodeChildren<T>,
    R extends ConcreteNode<T> = ConcreteNode<T>> =
    ((props: P, ...children: C) => R) &
    ((...children: C) => R);


/**
 * Constructs a {@link Node} of the given {@link NodeType}.
 *
 * @param {T} type
 * {@link NodeType} of the {@link Node} to create
 *
 * @param {NodeProps<T>} [props = {}]
 * {@link NodeProps<T>} of the {@link Node} to create
 *
 * @param {NodeChildren<T>} children
 * {@link NodeChildren<T>} of the {@link Node} to create
 *
 * @returns {Node}
 * a {@link Node} for the given {@link NodeType},
 * {@link NodeProps<T>}, and {@link NodeChildren<T>}
 *
 * @see core
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 * @see NodeStatic
 */
export declare interface NodeConstructor
{
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
 * @property {(toCheck: any) => toCheck is Node} isNode
 * function for type checking {@link Node}s.
 *
 * @see core
 * @see Node
 * @see NodeConstructor
 */
export declare interface NodeStatic extends NodeConstructor
{
    /**
     * Checks whether an object is a {@link Node}
     *
     * @param {any} toCheck
     * object to check whether it is a {@link Node}
     *
     * @returns {toCheck is Node}
     * whether toCheck is a {@link Node}
     *
     * @see NodeStatic
     * @see Node
     */
    isNode(toCheck: any): toCheck is Node;
}
