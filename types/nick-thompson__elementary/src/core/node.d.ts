import {
    NodeType,
    NativeNodeType,
    CompositeNodeType,
} from './types';
import {
    Props,
    NativeNodeProps,
    CompositeNodeProps,
    NodeProps,
} from './props';
import {
    Children,
    NativeNodeChildren,
    CompositeNodeChildren,
    NodeChildren,
} from './children';


// Nodes

/**
 * The fundamental building block of the Elementary audio graph.
 *
 * @interface Node
 *
 * @property {NodeType} _type
 * type of {@link Node}
 *
 * @property {Props} _props
 * {@link Node} properties
 *
 * @property {Children} _children
 * {@link Node} children
 */
export declare interface Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {NodeType}
     */
    readonly _type: NodeType,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {Props}
     */
    readonly _props: Props,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {Children}
     */
    readonly _children: Children
}

/**
 * Native node specific to the {@link NativeNodeType}.
 *
 * @template T
 *
 * @interface NativeNode
 *
 * @extends Node
 *
 * @property {NodeType} _type
 * type of {@link Node}
 *
 * @property {Props} _props
 * {@link Node} properties
 *
 * @property {Children} _children
 * {@link Node} children
 */
export declare interface NativeNode<T extends NativeNodeType> extends Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {T}
     */
    readonly _type: T,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {NativeNodeProps<T>}
     */
    readonly _props: NativeNodeProps<T>,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {NativeNodeChildren<T>}
     */
    readonly _children: NativeNodeChildren<T>
}

/**
 * Native node specific to the {@link NativeNodeType}, props, and children.
 *
 * @template T, P, C
 *
 * @interface CompositeNode
 *
 * @extends Node
 *
 * @property {NodeType} _type
 * type of {@link Node}
 *
 * @property {Props} _props
 * {@link Node} properties
 *
 * @property {Children} _children
 * {@link Node} children
 */
export declare interface CompositeNode<T extends CompositeNodeType = CompositeNodeType,
    P extends CompositeNodeProps = CompositeNodeProps,
    C extends CompositeNodeChildren = CompositeNodeChildren> extends Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {T}
     */
    readonly _type: T,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {P}
     */
    readonly _props: P,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     * @type {C}
     */
    readonly _children: C
}

/**
 * The node for the given {@link NodeType}, props and children. If a native
 * node type is passed props and children must match the nodes prop and
 * children types.
 *
 * @template T, P, C
 *
 * @typedef {Node} ConcreteNode
 *
 * @property {NodeType} _type
 * type of {@link Node}
 *
 * @property {Props} _props
 * {@link Node} properties
 *
 * @property {Children} _children
 * {@link Node} children
 */
export type ConcreteNode<T extends NodeType,
    P extends Props = NodeProps<T>,
    C extends Children = NodeChildren<T>> =

    T extends NativeNodeType ?
    P extends NativeNodeProps<T> ?
    C extends NativeNodeChildren<T> ?
    NativeNode<T> : never : never :
    CompositeNode<T, P, C>;


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
 *
 * @template T, P, C
 *
 * @typedef {
 *   ((props: P, ...children: C) => ConcreteNode<T, P, C>) &
 *   ((...children: C) => ConcreteNode<T, P, C>)
 * } NodeFactory
 */
export declare type NodeFactory<T extends NodeType,
    P extends Props = NodeProps<T>,
    C extends Children = NodeChildren<T>> =

    ((props: P, ...children: C) => ConcreteNode<T, P, C>) &
    ((...children: C) => ConcreteNode<T, P, C>);

/**
 * Static members of {@link Node}.
 *
 * @interface
 *
 * @property {} new
 * creates a new node
 *
 * @property {(toCheck: any) => toCheck is Node} isNode
 * function for type checking {@link Node}s.
 */
export declare interface NodeStatic
{
    /**
     * Constructs a {@link Node} of the given {@link NodeType}.
     *
     * @template T
     * @constructor
     *
     * @param {T} type
     * {@link NodeType} of the {@link Node} to create
     *
     * @param {NodeProps<T>} props
     * {@link NodeProps<T>} of the {@link Node} to create
     *
     * @param {NodeChildren<T>} children
     * {@link NodeChildren<T>} of the {@link Node} to create
     *
     * @returns {Node}
     * a {@link Node} for the given {@link NodeType},
     * {@link NodeProps<T>}, and {@link NodeChildren<T>}
     */
    new<T extends NodeType>(
        type: T, props: NodeProps<T>, children: NodeChildren<T>):
        ConcreteNode<T, NodeProps<T>, NodeChildren<T>>;

    /**
     * Constructs a {@link Node} of the given {@link NodeType} with empty
     * props.
     *
     * @template T
     * @constructor
     *
     * @param {T} type
     * {@link NodeType} of the {@link Node} to create
     *
     * @param {NodeChildren<T>} children
     * {@link NodeChildren<T>} of the {@link Node} to create
     *
     * @returns {Node}
     * a {@link Node} for the given {@link NodeType},
     * {@link NodeProps<T>}, and {@link NodeChildren<T>}
     */
    new<T extends NodeType>(
        type: T, children: NodeChildren<T>):
        ConcreteNode<T, {}, NodeChildren<T>>;


    /**
     * Checks whether an object is a {@link Node}
     *
     * @static
     * @function
     *
     * @param toCheck
     * object to check whether it is a {@link Node}
     *
     * @returns {toCheck is Node}
     * whether toCheck is a {@link Node}
     */
    isNode(toCheck: any): toCheck is Node;
}
