import * as Props from './props';
import { core } from '@nick-thompson/elementary';


// Types

/**
 * Internal types of {@link Node}.
 *
 * @typedef {
 *   'sin' |
 *   'cos' |
 *   'tan' |
 *   'tanh' |
 *   'asinh' |
 *   'ln' |
 *   'log' |
 *   'log2' |
 *   'ceil' |
 *   'floor' |
 *   'sqrt' |
 *   'exp' |
 *   'abs' |
 *   'le' |
 *   'leq' |
 *   'ge' |
 *   'geq' |
 *   'pow' |
 *   'add' |
 *   'sub' |
 *   'mul' |
 *   'div' |
 *   'mod' |
 *   'min' |
 *   'max' |
 *   'root' |
 *   'in' |
 *   'sr' |
 *   'const' |
 *   'phasor' |
 *   'rand' |
 *   'counter' |
 *   'latch' |
 *   'sample' |
 *   'table' |
 *   'seq' |
 *   'delay' |
 *   'z' |
 *   'pole' |
 *   'biquad' |
 *   'convolve'
 * } NativeNodeType
 */
export type NativeNodeType =
    'sin' |
    'cos' |
    'tan' |
    'tanh' |
    'asinh' |
    'ln' |
    'log' |
    'log2' |
    'ceil' |
    'floor' |
    'sqrt' |
    'exp' |
    'abs' |
    'le' |
    'leq' |
    'ge' |
    'geq' |
    'pow' |
    'add' |
    'sub' |
    'mul' |
    'div' |
    'mod' |
    'min' |
    'max' |
    'root' |
    'in' |
    'sr' |
    'const' |
    'phasor' |
    'rand' |
    'counter' |
    'latch' |
    'sample' |
    'table' |
    'seq' |
    'delay' |
    'z' |
    'pole' |
    'biquad' |
    'convolve';

/**
 * Types of {@link Node}.
 *
 * This could easily be just a string, but putting it in a union with
 * {@link NativeNodeType} better describes what this represents.
 *
 * @typedef {NativeNodeType | string} NodeType
 */
export type NodeType = NativeNodeType | string;


// Props

/**
 * Given a {@link NodeType} returns a type of props appropriate for the type.
 *
 *
 * @template T
 *
 * @typedef {
 *   T extends 'in' ? Props.InProps | Props.Props :
 *   T extends 'const' ? Props.ConstProps :
 *   T extends 'delay' ? Props.DelayProps :
 *   T extends 'seq' ? Props.SeqProps :
 *   T extends 'table' ? Props.TableProps :
 *   Props.Props;
 * }
 */
export type NodeProps<T extends NodeType> =
    T extends 'in' ? Props.InProps | Props.Props :
    T extends 'const' ? Props.ConstProps :
    T extends 'delay' ? Props.DelayProps :
    T extends 'seq' ? Props.SeqProps :
    T extends 'table' ? Props.TableProps :
    Props.AnyProps;


// Children

export type NodeChild = Node | number;

export type NodeChildrenArraySize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * A helper children array of fixed size.
 *
 * @template Size
 *
 * @typedef {
 *   Size extends 1 ?
 *   [NodeChild] :
 *   Size extends 2 ?
 *   [NodeChild, NodeChild] :
 *   Size extends 3 ?
 *   [NodeChild, NodeChild, NodeChild] :
 *   Size extends 4 ?
 *   [NodeChild, NodeChild, NodeChild, NodeChild] :
 *   Size extends 5 ?
 *   [NodeChild, NodeChild, NodeChild, NodeChild, NodeChild] :
 *   Size extends 6 ?
 *   [NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild] :
 *   Size extends 7 ?
 *   [
 *       NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild,
 *       NodeChild
 *   ] :
 *   Size extends 8 ?
 *   [
 *       NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild,
 *       NodeChild, NodeChild
 *   ] :
 *   never[];
 * } Sized
 */
