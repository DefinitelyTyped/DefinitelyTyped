// Type definitions for idyll-compiler 3.1
// Project: https://github.com/idyll-lang/idyll/tree/master/packages/idyll-compiler, https://github.com/idyll-lang/idyll
// Definitions by: Thanh Ngo <https://github.com/iocat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace compiler {
    type PropType = "variable" | "value" | "expression";
    type PropData = string | number | boolean;
    type PropKey = string;
    type PropValue = [PropType, PropData];
    type Property = [PropKey, PropValue];
    type __RecursiveNode<T> = [string, Property[], T[]];
    interface TreeNode extends __RecursiveNode<Node> {}
    type Node = TreeNode | string;
    type AST = Node[];

    type PostProcessor =
        | ((ast: AST) => AST)
        | ((ast: AST, callback: (err: any, value: AST) => void) => void);

    interface Options {
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
    options?: compiler.Options,
    callback?: () => void
): Promise<compiler.AST> | compiler.AST;

export = compiler;
