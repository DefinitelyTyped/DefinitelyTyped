// Type definitions for unist-util-is 2.1
// Project: https://github.com/syntax-tree/unist-util-is#readme
// Definitions by: Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types='node' />

import * as Unist from 'unist';

declare namespace unistUtilIs {
    /**
     * @param node Node to test
     * @param index Position of node in parent
     * @param parent Parent of node
     */
    type TestFunction<C = {}> = (this: C, node: unknown, index?: number, parent?: Unist.Parent) => boolean | void;
    type Test<C = {}> = TestFunction<C> | Partial<Unist.Node> | string | null;
}

/**
 * Unist utility to check if a node passes a test.
 *
 * @param test When not given, checks if `node` is a `Node`.
 * When `string`, works like passing `function (node) {return node.type === test}`.
 * When `array`, checks any one of the subtests pass.
 * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values
 * @param node Node to check. `false` is returned
 * @param index Position of `node` in `parent`
 * @param parent Parent of `node`
 * @param context Context object to invoke `test` with
 * @returns Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
 */
declare function unistUtilIs<C = {}>(test: unistUtilIs.Test<C> | Array<unistUtilIs.Test<C>>, node: unknown, index?: number, parent?: Unist.Parent, context?: any): boolean;

export = unistUtilIs;
