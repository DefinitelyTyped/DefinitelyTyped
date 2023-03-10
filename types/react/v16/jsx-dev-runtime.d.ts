import { ElementType, Fragment, Key, ReactElement } from '.';

export { Fragment };

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
    type: ElementType,
    props: unknown,
    key: Key | undefined,
    isStatic: boolean,
    source?: JSXSource | undefined,
    self?: unknown,
): ReactElement;
