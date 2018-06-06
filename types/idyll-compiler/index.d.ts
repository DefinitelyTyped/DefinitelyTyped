// Type definitions for idyll-compiler 3.1
// Project: https://github.com/idyll-lang/idyll/tree/master/packages/idyll-compiler
// Definitions by: Thanh Ngo <https://github.com/iocat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type PropType = "variable" | "value" | "expression";
export type PropData = string | number | boolean;
export type PropKey = string;
export type PropValue = [PropType, PropData];
export type Property = [PropKey, PropValue];
type __RecursiveNode<T> = [string, Property[], T[]];
export interface TreeNode extends __RecursiveNode<Node> {}
export type Node = TreeNode | string;
export type AST = Node[];

export type PostProcessor =
    | ((ast: AST) => AST)
    | ((ast: AST, callback: (err: any, value: AST) => void) => void);

export interface Options {
    spellcheck?: boolean;

    smartquotes?: boolean;

    /**
     * If false and there is no postprocessors, compiler returns the AST synchronously
     * Otherwise, a promise is returned
     *
     */
    async?: boolean;

    /**
     * compiler plugins
     * If provided, compiler always compiles asynchronously
     */
    postProcessors?: PostProcessor[];
}

/**
 * Compiles the given idyllMarkup and returns an AST either synchronously
 * or asynchronously.
 *
 * If postProcessors are provided or options.async is set to true:
 *      compiler returns a promise
 * Otherwise, compile returns the AST synchronously
 *
 */
declare function compiler(
    input: string,
    options?: Options,
    callback?: () => void
): Promise<AST> | AST;

export default compiler;
