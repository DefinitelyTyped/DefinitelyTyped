import { NativeNodeType, CompositeNodeType, NodeType } from './types';
import { Node } from './node';
import { Props } from './props';

// for docs
// noinspection ES6UnusedImports
import { core } from './';


// Child

/**
 * {@link Node} child type. Any number will be converted to an el.const node
 * internally.
 *
 * @memberOf core
 *
 * @typedef {Node | number}
 *
 * @see core
 * @see Node
 */
export declare type Child = Node | number;


// Arrays

/**
 * {@link Node} children array size range. {@link Node}s can have eight
 * children at most.
 *
 * @memberOf core
 *
 * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}
 *
 * @see core
 */
export declare type ChildrenArraySize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * A helper children array of fixed size in the range of [0, 8].
 *
 * @memberOf core
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
 * }
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 */
export declare type SizedChildrenArray<Size extends ChildrenArraySize> =
    Size extends 1 ?
    [Child] :
    Size extends 2 ?
    [Child, Child] :
    Size extends 3 ?
    [Child, Child, Child] :
    Size extends 4 ?
    [Child, Child, Child, Child] :
    Size extends 5 ?
    [Child, Child, Child, Child, Child] :
    Size extends 6 ?
    [Child, Child, Child, Child, Child, Child] :
    Size extends 7 ?
    [
        Child, Child, Child, Child, Child, Child,
        Child
    ] :
    Size extends 8 ?
    [
        Child, Child, Child, Child, Child, Child,
        Child, Child
    ] :
    never[];

/**
 * Helper type to describe that some {@link Node}s can have a maximum of eight
 * children.
 *
 * @memberOf core
 *
 * @typedef {
 *   SizedChildrenArray<0> |
 *   SizedChildrenArray<1> |
 *   SizedChildrenArray<2> |
 *   SizedChildrenArray<3> |
 *   SizedChildrenArray<4> |
 *   SizedChildrenArray<5> |
 *   SizedChildrenArray<6> |
 *   SizedChildrenArray<7> |
 *   SizedChildrenArray<8>
 * }
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 * @see SizedChildrenArray
 */
export declare type ChildrenArray =
    SizedChildrenArray<0> |
    SizedChildrenArray<1> |
    SizedChildrenArray<2> |
    SizedChildrenArray<3> |
    SizedChildrenArray<4> |
    SizedChildrenArray<5> |
    SizedChildrenArray<6> |
    SizedChildrenArray<7> |
    SizedChildrenArray<8>;

/**
 * Helper type to describe that some {@link Node}s can have a maximum of eight
 * children and a minimum of 1.
 *
 * @memberOf core
 *
 * @typedef {
 *   SizedChildrenArray<1> |
 *   SizedChildrenArray<2> |
 *   SizedChildrenArray<3> |
 *   SizedChildrenArray<4> |
 *   SizedChildrenArray<5> |
 *   SizedChildrenArray<6> |
 *   SizedChildrenArray<7> |
 *   SizedChildrenArray<8>
 * }
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 * @see SizedChildrenArray
 */
export declare type VariadicChildrenArray =
    SizedChildrenArray<1> |
    SizedChildrenArray<2> |
    SizedChildrenArray<3> |
    SizedChildrenArray<4> |
    SizedChildrenArray<5> |
    SizedChildrenArray<6> |
    SizedChildrenArray<7> |
    SizedChildrenArray<8>;


// Generic

/**
 * Base type for children.
 *
 * @memberOf core
 *
 * @typedef {ChildrenArray}
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export declare type Children =
    ChildrenArray;

/**
 * Type of children of any given {@link NativeNodeType}.
 *
 * @memberOf core
 * @template T
 *
 * @typedef {
 *   ({
 *        [key in // Native
 *           'rand' |
 *           // Basics
 *           'in' | 'sr' |
 *           // Delays
 *           'z']: SizedChildrenArray<0>
 *    } & {
 *        [key in // Basics
 *           'in' | 'counter' |
 *           // Math
 *           'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' | 'log2' |
 *           'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
 *           // Filters
 *           'convolve' |
 *           // Oscillators
 *           'phasor' |
 *           // Samples
 *           'sample' | 'table' |
 *           // Signals
 *           'seq']: SizedChildrenArray<1>
 *    } & {
 *        [key in // Math
 *           'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'mod' | 'min' | 'max' |
 *           // Filters
 *           'pole' |
 *           // Signals
 *           'latch' | 'seq']: SizedChildrenArray<2>
 *    } & {
 *        [key in // Delays
 *           'delay']: SizedChildrenArray<3>
 *    } & {
 *        [key in // Filters
 *           'biquad']: SizedChildrenArray<6>
 *    } & {
 *        [other: string]: ChildrenArray
 *    })[T]
 * }
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export declare type NativeNodeChildren<T extends NativeNodeType> =
    ({
         [key in // Native
            'rand' |
            // Basics
            'in' | 'sr' |
            // Delays
            'z']: SizedChildrenArray<0>
     } & {
         [key in // Basics
            'in' | 'counter' |
            // Math
            'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' | 'log2' |
            'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
            // Filters
            'convolve' |
            // Oscillators
            'phasor' |
            // Samples
            'sample' | 'table' |
            // Signals
            'seq']: SizedChildrenArray<1>
     } & {
         [key in // Math
            'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'mod' | 'min' | 'max' |
            // Filters
            'pole' |
            // Signals
            'latch' | 'seq']: SizedChildrenArray<2>
     } & {
         [key in // Delays
            'delay']: SizedChildrenArray<3>
     } & {
         [key in // Filters
            'biquad']: SizedChildrenArray<6>
     } & {
         [other: string]: ChildrenArray
     })[T];

/**
 * Type of children of any given {@link NativeNodeType}.
 *
 * @template T
 * @memberOf core
 *
 * @typedef {ChildrenArray}
 *
 * @see core
 * @see Child
 * @see ChildrenArraySize
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export declare type CompositeNodeChildren<T extends CompositeNodeType> =
    Parameters<T> extends [] ? [] :
    Parameters<T> extends [infer IProps, ...infer IChildren] ?
    IProps extends Props ? IChildren : [IProps, ...IChildren] :
    never;

/**
 * Type of children of any given {@link NodeType}.
 *
 * @memberOf core
 * @template T
 *
 * @typedef {
 *   NodeType extends T ? Children :
 *   T extends NativeNodeType ? NativeNodeChildren<T> :
 *   NodeChildrenArray;
 * }
 *
 * @see core
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 * @see NativeNodeChildren
 * @see CompositeNodeChildren
 */
export declare type NodeChildren<T extends NodeType> =
    NodeType extends T ? Children :
    T extends NativeNodeType ? NativeNodeChildren<T> :
    T extends CompositeNodeType ? CompositeNodeChildren<T> :
    never;
