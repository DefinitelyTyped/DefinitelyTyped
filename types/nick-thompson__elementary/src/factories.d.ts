import { core } from './core';

// for docs
// noinspection ES6UnusedImports
import * as el from '../';


// ============================================================================
// Functions

/**
 * A convenience wrapper around Node construction to facilitate optionally
 * providing a props object and child node grouping.
 *
 * Users may also construct `core.Node` instances manually.
 *
 * @template T
 * @function createNode
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
 *
 * @see el
 * @see core.Node
 * @see core.ConcreteNode
 * @see core.NodeType
 * @see core.NodeProps
 * @see core.NodeChildren
 */
export declare const
    createNode:
        (<T extends core.NodeType>(
            type: T,
            props: core.NodeProps<T>,
            ...children: core.NodeChildren<T>) => core.ConcreteNode<T>) &
        (<T extends core.NodeType>(
            type: T,
            ...children: core.NodeChildren<T>) => core.ConcreteNode<T>);


/**
 * A convenience wrapper for defining factory functions around
 * {@link createNode}.
 *
 * @template T
 * @function createNodeFactory
 *
 * @param {T} type
 * {@link core.NodeType} of {@link core.Node} to create a factory for
 *
 * @returns {NodeFactory<T>}
 * a factory for the given {@link core.NodeType}
 *
 * @see el
 * @see core.Node
 * @see core.NodeType
 * @see core.NodeFactory
 */
export declare const createNodeFactory:
    <T extends core.NodeType>(type: T) => core.NodeFactory<T>;
