import { core } from './core';


/**
 * A convenience wrapper around Node construction to facilitate optionally
 * providing a props object and child node grouping.
 *
 * Users may also construct `core.Node` instances manually.
 *
 * @template T
 *
 * @param {T} type
 * {@link core.NodeType} of the {@link core.Node} to create
 *
 * @param {core.NodeProps<T>} props
 * {@link core.NodeProps<T>} of the {@link core.Node} to create
 *
 * @param {...core.NodeChildren<T>} children
 * {@link core.NodeChildren<T>} of the {@link core.Node} to create
 *
 * @returns {core.Node}
 * a {@link core.Node} for the given {@link core.NodeType},
 * {@link core.NodeProps<T>}, and {@link core.NodeChildren<T>}
 */
export declare function
createNode<T extends core.NodeType>(
    type: T,
    props: core.NodeProps<T>,
    ...children: core.NodeChildren<T>): core.Node;


/**
 * Returns a callback factory for the appropriate {@link core.NodeType}.
 *
 * @template T
 * @typedef {
 *   (props: core.NodeProps<T>, ...children: core.NodeChildren<T>) => core.Node
 * } NodeFactory
 */
export declare type NodeFactory<T extends core.NodeType> =
    (props: core.NodeProps<T>, ...children: core.NodeChildren<T>) => core.Node;

/**
 * A convenience wrapper for defining factory functions around
 * {@link createNode}.
 *
 * @template T
 *
 * @param {T} type
 * {@link core.NodeType} of {@link core.Node} to create a factory for
 *
 * @returns {NodeFactory<T>}
 * a factory for the given {@link core.NodeType}
 */
export declare function
createNodeFactory<T extends core.NodeType>(type: T): NodeFactory<T>;
