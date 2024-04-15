import * as acorn from "acorn";

/**
 * Check the source code string 'src' for syntax errors. Optionally you can specify a filename
 * file that will show up in the output.
 * If 'src' has a syntax error, return an error object err that can be printed or stringified.
 * If there are no syntax errors in 'src', return undefined.
 * Options will be passed through to acorn-node. acorn-node defaults to options
 * that match the most recent Node versions.
 */
declare function syntaxError(
    src: any,
    file?: string,
    opts?: acorn.Options,
): (SyntaxError & { line: number; column: number; annotated: string; inspect(): string }) | undefined;

export = syntaxError;
