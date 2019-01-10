// Type definitions for jscodeshift 0.6
// Project: https://github.com/facebook/jscodeshift#readme
// Definitions by: Brie Bunge <https://github.com/brieb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

declare module "jscodeshift" {
    import { Collection, registerMethods } from "jscodeshift/src/Collection";
    import * as JSXElement from "jscodeshift/src/collections/JSXElement";
    import * as VariableDeclarator from "jscodeshift/src/collections/VariableDeclarator";
    import { Template } from "jscodeshift/src/template";
    import recast, { Builders, NamedTypes, NodePath, Options, Parser } from "recast";
    import { ASTNode } from "ast-types/gen/nodes";

    export type ASTPath<N = ASTNode> = NodePath<N, N>;

    export interface Filters {
        JSXElement: JSXElement.FilterMethods;
        VariableDeclarator: VariableDeclarator.FilterMethods;
    }

    export interface Mappings {
        JSXElement: JSXElement.MappingMethods;
    }

    export interface Plugin {
        (core: Core): void;
    }

    export interface FileInfo {
        /** The absolute path to the current file. */
        path: string;
        /** The source code of the current file. */
        source: string;
    }

    export interface Stats {
        /**
         * Helper function to collect data during --dry runs.
         * This function keeps a counter for how often it was called with a specific argument.
         * The result is shown in the console. Useful for finding out how many files match a criterion.
         */
        (name: string, quantity?: number): void;
    }

    interface Core {
        (source: string, options?: Options): Collection<any>;
        (source: ASTNode | ASTNode[] | ASTPath | ASTPath[]): Collection<any>;

        registerMethods: typeof registerMethods;

        types: typeof recast.types;

        match(path: ASTNode | ASTPath, filter: ((path: ASTNode) => boolean) | ASTNode): boolean;

        /** template, bound to default parser */
        template: Template;

        filters: Filters;

        mappings: Mappings;

        /**
         * Utility function for registering plugins.
         *
         * Plugins are simple functions that are passed the core jscodeshift instance.
         * They should extend jscodeshift by calling `registerMethods`, etc.
         * This method guards against repeated registrations (the plugin callback will only be called once).
         */
        use(plugin: Plugin): void;

        /**
         * Returns a version of the core jscodeshift function "bound" to a specific
         * parser.
         */
        withParser(parser: string | Parser): JSCodeshift;
    }

    type JSCodeshift = Core & NamedTypes & Builders;

    const core: JSCodeshift;
    export default core;

    export interface API {
        j: JSCodeshift;
        jscodeshift: JSCodeshift;
        stats: Stats;
        report: (msg: string) => void;
    }

    export interface Options {
        [option: string]: any;
    }

    export interface Transform {
        /**
         * If a string is returned and it is different from passed source, the transform is considered to be successful.
         * If a string is returned but it's the same as the source, the transform is considered to be unsuccessful.
         * If nothing is returned, the file is not supposed to be transformed (which is ok).
         */
        (file: FileInfo, api: API, options: Options): string | null | undefined | void;
    }

    export * from "ast-types/gen/nodes";
    export { Collection, Parser };
}

declare module "jscodeshift/src/template" {
    import { Parser } from "recast";

    export interface Template {
        /** Tagged template function. Parses the string as source and returns an array of Statement AST nodes. */
        statements(...args: any[]): any;
        /** Tagged template function. Parses the string as source and returns an Statement AST node. */
        statement(...args: any[]): any;
        /** Tagged template function. Parses the string as source and returns an Expression AST node. */
        expression(...args: any[]): any;
    }

    export default function withParser(parser: Parser): Template;

    export {}; // to shut off automatic exporting
}

declare module "jscodeshift/src/Collection" {
    import * as JSXElement from "jscodeshift/src/collections/JSXElement";
    import * as NodeCollection from "jscodeshift/src/collections/Node";
    import * as VariableDeclarator from "jscodeshift/src/collections/VariableDeclarator";
    import recast, { ASTNode, NodePath, Options, Type } from "recast";

    type ASTPath<N> = NodePath<N, N>;

