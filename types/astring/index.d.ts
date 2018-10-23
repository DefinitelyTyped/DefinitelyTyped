// Type definitions for astring 1.3
// Project: https://github.com/davidbonnet/astring
// Definitions by: Nikolaj Kappler <https://github.com/nkappler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as ESTree from 'estree';
import 'node';
import { Stream } from 'stream';

export interface Options {
    /** string to use for indentation (defaults to "  ") */
    indent?: string;
    /** string to use for line endings (defaults to "\n") */
    lineEnd?: string;
    /** indent level to start from (defaults to 0) */
    startingIndentLevel?: number;
    /** generate comments if true (defaults to false) */
    comments?: boolean;
    /** custom code generator (defaults to astring.baseGenerator) */
    generator?: object;
    /** source map generator (defaults to null), see https://github.com/mozilla/source-map#sourcemapgenerator */
    sourceMap?: any;
}

/** Returns a string representing the rendered code of the provided AST `node`. However, if an `output` stream is provided in the options, it writes to that stream and returns it. */
export function generate(node: ESTree.Node, options?: Options): string;
/** Returns a string representing the rendered code of the provided AST `node`. However, if an `output` stream is provided in the options, it writes to that stream and returns it. */
export function generate(node: ESTree.Node, options: Options & {
    /** output stream to write the rendered code to (defaults to null) */
    output: Stream;
}): Stream;

/**
 * A code generator consists of a mapping of node names and functions that take two arguments: `node` and `state`.
 * The `node` points to the node from which to generate the code and the `state` exposes the `write` method that takes generated code strings.
 */
export type Generator = { [key in ESTree.Node["type"]]: (node: Extract<ESTree.Node, { type: key }>, state: { write(s: string): void }) => void };

/** Base generator that can be used to extend Astring. See https://github.com/davidbonnet/astring#extending */
export const baseGenerator: Generator;

declare global {
    interface astring {
        generate: typeof generate;
        /** Base generator that can be used to extend Astring. See https://github.com/davidbonnet/astring#extending */
        baseGenerator: Generator;
    }
    const astring: astring;
}
