import { Node } from './node';
import { Props } from './props';
import {
    ChildrenArray,
    ChildrenArraySizeRange,
    SizedChildrenArray
} from './children';

// for docs
// noinspection ES6UnusedImports
import { core } from './';

/**
 * Internal types of {@link Node}.
 *
 * @see core
 * @see Node
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
 * @see core
 * @see Node
 * @see Props
 * @see ChildrenArray
 */
export type CompositeNodeType =
    ({
        [key in ChildrenArraySizeRange]:
        ((...children: SizedChildrenArray<key>) => Node) |
        ((props: Props, ...children: SizedChildrenArray<key>) => Node)
    }[ChildrenArraySizeRange]);

/**
 * Types of {@link Node}.
 *
 * @see core
 * @see Node
 * @see NativeNodeType
 * @see CompositeNodeType
 */
export type NodeType = NativeNodeType | CompositeNodeType;