    export interface Collection<N>
        extends NodeCollection.TraversalMethods,
            NodeCollection.MutationMethods<N>,
            VariableDeclarator.GlobalMethods,
            VariableDeclarator.TransformMethods<N>,
            JSXElement.GlobalMethods,
            JSXElement.TraversalMethods {
        /**
         * @param paths An array of AST paths
         * @param parent A parent collection
         * @param types An array of types all the paths in the collection
         *  have in common. If not passed, it will be inferred from the paths.
         */
        new (paths: Array<ASTPath<N>>, parent: Collection<any>, types?: Array<Type<any>>): this;

        /**
         * Returns a new collection containing the nodes for which the callback returns true.
         */
        filter<S extends N>(
            callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => path is ASTPath<S>
        ): Collection<S>;
        filter(
            callback: (path: ASTPath<N>, i: number, paths: Array<ASTPath<N>>) => boolean
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
        map<T = ASTNode>(
            callback: (
                path: ASTPath<N>,
                i: number,
                paths: Array<ASTPath<N>>
            ) => ASTPath<T> | Array<ASTPath<T>> | null | undefined,
            type: Type<any>
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
        toSource(options?: Options): string;

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
        isOfType(type: Type<any>): boolean;
    }

    /**
     * This function adds the provided methods to the prototype of the corresponding
     * typed collection. If no type is passed, the methods are added to
     * Collection.prototype and are available for all collections.
     *
     * @param methods Methods to add to the prototype
     * @param type Optional type to add the methods to
     */
    export function registerMethods(methods: object, type?: Type<any>): void;

    export {}; // to shut off automatic exporting
}

declare module "jscodeshift/src/collections/Node" {
    import { Collection } from "jscodeshift/src/Collection";
    import { ASTNode, Type } from "recast";

    export interface TraversalMethods {
        /**
         * Find nodes of a specific type within the nodes of this collection.
         */
        find<T>(type: Type<T>, filter?: ((value: any) => boolean) | object): Collection<T>;

        /**
         * Returns a collection containing the paths that create the scope of the
         * currently selected paths. Dedupes the paths.
         */
        closestScope<T>(): Collection<T>;

        /**
         * Traverse the AST up and finds the closest node of the provided type.
         */
        closest<T>(type: Type<T>, filter?: any): Collection<T>;

        /**
         * Finds the declaration for each selected path. Useful for member expressions
         * or JSXElements. Expects a callback function that maps each path to the name
         * to look for.
         *
         * If the callback returns a falsey value, the element is skipped.
         */
        getVariableDeclarators<T>(nameGetter: (...args: any[]) => any): Collection<T>;
    }

    export interface MutationMethods<N> {
        /**
         * Simply replaces the selected nodes with the provided node. If a function
         * is provided it is executed for every node and the node is replaced with the
         * functions return value.
         */
        replaceWith<T>(nodes: T | T[] | ((path: any, i: number) => T)): this;

        /**
         * Inserts a new node before the current one.
         */
        insertBefore(insert: any): Collection<N>;

        /**
         * Inserts a new node after the current one.
         */
        insertAfter(insert: any): Collection<N>;

        remove(): Collection<N>;
    }

    export function register(): void;

    export {}; // to shut off automatic exporting
}

declare module "jscodeshift/src/collections/VariableDeclarator" {
    import { VariableDeclarator } from "ast-types/gen/nodes";
    import { Collection } from "jscodeshift/src/Collection";
    import recast, { NodePath } from "recast";

    type ASTPath<N> = NodePath<N, N>;

    export interface GlobalMethods {
        /**
         * Finds all variable declarators, optionally filtered by name.
         */
        findVariableDeclarators(name?: string): Collection<VariableDeclarator>;
    }

    export interface TransformMethods<N> {
        /**
         * Renames a variable and all its occurrences.
         * This method only applies to VariableDeclarator typed collections.
         */
        renameTo(newName: string): Collection<N>;
    }

    interface Filter {
        (path: ASTPath<any>): boolean;
    }

    export interface FilterMethods {
        /**
         * Returns a function that returns true if the provided path is a variable
         * declarator and requires one of the specified module names.
         *
         * @param names A module name or an array of module names
         */
        requiresModule(names: string | string[]): Filter;
    }

    export function register(): void;
    export const filters: FilterMethods;

    export {}; // to shut off automatic exporting
}

declare module "jscodeshift/src/collections/JSXElement" {
    import { JSXElement } from "ast-types/gen/nodes";
    import { Collection } from "jscodeshift/src/Collection";
    import { NodePath } from "recast";

    type ASTPath<N> = NodePath<N, N>;

    export interface GlobalMethods {
        /**
         * Finds all JSXElements optionally filtered by name
         */
        findJSXElements(name?: string): Collection<JSXElement>;

        /**
         * Finds all JSXElements by module name. Given
         *
         *     var Bar = require('Foo');
         *     <Bar />
         *
         * findJSXElementsByModuleName('Foo') will find <Bar />, without having to
         * know the variable name.
         */
        findJSXElementsByModuleName(moduleName: string): Collection<JSXElement>;
    }

    type Defined<T> = T extends undefined ? never : T;
    type JSXElementChild = Defined<JSXElement["children"]>[0];

    export interface TraversalMethods {
        /**
         * Returns all child nodes, including literals and expressions.
         * This method only applies to JSXElement typed collections.
         */
        childNodes<T>(): Collection<JSXElementChild>;

        /**
         * Returns all children that are JSXElements.
         * This method only applies to JSXElement typed collections.
         */
        childElements(): Collection<JSXElement>;
    }

    interface Filter {
        (path: ASTPath<any>): boolean;
    }

    export interface FilterMethods {
        /**
         * Filter method for attributes.
         */
        hasAttributes(attributeFilter: { [attributeName: string]: any }): Filter;

        /**
         * Filter elements which contain a specific child type
         */
        hasChildren(name: string): Filter;
    }

    export interface MappingMethods {
        /**
         * Given a JSXElement, returns its "root" name. E.g. it would return "Foo" for
         * both <Foo /> and <Foo.Bar />.
         */
        getRootName(path: ASTPath<any>): string;
    }

    export function register(): void;
    export const filters: FilterMethods;
    export const mappings: MappingMethods;

    export {}; // to shut off automatic exporting
}