export type NodeChildrenArray<Size extends NodeChildrenArraySize> =
    Size extends 1 ?
    [NodeChild] :
    Size extends 2 ?
    [NodeChild, NodeChild] :
    Size extends 3 ?
    [NodeChild, NodeChild, NodeChild] :
    Size extends 4 ?
    [NodeChild, NodeChild, NodeChild, NodeChild] :
    Size extends 5 ?
    [NodeChild, NodeChild, NodeChild, NodeChild, NodeChild] :
    Size extends 6 ?
    [NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild] :
    Size extends 7 ?
    [
        NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild,
        NodeChild
    ] :
    Size extends 8 ?
    [
        NodeChild, NodeChild, NodeChild, NodeChild, NodeChild, NodeChild,
        NodeChild, NodeChild
    ] :
    never[];

/**
 * Helper type to describe that {@link Node}s can have a maximum of eight
 * children.
 *
 * @typedef {
 *   NodeChildrenArray<0> |
 *   NodeChildrenArray<1> |
 *   NodeChildrenArray<2> |
 *   NodeChildrenArray<3> |
 *   NodeChildrenArray<4> |
 *   NodeChildrenArray<5> |
 *   NodeChildrenArray<6> |
 *   NodeChildrenArray<7> |
 *   NodeChildrenArray<8>
 * } AnyNodeChildrenArray
 */
export type AnyNodeChildrenArray =
    NodeChildrenArray<0> |
    NodeChildrenArray<1> |
    NodeChildrenArray<2> |
    NodeChildrenArray<3> |
    NodeChildrenArray<4> |
    NodeChildrenArray<5> |
    NodeChildrenArray<6> |
    NodeChildrenArray<7> |
    NodeChildrenArray<8>;

/**
 * Given a {@link NodeType} returns the type of children appropriate for the
 * type.
 *
 *
 * @template T
 *
 * @typedef {
 *   T extends 'root' ? Array<Node> : // TODO
 *
 *   // Math variadic
 *   T extends 'add' | 'sub' | 'mul' | 'div' | 'mod' ? Array<Node> :
 *
 *   // In
 *   T extends 'in' ? NodeChildrenArray<1> | NodeChildrenArray<0> :
 *
 *   T extends InternalNodeType ?
 *   NodeChildrenArray<T extends // Basics
 *                     'counter' |
 *                     // Math
 *                     'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' |
 *                     'log2' | 'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
 *                     // Filters
 *                     'convolve' |
 *                     // Oscillators
 *                     'phasor' |
 *                     // Samples
 *                     'sample' | 'table' ? 1 :
 *
 *                     T extends // Math
 *                     'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'min' | 'max' |
 *                     // Filters
 *                     'pole' |
 *                     // Signals
 *                     'latch' ? 2 :
 *
 *                     T extends // Signals
 *                     'seq' ? 1 | 2 :
 *
 *                     T extends // Delays
 *                     'delay' ? 3 :
 *
 *                     T extends // Filters
 *                     'biquad' ? 6 :
 *
 *                     0> :
 *   AnyNodeChildrenArray;
 * } NodeChildren
 */
export type NodeChildren<T extends NodeType> =
    T extends 'root' ? AnyNodeChildrenArray : // TODO

        // Math variadic
    T extends 'add' | 'sub' | 'mul' | 'div' | 'mod' ? AnyNodeChildrenArray :

        // In
    T extends 'in' ? NodeChildrenArray<1> | NodeChildrenArray<0> :

    T extends NativeNodeType ?
    NodeChildrenArray<T extends // Basics
                      'counter' |
                      // Math
                      'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' |
                      'log2' | 'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
                      // Filters
                      'convolve' |
                      // Oscillators
                      'phasor' |
                      // Samples
                      'sample' | 'table' ? 1 :

                      T extends // Math
                      'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'min' | 'max' |
                      // Filters
                      'pole' |
                      // Signals
                      'latch' ? 2 :

                      T extends // Signals
                      'seq' ? 1 | 2 :

                      T extends // Delays
                      'delay' ? 3 :

                      T extends // Filters
                      'biquad' ? 6 :

                      0> :
    AnyNodeChildrenArray;


