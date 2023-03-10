import { ElementType, Fragment, Key, ReactElement } from '.';

export { Fragment };

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsx(type: ElementType, props: unknown, key?: Key | undefined): ReactElement;

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsxs(type: ElementType, props: unknown, key?: Key | undefined): ReactElement;
