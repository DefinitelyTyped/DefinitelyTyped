// Type definitions for jscodeshift 0.6
// Project: https://github.com/facebook/jscodeshift#readme
// Definitions by: Brie Bunge <https://github.com/brieb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { ASTNode } from "ast-types/gen/nodes";
import recast, { Builders, NamedTypes, NodePath, Options, Parser } from "recast";
import { Collection, registerMethods } from "./src/Collection";
import * as JSXElement from "./src/collections/JSXElement";
import * as VariableDeclarator from "./src/collections/VariableDeclarator";
import { Template } from "./src/template";

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

declare const core: JSCodeshift;
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
