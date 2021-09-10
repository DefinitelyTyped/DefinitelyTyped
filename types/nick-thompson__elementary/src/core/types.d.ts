import { Node } from './node';
import { Props } from './props';
import { ChildrenArray } from './children';

// for docs
// noinspection ES6UnusedImports
import { core } from './';

/**
 * Internal types of {@link Node}.
 *
 * @memberOf core
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
 * }
 *
 * @see core
 * @see Node
 */
export declare type NativeNodeType =
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
 * Composites of native {@link Node}s.
 *
 * @memberOf core
 * @typedef {
 *   ((...children: AnyNodeChildrenArray) => Node) |
 *   ((props: AnyProps, ...children: AnyNodeChildrenArray) => Node);
 * }
 *
 * @see core
 * @see Node
 * @see Props
 * @see ChildrenArray
 */
export declare type CompositeNodeType =
    ((...children: ChildrenArray) => Node) |
    ((props: Props, ...children: ChildrenArray) => Node);

/**
 * Types of {@link Node}.
 *
 * @memberOf core
 * @typedef {NativeNodeType | CompositeNodeType}
 *
 * @see core
 * @see Node
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export declare type NodeType = NativeNodeType | CompositeNodeType