// Nodes

/**
 * Basic building block of the Elementary audio graph.
 */
export declare interface Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _type: NodeType,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _props: Props.AnyProps,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _children: AnyNodeChildrenArray
}

/**
 * Basic building block of the Elementary audio graph.
 */
export declare interface ConcreteNode<T extends NodeType> extends Node
{
    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _type: T,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _props: NodeProps<T>,

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _children: NodeChildren<T>
}

// Math

export type SinNode = ConcreteNode<'sin'>;
export type CosNode = ConcreteNode<'cos'>;
export type TanNode = ConcreteNode<'tan'>;
export type TanhNode = ConcreteNode<'tanh'>;
export type AsinhNode = ConcreteNode<'asinh'>;
export type LnNode = ConcreteNode<'ln'>;
export type LogNode = ConcreteNode<'log'>;
export type Log2Node = ConcreteNode<'log2'>;
export type CeilNode = ConcreteNode<'ceil'>;
export type FloorNode = ConcreteNode<'floor'>;
export type SqrtNode = ConcreteNode<'sqrt'>;
export type ExpNode = ConcreteNode<'exp'>;

export type AbsNode = ConcreteNode<'abs'>;
export type LeNode = ConcreteNode<'le'>;
export type LeqNode = ConcreteNode<'leq'>;
export type GeNode = ConcreteNode<'ge'>;
export type GeqNode = ConcreteNode<'geq'>;
export type PowNode = ConcreteNode<'pow'>;
export type MinNode = ConcreteNode<'min'>;
export type MaxNode = ConcreteNode<'max'>;

export type AddNode = ConcreteNode<'add'>;
export type SubNode = ConcreteNode<'sub'>;
export type MulNode = ConcreteNode<'mul'>;
export type DivNode = ConcreteNode<'div'>;
export type ModNode = ConcreteNode<'mod'>;

// Native

export type RootNode = ConcreteNode<'root'>;
export type RandNode = ConcreteNode<'rand'>;

// Basics

export type InNode = ConcreteNode<'in'>;
export type SrNode = ConcreteNode<'sr'>;
export type ConstNode = ConcreteNode<'const'>;
export type CounterNode = ConcreteNode<'counter'>;

// Delays

export type ZNode = ConcreteNode<'z'>;
export type DelayNode = ConcreteNode<'delay'>;

// Filters

export type PoleNode = ConcreteNode<'pole'>;
export type BiquadNode = ConcreteNode<'biquad'>;
export type ConvolveNode = ConcreteNode<'convolve'>;

// Oscillators

export type PhasorNode = ConcreteNode<'phasor'>;

// Samples

export type SampleNode = ConcreteNode<'sample'>;
export type TableNode = ConcreteNode<'table'>;

// Signals

export type LatchNode = ConcreteNode<'latch'>;
export type SeqNode = ConcreteNode<'seq'>;


// Static members

/**
 * Constructor for {@link Node}.
 */
export declare interface NodeStatic
{
    /**
     * Constructs a {@link Node} of the given {@link NodeType}.
     *
     * @template T
     *
     * @param {T} type
     * {@link core.NodeType} of the {@link core.Node} to create
     *
     * @param {core.NodeProps<T>} props
     * {@link core.NodeProps<T>} of the {@link core.Node} to create
     *
     * @param {core.NodeChildren<T>} children
     * {@link core.NodeChildren<T>} of the {@link core.Node} to create
     *
     * @returns {core.Node}
     * a {@link core.Node} for the given {@link core.NodeType},
     * {@link core.NodeProps<T>}, and {@link core.NodeChildren<T>}
     */
    new<T extends core.NodeType>(
        type: T,
        props: core.NodeProps<T>,
        children: core.NodeChildren<T>): core.Node;

    /**
     * Checks whether an object is a {@link Node}
     *
     *
     * @param toCheck
     * object to check whether it is a {@link Node}
     *
     * @returns {toCheck is Node}
     * whether toCheck is a {@link Node}
     */
    isNode(toCheck: any): toCheck is Node;
}
