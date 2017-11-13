// Type definitions for grasp 0.6
// Project: http://graspjs.com
// Definitions by: Isaac Wolkerstorfer <https://github.com/agnoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import * as fs from "fs";
import * as cliColor from "cli-color";
// Though Grasp does not use esprima, the parser it uses (flow-parser) has a compatible Node type and existing typedefs
import { Node } from "estree";

export = grasp;

declare function grasp(options: {
    args: string[] | Record<string, any> | string;
    error?: (message: string) => void;
    callback?: (result: string) => void;
    exit?: (code: number) => void;
    input?: string;

    // The following are "overrides" for defaults, such as console, cli-color,
    // process.stdin, or fs. In most cases grasp only makes use of a small
    // surface area of the types, but I think if someone really wants to pass a
    // fake fs that only implements the subset of methods they think grasp uses,
    // it should be up to them to use a cast rather than the typedef to be
    // overly lenient. We never know if grasp might change their internal use of
    // fs, after all.
    fs?: typeof fs;
    console?: typeof console;
    textFormat?: typeof cliColor;
    stdin?: typeof process.stdin;
}): void;

declare namespace grasp {
    const VERSION: string;

    // Both the search and replace functions are curryable, which leads to quite
    // a bit of noise. Using generic currying will discard variable name
    // information, so we hand-roll it here

    function search(engine: QueryEngineType, selector: string, input: string): Node[];
    function search(engine: QueryEngineType, selector: string): (input: string) => Node[];
    function search(engine: QueryEngineType): GraspSearchWithQueryEngine;

    function replace(engine: QueryEngineType, selector: string, replacement: Replacement, input: string): string;
    function replace(engine: QueryEngineType, selector: string, replacement: Replacement): (input: string) => string;
    function replace(engine: QueryEngineType, selector: string): GraspReplaceWithSelector;
    function replace(engine: QueryEngineType): GraspReplaceWithQueryEngine;

    type QueryEngineType = "squery" | "equery";

    type Replacement =
        | string
        | ((
              getRaw: (node: Node) => string,
              node: Node,
              query: (q: string) => Node[],
              named: { [key: string]: string | Node }
          ) => string);

    type GraspSearchWithQueryEngine = ((selector: string, input: string) => Node[]) &
        ((selector: string) => (input: string) => Node[]);

    type GraspReplaceWithQueryEngine = ((selector: string) => GraspReplaceWithSelector) &
        ((selector: string, replacement: Replacement) => (input: string) => string) &
        ((selector: string, replacement: Replacement, input: string) => string);

    type GraspReplaceWithSelector = ((replacement: Replacement) => (input: string) => string) &
        ((replacement: Replacement, input: string) => string);
}
