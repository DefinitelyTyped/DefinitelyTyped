// TODO: restrict props and children based on node type

/**
 * Permitted values for {@link core.Node} types
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
 * Basic building block of the Elementary audio graph.
 */
export declare class Node
{
    /**
     * Creates a {@link core.Node}.
     *
     * @example
     *     new core.Node('phasor', {}, [el.const({value: 80})]) ==
     *     el.phasor(el.const({value: 80}))
     *
     * @param type
     * type must be one of the {@link NodeType} permitted values
     * @param props
     * props for the {@link core.Node} must match the
     * {@link core.Node} props type
     * @param children
     * number of children must match the number of children that
     * the {@link core.Node} needs
     */
    constructor(type: NodeType, props: {}, children: Node[]);

    /**
     * Checks whether an object is a {@link core.Node}
     *
     * @param toCheck
     * object to check whether it is a {@link core.Node}
     */
    static isNode(toCheck: any): toCheck is Node;
}
