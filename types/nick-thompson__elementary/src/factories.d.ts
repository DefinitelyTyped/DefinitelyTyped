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
 * @param type
 * {@link core.NodeType} of the {@link core.Node} to create
 *
 * @param [props]
 * {@link core.NodeProps} of the {@link core.Node} to create
 *
 * @param children
 * {@link core.NodeChildren} of the {@link core.Node} to create
 *
 * @returns
 * a {@link core.Node} for the given {@link core.NodeType},
 * {@link core.NodeProps}, and {@link core.NodeChildren}
 *
 * @see el
 * @see core.Node
 * @see core.ConcreteNode
 * @see core.NodeType
 * @see core.NodeProps
 * @see core.NodeChildren
 */
export const
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
 * @param type
 * {@link core.NodeType} of {@link core.Node} to create a factory for
 *
 * @returns
 * a factory for the given {@link core.NodeType}
 *
 * @see el
 * @see core.Node
 * @see core.NodeType
 * @see core.NodeFactory
 */
export function createNodeFactory<T extends core.NodeType>(
    type: T): core.NodeFactory<T>;
