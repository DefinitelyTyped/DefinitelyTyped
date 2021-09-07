import * as Props from './props';
import { core } from '@nick-thompson/elementary';


/**
 * Types of {@link Node}.
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
 * } NodeType
 */
export type NodeType =
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
 * Given a {@link NodeType} returns a type of props appropriate for the type.
 *
 *
 * @template T
 *
 * @typedef {
 *   T extends 'in' ? Props.InProps :
 *   T extends 'const' ? Props.ConstProps :
 *   T extends 'delay' ? Props.DelayProps :
 *   T extends 'seq' ? Props.SeqProps :
 *   T extends 'table' ? Props.TableProps :
 *   Props.Props;
 * }
 */
export type NodeProps<T extends NodeType> =
    T extends 'in' ? Props.InProps :
    T extends 'const' ? Props.ConstProps :
    T extends 'delay' ? Props.DelayProps :
    T extends 'seq' ? Props.SeqProps :
    T extends 'table' ? Props.TableProps :
    Props.Props;


// TODO: make this type better

/**
 * A helper children array of fixed size.
 *
 * @template Size
 *
 * @typedef {
 *   Size extends 0 ? never[] :
 *   Array<Node> & { length: Size };
 * } Sized
 */
export type ChildrenArray<Size extends number> =
    Size extends 1 ? [Node] :
    Size extends 2 ? [Node, Node] :
    Size extends 3 ? [Node, Node, Node] :
    Size extends 4 ? [Node, Node, Node, Node] :
    Size extends 5 ? [Node, Node, Node, Node, Node] :
    Size extends 6 ? [Node, Node, Node, Node, Node, Node] :
    Size extends 7 ? [Node, Node, Node, Node, Node, Node, Node] :
    Size extends 8 ? [Node, Node, Node, Node, Node, Node, Node, Node] :
    never[];

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
 *   ChildrenArray<T extends // Basics
 *                 'counter' |
 *                 // Math
 *                 'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' | 'log2' |
 *                 'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
 *                 // Filters
 *                 'convolve' |
 *                 // Oscillators
 *                 'phasor' |
 *                 // Samples
 *                 'sample' | 'table' ? 1 :
 *
 *                 T extends // Math
 *                 'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'min' | 'max' |
 *                 // Filters
 *                 'pole' |
 *                 // Signals
 *                 'latch' ? 2 :
 *
 *                 T extends // Signals
 *                 'seq' ? 1 | 2 :
 *
 *                 T extends // Delays
 *                 'delay' ? 3 :
 *
 *                 T extends // Filters
 *                 'biquad' ? 6 :
 *
 *                 0>;
 * } NodeChildren
 */
export type NodeChildren<T extends NodeType> =
    T extends 'root' ? Array<Node> : // TODO

        // Math variadic
    T extends 'add' | 'sub' | 'mul' | 'div' | 'mod' ? Array<Node> :

    ChildrenArray<T extends // Basics
                  'counter' |
                  // Math
                  'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' | 'log2' |
                  'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
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

                  0>;


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
    readonly _props: {},

    // TODO: figure out how this works

    /**
     * This is a private field and please don't try to change it!
     * Use this only for debugging or testing!
     *
     * @private
     * @readonly
     */
    readonly _children: number[]
}

/**
 * Constructor for {@link Node}.
 */
export declare interface NodeConstructor
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

export type Argument = Node | number;
