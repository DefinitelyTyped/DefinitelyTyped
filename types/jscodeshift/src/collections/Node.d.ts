import astTypes = require('ast-types');
import nodePath = require('ast-types/lib/node-path');
import types = require('ast-types/lib/types');
import Collection = require('../Collection');

type ASTPath<N> = nodePath.NodePath<N, N>;

type RecursiveMatchNode<T> =
    | (T extends {}
          ? {
                [K in keyof T]?: RecursiveMatchNode<T[K]>;
            }
          : T)
    | ((value: T) => boolean);

type ASTNode = types.ASTNode;

export interface TraversalMethods {
    /**
     * Find nodes of a specific type within the nodes of this collection.
     */
    find<T extends ASTNode>(type: types.Type<T>, filter?: RecursiveMatchNode<T>): Collection.Collection<T>;

    /**
     * Returns a collection containing the paths that create the scope of the
     * currently selected paths. Dedupes the paths.
     */
    closestScope(): Collection.Collection<astTypes.namedTypes.ASTNode>;

    /**
     * Traverse the AST up and finds the closest node of the provided type.
     */
    closest<T>(type: types.Type<T>, filter?: RecursiveMatchNode<T>): Collection.Collection<T>;

    /**
     * Finds the declaration for each selected path. Useful for member expressions
     * or JSXElements. Expects a callback function that maps each path to the name
     * to look for.
     *
     * If the callback returns a falsy value, the element is skipped.
     */
    getVariableDeclarators(
        nameGetter: (...args: any[]) => any,
    ): Collection.Collection<astTypes.namedTypes.VariableDeclarator>;
}

export interface MutationMethods<N> {
    /**
     * Simply replaces the selected nodes with the provided node. If a function
     * is provided it is executed for every node and the node is replaced with the
     * functions return value.
     */
    replaceWith<T>(nodes: T | T[] | ((path: ASTPath<N>, i: number) => T)): Collection.Collection<T>;

    /**
     * Inserts a new node before the current one.
     */
    insertBefore(insert: any): Collection.Collection<N>;

    /**
     * Inserts a new node after the current one.
     */
    insertAfter(insert: any): Collection.Collection<N>;

    remove(): Collection.Collection<N>;
}

export function register(): void;

export {}; // shut off automatic exporting
