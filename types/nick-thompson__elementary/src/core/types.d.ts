import { Node } from './node';
import { Props } from './props';
import { ChildrenArray } from './children';

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
 * Composites of native {@link Node}s.
 *
 * @typedef {
 *   ((...children: AnyNodeChildrenArray) => Node) |
 *   ((props: AnyProps, ...children: AnyNodeChildrenArray) => Node);
 * } NodeType
 */
export type CompositeNodeType =
    ((...children: ChildrenArray) => Node) |
    ((props: Props, ...children: ChildrenArray) => Node);

/**
 * Types of {@link Node}.
 *
 * @typedef {NativeNodeType | CompositeNodeType} NodeType
 */
export type NodeType = NativeNodeType | CompositeNodeType
