import { NativeNodeType, CompositeNodeType, NodeType } from './types';
import { Node } from './node';

// for docs
// noinspection ES6UnusedImports
import { core } from './';

// Child

/**
 * {@link Node} child type. Any number will be converted to an el.const node
 * internally.
 *
 * @see core
 * @see Node
 */
export type Child = Node | number;

// Arrays

/**
 * {@link Node} children array size range. {@link Node}s can have eight
 * children at most.
 *
 * @see core
 */
export type ChildrenArraySizeRange =
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

/**
 * A helper children array of fixed size in the range of [0, 8].
 *
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 */
export type SizedChildrenArray<Size extends ChildrenArraySizeRange> =
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
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 */
export type ChildrenArray =
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
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 */
export type VariadicChildrenArray =
    SizedChildrenArray<1> |
    SizedChildrenArray<2> |
    SizedChildrenArray<3> |
    SizedChildrenArray<4> |
    SizedChildrenArray<5> |
    SizedChildrenArray<6> |
    SizedChildrenArray<7> |
    SizedChildrenArray<8>;

/**
 * Helper type to get the children array size of {@link Node}s.
 *
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type ChildrenArraySize<A extends any[]> =
    A['length'] & ChildrenArraySizeRange;

// Generic

/**
 * Base type for children.
 *
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type Children =
    ChildrenArray;

/**
 * Type of children of any given {@link NativeNodeType}.
 *
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type NativeNodeChildren<T extends NativeNodeType> =
    ({
         [key in // Basics
            'in']: SizedChildrenArray<0> | SizedChildrenArray<1>
     } & {
         [key in  // Signals
            'seq']: SizedChildrenArray<1> | SizedChildrenArray<2>
     } & {
         [key in // Native
            'rand' |
            // Basics
            'sr' |
            // Delays
            'z']: SizedChildrenArray<0>
     } & {
         [key in // Basics
            'counter' |
            // Math
            'sin' | 'cos' | 'tan' | 'tanh' | 'asinh' | 'ln' | 'log' | 'log2' |
            'ceil' | 'floor' | 'sqrt' | 'exp' | 'abs' |
            // Filters
            'convolve' |
            // Oscillators
            'phasor' |
            // Samples
            'sample' | 'table']: SizedChildrenArray<1>
     } & {
         [key in // Math
            'le' | 'leq' | 'ge' | 'geq' | 'pow' | 'mod' | 'min' | 'max' |
            // Filters
            'pole' |
            // Signals
            'latch']: SizedChildrenArray<2>
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
 * Type of children of any given {@link CompositeNodeType}.
 *
 * @see core
 * @see Child
 * @see ChildrenArraySizeRange
 * @see SizedChildrenArray
 * @see ChildrenArray
 */
export type CompositeNodeChildren<T extends CompositeNodeType> =
    Parameters<T> extends [] ? [] :
    Parameters<T> extends [infer IProps, ...infer IChildren] ?
    IProps extends Child ?
    SizedChildrenArray<ChildrenArraySize<[IProps, ...IChildren]>> :
    SizedChildrenArray<ChildrenArraySize<IChildren>> :
    never;

/**
 * Type of children of any given {@link NodeType}.
 *
 * @see core
 * @see NodeType
 * @see NativeNodeType
 * @see CompositeNodeType
 * @see NativeNodeChildren
 * @see CompositeNodeChildren
 */
export type NodeChildren<T extends NodeType> =
    NodeType extends T ? Children :
    T extends NativeNodeType ? NativeNodeChildren<T> :
    T extends CompositeNodeType ? CompositeNodeChildren<T> :
    never;
