import nodePath = require("ast-types/lib/node-path");
import types = require("ast-types/lib/types");
import recast = require("recast");
import JSXElement = require("./collections/JSXElement");
import NodeCollection = require("./collections/Node");
import VariableDeclarator = require("./collections/VariableDeclarator");

type ASTPath<N> = nodePath.NodePath<N, N>;

export interface Collection<N>
    extends
        NodeCollection.TraversalMethods,
        NodeCollection.MutationMethods<N>,
        VariableDeclarator.GlobalMethods,
        VariableDeclarator.TransformMethods<N>,
        JSXElement.GlobalMethods,
        JSXElement.TraversalMethods
{
    /**
     * @param paths An array of AST paths
     * @param parent A parent collection
     * @param types An array of types all the paths in the collection
     *  have in common. If not passed, it will be inferred from the paths.
     */
    new(paths: Array<ASTPath<N>>, parent: Collection<any>, types?: Array<types.Type<any>>): this;

    /**
     * Returns a new collection containing the nodes for which the callback returns true.
     */
    filter<S extends N>(
        callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => path is ASTPath<S>,
    ): Collection<S>;
    filter(
        callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => boolean,
    ): Collection<N>;

    /**
     * Executes callback for each node/path in the collection.
     */
    forEach(callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => void): this;

    /**
     * Tests whether at-least one path passes the test implemented by the provided callback.
     */
    some(callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => boolean): boolean;

    /**
     * Tests whether all paths pass the test implemented by the provided callback.
     */
    every(callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => boolean): boolean;

    /**
     * Executes the callback for every path in the collection and returns a new
     * collection from the return values (which must be paths).
     *
     * The callback can return null to indicate to exclude the element from the
     * new collection.
     *
     * If an array is returned, the array will be flattened into the result
     * collection.
     *
     * @param callback
     * @param type Force the new collection to be of a specific type
     */
    map<T = types.ASTNode>(
        callback: (
            path: ASTPath<N>,
            i: number,
            paths: Array<ASTPath<N>>,
        ) => ASTPath<T> | Array<ASTPath<T>> | null | undefined,
        type?: types.Type<any>,
    ): Collection<T>;

    /** Returns the number of elements in this collection. */
    size(): number;

    /** Returns the number of elements in this collection. */
    length: number;

    /** Returns an array of AST nodes in this collection. */
    nodes(): N[];

    /** Returns an array of ASTPaths in this this collection. */
    paths(): Array<ASTPath<N>>;

    getAST(): Array<ASTPath<any>>;

    /**
     * Converts the AST back to a string, using recast.
     * @param options directly passed to recast's printer
     */
    toSource(options?: recast.Options): string;

    /**
     * Returns a new collection containing only the element at position index.
     * In case of a negative index, the element is taken from the end:
     *   .at(0)  - first element
     *   .at(-1) - last element
     */
    at(index: number): Collection<N>;

    /** Calls "get" on the first path (same as "collection.paths(0).get(...)"). */
    get(...fields: Array<string | number>): any;

    /**
     * Returns the type(s) of the collection. This is only used for unit tests,
     * don't think other consumers would need it.
     */
    getTypes(): string[];

    /**
     * Returns true if this collection has the type 'type'.
     */
    isOfType(type: types.Type<any>): boolean;
}

export function fromPaths(...args: any[]): any;

export function fromNodes(...args: any[]): any;

/**
 * This function adds the provided methods to the prototype of the corresponding
 * typed collection. If no type is passed, the methods are added to
 * Collection.prototype and are available for all collections.
 *
 * @param methods Methods to add to the prototype
 * @param type Optional type to add the methods to
 */
export function registerMethods(methods: object, type?: types.Type<any>): void;

export function hasConflictingRegistration(...args: any[]): any;

export function setDefaultCollectionType(...args: any[]): any;

export {}; // shut off automatic exporting
