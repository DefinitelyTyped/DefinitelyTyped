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

// for docs
// noinspection ES6UnusedImports
import { Core } from './api';
// noinspection ES6UnusedImports
import { core } from './';


// Nodes

/**
 * The fundamental building block of the Elementary audio graph.
 *
 * @memberOf core
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
 *
 * @see core
 */
export declare interface Node
{
    // /**
    //  * This is a private field and please don't try to change it!
    //  * Use this only for debugging or testing!
    //  *
    //  * @private
    //  * @readonly
    //  *
    //  * @member {NodeType} _type
    //  */
    // readonly _type: NodeType,
    //
    // /**
    //  * This is a private field and please don't try to change it!
    //  * Use this only for debugging or testing!
    //  *
    //  * @private
    //  * @readonly
    //  *
    //  * @member {Props} _props
    //  */
    // readonly _props: Props,
    //
    // /**
    //  * This is a private field and please don't try to change it!
    //  * Use this only for debugging or testing!
    //  *
    //  * @private
    //  * @readonly
    //  *
    //  * @member {Children} _children
    //  */
    // readonly _children: Children
}

/**
 * Native node specific to the {@link NativeNodeType}.
 *
 * @memberOf core
 * @template T
 * @interface NativeNode
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
 *
 * @see core
 * @see Node
 */
export declare interface NativeNode<T extends NativeNodeType> extends Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     *
     * @member {T} _type
     */
    readonly _type: T,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     *
     * @member {NativeNodeProps<T>} _props
     */
    readonly _props: NativeNodeProps<T>,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     *
     * @member {NativeNodeChildren<T>} _children
     */
    readonly _children: NativeNodeChildren<T>
}

/**
 * Native node specific to the {@link NativeNodeType}, props, and children.
 *
 * @memberOf core
 * @template T, P, C
 * @interface CompositeNode
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
 *
 * @see core
 * @see Node
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
     *
     * @member {T} _type
     */
    readonly _type: T,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     *
     * @member {P} _type
     */
    readonly _props: P,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     *
     * @member {C} _children
     */
    readonly _children: C
}

/**
 * The node for the given {@link NodeType}, props and children.
 * If a {@link NativeNodeType} is passed props and children must match
 * the nodes' props and children types.
 *
 * @memberOf core
 * @template T, P, C
 * @interface ConcreteNode
 *
 * @property {NodeType} _type
 * type of {@link Node}
 *
 * @property {NodeProps<T>} _props
 * {@link Node} props
 *
 * @property {NodeChildren<T>} _children
 * {@link Node} children
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
export type ConcreteNode<T extends NodeType,
    P extends Props = NodeProps<T>,
    C extends Children = NodeChildren<T>> =

    T extends NativeNodeType ?
    P extends NativeNodeProps<T> ?
    C extends NativeNodeChildren<T> ?
    NativeNode<T> : never : never :
    T extends CompositeNodeType ?
    CompositeNode<T, P, C> :
    never;


// Native

// TODO: document?

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
 * @memberOf core
 * @template T, P, C
 *
 * @typedef {
 *   ((props: P, ...children: C) => ConcreteNode<T, P, C>) &
 *   ((...children: C) => ConcreteNode<T, P, C>)
 * }
 *
 * @see core
 * @see Node
 * @see NodeType
 * @see NodeProps
 * @see NodeChildren
 */
export declare type NodeFactory<T extends NodeType,
    P extends Props = NodeProps<T>,
    C extends Children = NodeChildren<T>> =

    ((props: P, ...children: C) => ConcreteNode<T, P, C>) &
    ((...children: C) => ConcreteNode<T, P, C>);


/**
 * Constructs a {@link Node} of the given {@link NodeType}.
 *
 * @memberOf core
 * @template T
 * @class Node NodeConstructor
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
        ConcreteNode<T, NodeProps<T>, NodeChildren<T>>;

    new<T extends NodeType>(
        type: T, children: NodeChildren<T>):
        ConcreteNode<T, {}, NodeChildren<T>>;
}

/**
 * Static members of {@link Node}.
 *
 * @memberOf core
 * @interface NodeStatic
 * @extends NodeConstructor
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
     * @function
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
