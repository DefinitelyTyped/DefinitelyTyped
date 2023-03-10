// Expose `JSX` namespace in `global` namespace
import * as React from "./";
export { Fragment } from "./";

export interface JSXSource {
    /**
     * The source file where the element originates from.
     */
    fileName?: string;

    /**
     * The line number where the element was created.
     */
    lineNumber?: number;

    /**
     * The column number where the element was created.
     */
    columnNumber?: number;
}

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsxDEV(
    type: React.ElementType,
    props: unknown,
    key: React.Key | undefined,
    isStatic: boolean,
    source?: JSXSource,
    self?: unknown,
): React.ReactElement;
